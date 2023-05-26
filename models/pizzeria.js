const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzeriaSchema = new Schema({
    name: String,
    address: String,
    openTil: String,
    vegan: Boolean,
    rating: Number
    // reviews: [reviewsSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Pizzeria', pizzeriaSchema)

