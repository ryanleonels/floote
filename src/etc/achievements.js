const achievements = [
    {
        id: 11,
        name: "My First Item",
        description: "Get 1 Item",
        req: () => getTotalItems() >= 1
    },
    {
        id: 12,
        name: "Where is My Next Circle?",
        description: "Get 100 Items",
        req: () => getTotalItems() >= 100
    },
    {
        id: 13,
        name: "Just an Ordinary Day",
        description: "Obtain an Ordinary Item from The Circle",
        req: () => hasNaturalItem(0)
    },
    {
        id: 14,
        name: "An Unusual Find",
        description: "Obtain an Unusual Item from The Circle",
        req: () => hasNaturalItem(1)
    },
    {
        id: 15,
        name: "Extraordinary Luck",
        description: "Obtain an Extraordinary Item from The Circle",
        req: () => hasNaturalItem(2)
    },
    {
        id: 16,
        name: "The Legendary Win",
        description: "Obtain a Legendary Item from The Circle",
        req: () => hasNaturalItem(3)
    },
    {
        id: 17,
        name: "Mythical Jackpot",
        description: "Obtain a Mythical Item from The Circle",
        req: () => hasNaturalItem(4)
    },
    {
        id: 21,
        name: "Annihilate!",
        description: "Perform an Ordinary Annihilation",
        req: () => hasNaturalItem(1, false)
    },
    {
        id: 22,
        name: "Going the Extra Mile",
        description: "Perform an Unusual Annihilaion",
        req: () => hasNaturalItem(2, false)
    },
    {
        id: 23,
        name: "It is Going to be Legendary",
        description: "Perform an Extraordinary Annihilation",
        req: () => hasNaturalItem(3, false)
    },
    {
        id: 24,
        name: "Go Mythical!",
        description: "Perform a Legendary Annihilation",
        req: () => hasNaturalItem(4, false)
    },
    {
        id: 25,
        name: "The Ultimate Sacrifice",
        description: "Perform a Remembrance",
        req: () => hasNaturalItem(5)
    },
    {
        id: 26,
        name: "The Speed of Sound",
        description: "100% Circle speed per second",
        req: () => (1+getCircleSpeedIncrease())*getCircleSpeedMultiplier() >= 100
    },
    {
        id: 27,
        name: "The Speed of Light",
        description: "100% Circle speed per tick",
        req: () => (1+getCircleSpeedIncrease())*getCircleSpeedMultiplier() >= 2000
    },
    {
        id: 31,
        name: "Ordinary Collector",
        description: "Collect All Ordinary Items",
        req: () => hasAllItems(0)
    },
    {
        id: 32,
        name: "Unusual Collector",
        description: "Collect All Unusual Items",
        req: () => hasAllItems(1)
    },
    {
        id: 33,
        name: "Extraordinary Collector",
        description: "Collect All Extraordinary Items",
        req: () => hasAllItems(2)
    },
    {
        id: 34,
        name: "Legendary Collector",
        description: "Collect All Legendary Items",
        req: () => hasAllItems(3)
    },
    {
        id: 35,
        name: "Mythical Collector",
        description: "Collect All Mythical Items",
        req: () => hasAllItems(4)
    },
    {
        id: 36,
        name: "Ultimate Collector",
        description: "Collect All Items",
        req: () => hasAllItems()
    },
    {
        id: 999,
        name: "Best Feature In The Whole Game",
        description: "Discover the Secret! Don't worry, it has no effect on gameplay :)",
        req: () => data.gword.unl
    },
]

function initAchs(){
    const achTab = DOM('achPage')
    let rows = Math.floor(achievements[achievements.length-1].id/10)
    let total = 0
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div')
        row.className = 'flexBox'
        row.id = `achRow${i}`
        row.cssText = 'flex-direction: row'
        achTab.append(row)
    }
    for (let i = 0; i < achievements.length; i++) {
        let row = Math.floor(Math.floor(i/7))
        let ach = document.createElement('button')
        ach.className = 'achievement'
        ach.id = `ach${achievements[i].id}`
        ach.innerText = achievements[i].name
        ach.setAttribute("tooltip", achievements[i].description)
        DOM(`achRow${row}`).append(ach)
    }
}
function checkAchs(){
    for (let i=0; i < achievements.length; i++){
        let id = achievements[i].id
        let ach = DOM(`ach${id}`)
        if(achievements[i].req() && !data.achs[i]) data.achs[i] = true
        ach.style.backgroundColor = data.achs[i] ? '#2c4126' : '#151515'
        ach.style.border = data.achs[i] ? '1px solid goldenrod' : '1px solid #464646'
        ach.style.color = data.achs[i] ? 'goldenrod' : '#9d5700'
    }
}
