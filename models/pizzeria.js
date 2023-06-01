const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },  
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const pizzeriaSchema = new Schema({
    name: String,
    borough: {type: String,
        enum: ['The Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island', 'Long Island', 'Westchester', 'Jers', 'Connecticut'],
        required: true
    },
    address: {type: String,
    required: true
    },
    openTil: {type: String,
    required: true
  },
    vegan: {type: Boolean,
    required: true
    },
    reviews: [reviewSchema]
}, {
    unique: true,
    timestamps: true
});

module.exports = mongoose.model('Pizzeria', pizzeriaSchema)

