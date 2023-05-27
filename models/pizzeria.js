const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzeriaSchema = new Schema({
    name: String,
    borough: {type: String,
        enum: ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island', 'Long Island', 'Westchester', 'Jers', 'Connecticut'],
        required: true
    },
    address: String,
    openTil: String,
    vegan: Boolean,
    rating: {type: Number,
    required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Pizzeria', pizzeriaSchema)

