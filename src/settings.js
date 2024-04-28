// I'll refactor this eventually I swear

const SETTINGS_DESCS = [
    "Circle Click Confirmation", "Ordinary Annihilation Confirmation", "Unusual Annihilation Confirmation", "Extraordinary Annihilation Confirmation",
    "Legendary Annihilation Confirmation", "Remembrance Confirmation", "Circle Speed Information", "Item Grouping",
    "x1000 Gameplay Speed", "Multiple Items Per Tick",
]
const settingsDefaults = [
    true, true, true, true, true, true, true, true, false, true,
]
function settingsToggle(i){
    if (i === -1){
        data.offline = !data.offline
        DOM(`offlineProgressToggle`).innerHTML = `Toggle Offline Progress ${settingsColor(data.offline)}`
        return save()
    }

    if(i === -2){
        data.gword.enabled = !data.gword.enabled
        return DOM(`gwaifyToggle`).innerHTML = `<img src='https://cdn.discordapp.com/emojis/853002327362895882.webp?size=24'> Display ${settingsColor(data.gword.enabled)}`
    }

    data.sToggles[i] = !data.sToggles[i]

    DOM(`settingsToggle${i}`).innerHTML = `${i > 7 ? 'Toggle ' : 'Toggle the'} ${SETTINGS_DESCS[i]} ${settingsColor(data.sToggles[i])}`
    save()
}
function settingsColor(bool){
    return bool
        ? `<span style="color: #2da000">[${formatBool(bool)}]</span>`
        : `<span style="color: #ce0b0b">[${formatBool(bool)}]</span>`
}

// Changes the Number's Precision
function changePrecision(x){
    if (isNaN(Math.floor(x))) return createAlert('Failure', 'Invalid Input.', `Oops.`)
    data.precision = Math.floor(x)
    DOM(`changePrecision`).children[0].innerHTML = `[${data.precision}]`
}

function toggleItemSpriteStyle(){
    data.itemSpriteStyle++
    if (data.itemSpriteStyle >= itemSpriteStyles.length) data.itemSpriteStyle = 0
    DOM(`changeItemSpriteStyle`).children[0].innerHTML = `[${itemSpriteStyles[data.itemSpriteStyle]}]`
    DOM(`changeItemSpriteStyle`).children[0].style.color = itemSpriteTextColors[data.itemSpriteStyle]
}

// Changes the Millisecond Interval
function changeMs(x){
    if (!x) return
    if (isNaN(Math.floor(x))) return createAlert('Failure', 'Invalid Input.', `Oops.`)
    data.ms = Math.min(Math.max(Math.floor(x),20),1000)
    DOM(`changeMsInterval`).children[0].innerHTML = `[${data.ms}ms]`
    save();
    location.reload();
}

function loadSettings(){
    DOM(`offlineProgressToggle`).innerHTML = `Toggle Offline Progress ${settingsColor(data.offline)}`
    DOM(`gwaifyToggle`).innerHTML = `<img src='https://cdn.discordapp.com/emojis/853002327362895882.webp?size=24'> Display ${settingsColor(data.gword.enabled)}`
    DOM(`changePrecision`).children[0].innerHTML = `[${data.precision}]`
    DOM(`changeMsInterval`).children[0].innerHTML = `[${data.ms}ms]`

    for (let i = 0; i < SETTINGS_DESCS.length; i++) {
        DOM(`settingsToggle${i}`).innerHTML = `${i > 7 ? 'Toggle ' : 'Toggle the'} ${SETTINGS_DESCS[i]} ${settingsColor(data.sToggles[i])}`
    }
}
