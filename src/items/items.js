function makeItems(){
    let pushed = 0
    let rowNum = 0

    let firstRow = document.createElement('div')
    firstRow.id = `itemRow0`
    firstRow.style.marginTop = '4rem'
    document.getElementById('itemRowContainer').append(firstRow)

    if (data.sToggles[7]) {
        for (let i = itemsMap.length-1; i > 0-1; i--) {
            for (let j = 0; j < itemsMap[i].length; j++) {
                let item = document.createElement('button')
                let rarity = rarities[i]

                if(itemsMap[i][j].natural) item.style.boxShadow = `0px 0px 10px 0px ${rarity.color}`
                item.style.border = `1px solid ${rarity.color}`
                item.style.background = 'black'
                item.style.marginLeft = `0.4rem`
                item.style.marginRight = `0.4rem`

                item.setAttribute("tooltip", `A ${rarity.name} ${itemsMap[i][j].name}${i !== 6 ? `\n${rarity.effectDesc}` : ``}\n\n"${itemsMap[i][j].desc}"`)

                let icon = document.createElement('img')
                icon.src = `${getItemSprite(itemsMap[i][j].name)}`

                item.append(icon)
                let color = rarity.id === 0 ? '#969696' : rarity.color
                item.innerHTML += `<br><span style="color: ${color}">Natural x${itemsMap[i][j].natural}<br>Total x${itemsMap[i][j].total}</span>`
                document.getElementById(`itemRow${rowNum}`).append(item)

                pushed++
                if(pushed >= 8){
                    let row = document.createElement('div')
                    rowNum++
                    row.id = `itemRow${rowNum}`
                    row.style.marginTop = '0.5rem'
                    document.getElementById(`itemRowContainer`).append(row)
                    pushed = 0
                }
            }
        }
        return
    }

    for (let i = data.items.length-1; i > 0-1; i--) {
        for (let j = 0; j < data.items[i].length; j++) {
            let item = document.createElement('button')
            let rarity = rarities[data.items[i][j].rarity]

            if(data.items[i][j].natural) item.style.boxShadow = `0px 0px 10px 0px ${rarity.color}`
            item.style.border = `1px solid ${rarity.color}`
            item.style.background = 'black'
            item.style.marginLeft = `0.4rem`
            item.style.marginRight = `0.4rem`

            item.setAttribute("tooltip", `A ${rarity.name} ${data.items[i][j].name}${i !== 6 ? `\n${rarity.effectDesc}` : ``}\n\n"${data.items[i][j].desc}"`)

            let icon = document.createElement('img')
            icon.src = `${getItemSprite(data.items[i][j].name)}`

            item.append(icon)
            document.getElementById(`itemRow${rowNum}`).append(item)

            pushed++
            if(pushed >= 8){
                let row = document.createElement('div')
                rowNum++
                row.id = `itemRow${rowNum}`
                row.style.marginTop = '0.5rem'
                document.getElementById(`itemRowContainer`).append(row)
                pushed = 0
            }
        }
    }
}

function getTotalItems(bound = data.items.length){
    let total = 0
    for (let i = 0; i < bound; i++) {
        total += data.items[i].length
    }
    return total
}

let itemsMap = [[], [], [], [], [], []];

function generateItemsMap() {
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items[i].length; j++) {
            itemsMap[i][j] = {name: items[i][j].name, desc: items[i][j].desc, natural: 0, total: 0};
        }
        for (let j = 0; j < data.items[i].length; j++) {
            for (let k = 0; k < items[i].length; k++) {
                if (data.items[i][j].name == itemsMap[i][k].name) {
                    itemsMap[i][k].total++;
                    if (data.items[i][j].natural) itemsMap[i][k].natural++;
                }
            }
        }
    }
}

function hasNaturalItem(rarity, natural = true) {
    for (let i = 0; i < itemsMap[rarity].length; i++) {
        if (natural && itemsMap[rarity][i].natural > 0) return true
        if (!natural && itemsMap[rarity][i].total > 0 && itemsMap[rarity][i].total > itemsMap[rarity][i].natural) return true
    }
    return false
}

function hasAllItems(rarity = -1) {
    let rarityFrom = (rarity == -1) ? 0 : rarity
    let rarityTo = (rarity == -1) ? itemsMap.length - 1 : rarity
    for (let i = rarityFrom; i <= rarityTo; i++) {
        if (itemsMap[i].length < items[i].length) return false
        for (let j = 0; j < itemsMap[i].length; j++) {
            if (!itemsMap[i][j].total) return false
        }
    }
    return true
}
