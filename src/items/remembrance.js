let remembranceReq = 6
function makeRemembrance(){
    for (let i = 0; i < remembranceReq; i++) {
        let hasClover = getClovers() > i

        let rem = document.createElement('button')
        rem.className = `remembrance`
        rem.style.border = `1px solid ${hasClover ? '#3f943f' : '#606060'}`

        let icon = document.createElement('img')
        icon.src = hasClover ? getItemSprite(data.itemSpriteStyle, `Wilted Clover`) : `res/other/missing_clover.png`

        rem.append(icon)
        document.getElementById('remContainer').append(rem)
    }

    DOM(`remember`).style.display = getClovers() >= remembranceReq ? 'block' : 'none'
}
function refreshRemembrance(){
    document.getElementById(`remContainer`).replaceChildren()
    makeRemembrance()
}
function getClovers(){
    let amount = 0
    for (let i = 0; i < data.items[4].length; i++) {
        if(data.items[4][i].name === "Wilted Clover") amount++
    }
    return amount
}

function rememberConfirm(){
    if(getClovers() < remembranceReq) return

    createConfirmation('Are you certain?', 'You will lose six Wilted Clovers in exchange for a Remembrance item!', 'No Way!', 'Go Ahead!', remember)
}

function remember(){
    if(getClovers() < remembranceReq) return

    let clover = getRandomItem(5)
    clover.natural = true
    data.items[5].push(clover)
    for (let i = 0; i < itemsMap[5].length; i++) {
        if (itemsMap[5][i].name == clover.name) {
            itemsMap[5][i].total++
            itemsMap[5][i].natural++
        }
    }

    let natural = 0
    let removed = 0
    for (let i = 0; i < data.items[4].length; i++) {
        if(removed >= remembranceReq) break;
        if(data.items[4][i].name === "Wilted Clover"){
            if(data.items[4][i].natural) natural++
            data.items[4] = data.items[4].slice(0, i).concat(data.items[4].slice(i+1))
            removed++
            i--
        }
    }
    for (let i = 0; i < itemsMap[4].length; i++) {
        if (itemsMap[4][i].name === "Wilted Clover") {
            itemsMap[4][i].total -= remembranceReq
            itemsMap[4][i].natural -= natural
        }
    }
    refreshRemembrance()
}
