const Game = require('../models/Game');

exports.addNewGame = async (req, res, next) => {
    try {
        console.log('request received');
        req.body.chanceOrder = shuffle();
        req.body.communityChestOrder = shuffle();
        await Game.create(req.body);
        return res.status(200).json({ success: true });
    } catch (err) {
        return res.status(500).json({ success: false });
    }
};

function shuffle() {
    const arr = [];
    for (let i = 0; i < 16; i++) {
        arr.push(i);
    }
    const shuffled = [];
    while (arr.length) {
        const current = Math.floor(Math.random() * arr.length);
        shuffled.push(arr[current]);
        arr.splice(current, 1);
    }
    return shuffled;
}