//Important Constants for Loading
const TABS = ["ex", "items", "merge", "remembrance", "settings"]

const uHTML = {
    update(){
        //updateCircleHTML()
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
    }
}
