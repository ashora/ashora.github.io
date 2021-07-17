const MAX_INVENTORY = 2999;
const MAX_LEVEL = 23;

const STARTING_DECK = [
    {card: "stone 1", count: 10},
    {card: "stairs 1", count: 1}
];

const STORE_CONTENTS = [
    {card: "天桥老 剧场 ", cost: "", level: 0},
    {card: "stone 1", cost: "stone 1", level: 1},
    {card: "stone 3", cost: "stone 5", level: 1},
    {card: "stone 5", cost: "stone 20", level: 1},
    {card: "iron 1", cost: "stone 50", level: 5},
    {card: "iron 3", cost: "iron 5", level: 5},
    {card: "iron 5", cost: "iron 20", level: 5},
    {card: "diamond 1", cost: "iron 50", level: 15},
    {card: "tnt 1", cost: "iron 1", level: 10},
    {card: "stairs 1", cost: "diamond 1", level: 5},
    {card: "upgrade 1", cost: "diamond 5", level: 5},
    {ability: "purge", cost: "tnt 1", level: 10}
]

const TOOLS = {
    剧场: [
        {card: "天桥老 剧场", cost: "", timer: 1.5},
        {card: "新 剧场", cost: "stone 15", timer: 1.25},
        {card: "超大 剧场", cost: "iron 15", timer: 1},
        {card: "国家大 剧场", cost: "diamond 15", timer: 0.5},
    ],
    cart: [
        {card: "stone cart", cost: "stone 10", inventoryIncrease: 5},
    ]
}

function getTool(data, offset = 0) {
    if (data.value in TOOLS) {
        for (let i = 0; i < TOOLS[data.value].length; i++)
        {
            if (TOOLS[data.value][i].card.startsWith(data.resource)) {
                let toolData = TOOLS[data.value][i + offset];
                if (toolData) toolData.tool = data.value;
                return toolData;
            }
        }
    }
}

function getDestroyCost() {
    const deckSize = pile.deck.cards.concat(pile.discard.cards).length;
    return Math.ceil(2000 / (deckSize * deckSize));
}

const BG_COLORS = [
    [165,144,108],
    [88,68,33],
    [130,73,73],
    [142,81,123],
    [102, 119, 199],
    [0,37,68]
]