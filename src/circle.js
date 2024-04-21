const valueContainer = document.querySelector(".value-container")
let progressBar = document.getElementById("bar0")

function progress(x, diff){
    let progressValue = x >= 100 ? 100 : x

    valueContainer.innerHTML = `${gwaifyNumber(format(progressValue, data.precision))}%`
    progressBar.style.background = `conic-gradient(
      rgb(232, 139, 16) ${progressValue * 3.6}deg,
      #000 ${progressValue * 3.6}deg
    )`

    if(data.circle.progress >= 100) return data.circle.progress = 100
    data.circle.progress += (1+getCircleSpeedIncrease())*getCircleSpeedMultiplier()*diff
}

function openLootboxConfirm(){
    if(data.circle.progress < 100) {
        let text = document.getElementById("lootboxText")

        text.innerHTML = `The Circle is not yet ready.`
        text.classList.add("fade-in")
        setTimeout(function () {
            text.classList.remove("fade-in")
        }, 2000);

        return;
    }

    createConfirmation('Are you sure?', 'Clicking on The Circle will give you a random item, but it will reset your Circle progress!', 'No Way!', 'Yes, lets do this.', openLootbox)
}

function openLootbox(stack = 0){
    let canOpen = data.circle.progress >= 100
    let text = document.getElementById("lootboxText")

    if(!canOpen) text.innerHTML = `The Circle is not yet ready.`
    text.classList.add("fade-in")
    setTimeout(function () {
        text.classList.remove("fade-in")
    }, 2000);

    if(!canOpen) return

    let rarity = stack > 0 ? getRarity(stack) : getRarity(getRandom(1, 101))
    let item = getRandomItem(rarity.id)
    item.natural = true
    text.innerHTML = `You got a <span>${rarity.name} <b>${item.name}</b></span>!`
    text.children[0].style.color = rarity.color

    data.circle.progress = 0
    data.items[item.rarity].push(item)
}

// This function may seem unnecessary, but I'm keeping it in case I expand the Speed boost system in the future
function getCircleSpeedIncrease(){
    return getTotalRarityEffect()
}

function getCircleSpeedMultiplier(){
    return 1+data.items[5].length
}

function updateCircleHTML()
{
    let text = document.getElementById("informationText")
    if (!data.sToggles[6]) {
        text.innerHTML = ""
        return;
    }
    text.innerHTML = `The base Circle Speed is ${format(1, data.precision)}% per second`
    for (let i = 0; i < 4; i++) {
        let rarity = rarities[i]
        let color = i == 0 ? '#969696' : rarity.color
        let cnt = data.items[i].length
        let effect = getRarityEffect(i)
        text.innerHTML += `<br>You have <span style="color: ${color};">${cnt} ${rarity.name}</span> items, increasing your Circle Speed by ${format(effect, data.precision)}`
    }
    let rarity = rarities[5]
    let color = rarity.color
    let cnt = data.items[5].length
    let effect = cnt + 1
    text.innerHTML += `<br>You have <span style="color: ${color};">${cnt} ${rarity.name}</span> items, multiplying your Circle Speed by ${format(effect, data.precision)}`
    text.innerHTML += `<br>Your Circle Speed is ${format((1+getCircleSpeedIncrease())*getCircleSpeedMultiplier(), data.precision)}% per second`
}
