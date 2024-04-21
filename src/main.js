function mainLoop() {
    // Calculate diff and usableDiff
    if(data.lastTick === 0) data.lastTick = Date.now()
    let diff = data.offline ? Math.max((Date.now() - data.lastTick), 0) : 50

    // Used for Offline Progress
    let uDiff = data.sToggles[8] ? diff : diff/1000

    // Update lastTick
    data.lastTick = Date.now()

    // Check for hotkey usage
    //if (controls["m"].pressed)

    progress(data.circle.progress, uDiff)

    // Update Achievements
    checkAchs()

    // Update HTML
    uHTML.update()
}


window.onload = function () {
    let extra = false
    try { extra = load() } catch(e){ console.log('New Save!\nIf you\'re seeing this, welcome :)'); generateItemsMap(); }
    console.log(extra)
    uHTML.load()

    if(extra) fixOldSavesP2()
}

window.setInterval(function () {
    mainLoop()
}, 50);
