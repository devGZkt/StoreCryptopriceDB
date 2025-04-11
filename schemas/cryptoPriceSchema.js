const mongoose = require('mongoose');

const cryptoPriceSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    prices: {
        bitcoin: {
            type: Number,
            required: true
        },
        ethereum: {
            type: Number,
            required: true
        },
        solana: {
            type: Number,
            required: true
        },
        ripple: {
            type: Number,
            required: true
        },
        cardano: {
            type: Number,
            required: true
        }
    }
})

module.exports = mongoose.model('CryptoPrice', cryptoPriceSchema);