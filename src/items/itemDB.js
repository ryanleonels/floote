const items = [
    // Rarity 0
    [
        {
            name: "Broken Wheel",
            desc: "A shattered, useless circle.",
            natural: false,
            rarity: 0,
        },
        {
            name: "Burnt Match",
            desc: "Once upon a time, there was warmth.",
            natural: false,
            rarity: 0,
        },
        {
            name: "Shattered Plate",
            desc: "Pick up the pieces.",
            natural: false,
            rarity: 0,
        },
    ],

    // Rarity 1
    [
        {
            name: "Golden Coin",
            desc: "A valuable item.",
            natural: false,
            rarity: 1,
        },
        {
            name: "Circle Statue",
            desc: "Imitation of Greatness.",
            natural: false,
            rarity: 1,
        },
        {
            name: "Cube",
            desc: "Inferior Form.",
            natural: false,
            rarity: 1,
        },
    ],

    // Rarity 2
    [
        {
            name: "Great Wheel",
            desc: "A strong circle, but one used for a lesser purpose.",
            natural: false,
            rarity: 2,
        },
        {
            name: "Cup of Water",
            desc: "It seems to never be empty.",
            natural: false,
            rarity: 2,
        },
        {
            name: "Glasses",
            desc: "To more closely observe.",
            natural: false,
            rarity: 2,
        },
    ],

    // Rarity 3
    [
        {
            name: "Golden Compass",
            desc: "Find your way.",
            natural: false,
            rarity: 3,
        },
        {
            name: "Eternal Flame",
            desc: "Warmth for an empty world.",
            natural: false,
            rarity: 3,
        },
        {
            name: "Miniature Circle",
            desc: "Forever Spinning.",
            natural: false,
            rarity: 3,
        },
    ],

    // Rarity 4
    [
        {
            name: "Light",
            desc: "Vision is key, after all.",
            natural: false,
            rarity: 4,
        },
        {
            name: "Thought",
            desc: "Understanding.",
            natural: false,
            rarity: 4,
        },
        {
            name: "Wilted Clover",
            desc: "Unknown Purpose.",
            natural: false,
            rarity: 4,
        },
    ],

    // Rarity 5 (Unobtainable)
    [
        {
            name: "Four-Leaf Clover",
            desc: "Chance Incarnate. You have created the Impossible.",
            natural: false,
            rarity: 5,
        },
    ]
]

const itemSpriteStyles = ["Default", "Meta"]

const itemSpriteTextColors = ['#2da000', 'goldenrod'];

const itemIcons = [
    {
        "Broken Wheel" : "res/items/default/broken_wheel.png",
        "Burnt Match" : "res/items/default/burnt_match.png",
        "Shattered Plate" : "res/items/default/broken_plate.png",

        "Golden Coin" : "res/items/default/golden_coin.png",
        "Circle Statue" : "res/items/default/circle_statue.png",
        "Cube" : "res/items/default/cube.png",

        "Great Wheel" : "res/items/default/greater_wheel.png",
        "Cup of Water" : "res/items/default/water_glass.png",
        "Glasses" : "res/items/default/glasses.png",

        "Golden Compass" : "res/items/default/golden_compass.png",
        "Eternal Flame" : "res/items/default/bad_flame.png",
        "Miniature Circle" : "res/items/default/mini_circle.png",

        "Light" : "res/items/default/light.png",
        "Thought" : "res/items/default/thought.png",
        "Wilted Clover" : "res/items/default/wilted_clover.png",

        "Four-Leaf Clover" : "res/items/default/clover.png",
    },
    {
        "Broken Wheel" : "res/items/meta/broken-wheel.png",
        "Burnt Match" : "res/items/meta/burnt-match.png",
        "Shattered Plate" : "res/items/meta/broken-plate.png",

        "Golden Coin" : "res/items/meta/golden-coin.png",
        "Circle Statue" : "res/items/meta/circle-statue.png",
        "Cube" : "res/items/meta/cube.png",

        "Great Wheel" : "res/items/meta/great-wheel.png",
        "Cup of Water" : "res/items/meta/cup.png",
        "Glasses" : "res/items/meta/glasses.png",

        "Golden Compass" : "res/items/meta/golden-compass.png",
        "Eternal Flame" : "res/items/meta/eternal-flame.png",
        "Miniature Circle" : "res/items/meta/miniature-circle.png",

        "Light" : "res/items/meta/light.png",
        "Thought" : "res/items/meta/thought.png",
        "Wilted Clover" : "res/items/meta/wilted-clover.png",

        "Four-Leaf Clover" : "res/items/meta/clover.png",
    },
]

const itemPluralNames = {
    "Broken Wheel" : "Broken Wheels",
    "Burnt Match" : "Burnt Matches",
    "Shattered Plate" : "Shattered Plates",

    "Golden Coin" : "Golden Coins",
    "Circle Statue" : "Circle Statues",
    "Cube" : "Cubes",

    "Great Wheel" : "Great Wheels",
    "Cup of Water" : "Cups of Water",
    "Glasses" : "Glasses",

    "Golden Compass" : "Golden Compasses",
    "Eternal Flame" : "Eternal Flames",
    "Miniature Circle" : "Miniature Circles",

    "Light" : "Lights",
    "Thought" : "Thoughts",
    "Wilted Clover" : "Wilted Clovers",

    "Four-Leaf Clover" : "Four-Leaf Clovers",
}

function getRandomItem(rarity){
    let range = items[rarity].length
    return {
        ...items[rarity][getRandom(0, range)]
    }
}

let getItemSprite = (style, name) => itemIcons[style][name]
