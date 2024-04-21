function updateAnnihilationTexts(){
    for (let i = 0; i < 4; i++) {
        let rarity = rarities[i]
        let nextRarity = rarities[i+1]
        if(data.items[i].length < 3){
            DOM(`annihilation${i}`).innerHTML = `<span>${rarity.name} ANNIHILATION</span> cannot be performed.`
            colorizeAnnihilationTexts(rarity, nextRarity, false)
            continue
        }
        DOM(`annihilation${i}`).innerHTML = `<span>ANNIHILATE ${Math.floor(data.items[i].length/3)*3} ${rarity.name}</span> Items for <span>${Math.floor(data.items[i].length/3)} ${nextRarity.name}</span> Items`
        colorizeAnnihilationTexts(rarity, nextRarity, true)
    }
}
function colorizeAnnihilationTexts(rarity, nextRarity, extended){
    let color = rarity.id === 0 ? '#969696' : rarity.color

    DOM(`annihilation${rarity.id}`).children[0].style.color = color

    if(extended) DOM(`annihilation${rarity.id}`).children[1].style.color = nextRarity.color
}

function annihilateConfirm(i) {
    let rarity = rarities[i]
    let nextRarity = rarities[i+1]
    if(data.items[i].length < 3) return createAlert("Failure", `Insufficient ${rarity.name} Items`, "Dang.")

    createConfirmation('Are you sure?', `This will ANNIHILATE ${Math.floor(data.items[i].length/3)*3} ${rarity.name} Items for ${Math.floor(data.items[i].length/3)} ${nextRarity.name} Items!`, 'No Way!', 'Yes, lets do this.', annihilate, i)
}

function annihilate(i){
    let amountGained = Math.floor(data.items[i].length/3)
    let gainedItemNames = []
    if(amountGained < 1) return

    for (let j = 0; j < amountGained; j++) {
        let item = getRandomItem(i+1)
        item.natural = false
        data.items[i+1].push(item)
        for (let k = 0; k < itemsMap[i+1].length; k++) {
            if (itemsMap[i+1][k].name == item.name) {
                itemsMap[i+1][k].total++
            }
        }
        gainedItemNames.push(item.name)
    }

    for (let j = 0; j < amountGained * 3; j++) {
        let item = data.items[i][j]
        for (let k = 0; k < itemsMap[i].length; k++) {
            if (itemsMap[i][k].name == item.name) {
                itemsMap[i][k].total--
                if (item.natural) itemsMap[i][k].natural--
            }
        }
    }
    data.items[i] = data.items[i].splice(amountGained*3)

    let text = document.getElementById("annihilationGainText");
    text.classList.add("fade-in");
    setTimeout(function () {
        text.classList.remove("fade-in");
    }, 3000);

    text.innerHTML = `You got a <span>${rarities[i+1].name} <b>${generateAnnihilationGainText(gainedItemNames)}</b></span>!`
    text.children[0].style.color = rarities[i+1].color

    updateAnnihilationTexts()
}

function generateAnnihilationGainText(gainedItemNames){
    let bound = gainedItemNames.length
    let gainedItemNameList = gainedItemNames

    if (data.sToggles[7]) {
        let gainedItemList = []
        for (let i = 0; i < bound; i++) {
            let newItem = true;
            for (let j = 0; j < gainedItemList.length; j++) {
                if (gainedItemList[j].name == gainedItemNames[i]) {
                    newItem = false;
                    gainedItemList[j].total++;
                    break;
                }
            }
            if (newItem) {
                gainedItemList.push({name: gainedItemNames[i], total: 1});
            }
        }
        gainedItemNameList = []
        for (let i = 0; i < gainedItemList.length; i++) {
            gainedItemNameList.push(gainedItemList[i].total + " " + gainedItemList[i].name + (gainedItemList[i].total > 1 ? "s" : ""));
        }
        bound = gainedItemNameList.length
    }

    if(bound === 1) return gainedItemNameList[0]
    if(bound === 2) return `${gainedItemNameList[0]} and ${gainedItemNameList[1]}`

    let text = ""
    for (let i = 0; i < bound; i++) {
        text += `${gainedItemNameList[i]}`
        if(i === bound - 1) continue

        if(i === bound - 2) text += ', and '
        else text += ', '
    }

    return text
}
