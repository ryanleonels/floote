//Important Constants for Loading
const TABS = ["ex", "items", "merge", "remembrance", "ach", "settings"]

const uHTML = {
    update(){
        updateCircleHTML()
        document.getElementById(`itemRowContainer`).replaceChildren()
        makeItems()
        updateAnnihilationTexts()
        document.getElementById(`remContainer`).replaceChildren()
        refreshRemembrance()
    },
    load(){
        //Load Tab Displays
        for (let i = 0; i < TABS.length; i++) {
            DOM(`${TABS[i]}Page`).style.display = 'none'
        }
        switchTab(data.nav.current, true)

        //Load Settings
        loadSettings()
        DOM(`versionText`).innerText = `You're playing Floote v${VERSION}: ${VERSION_NAME}\n Last Update: ${VERSION_DATE}`

        //Initialize all Tabs
        initAchs()
    }
}
