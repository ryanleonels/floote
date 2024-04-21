function switchTab(tab, loading){
    if(data.nav.current === tab && !loading) return
    data.nav.last = data.nav.current
    data.nav.current = tab
    DOM(`${data.nav.last}Page`).style.display = 'none'
    DOM(`${tab}Page`).style.display = 'flex'

    if(tab === 'items') makeItems()
    else document.getElementById(`itemRowContainer`).replaceChildren()

    if(tab === 'merge') updateAnnihilationTexts()

    if(tab === 'remembrance') makeRemembrance()
    else document.getElementById(`remContainer`).replaceChildren()
}

let settingsTab = "gameSettings"

function switchSubtab(t, mode){
    if(!isTabUnlocked(t)) return

    // Special Settings Rules
    if(mode === "settings"){
        DOM(`${settingsTab}SubPage`).style.display = `none`
        DOM(`${t}SubPage`).style.display = `flex`
        settingsTab = t

        if(t === 'ui'){
            DOM(`gwaifySettingContainer`).style.display = data.gword.unl ? 'block' : 'none'
        }
    }
}

function isTabUnlocked(t){
    switch (t) {
        default: return true
    }
}
