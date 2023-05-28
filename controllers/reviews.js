const Pizzeria = require('../models/pizzeria')

module.exports = {
    create
}

async function create(req, res) {
    const pizzeria = await Pizzeria.findById(req.params.id);
    pizzeria.reviews.push(req.body);
    try {
        await pizzeria.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/pizzerias/${pizzeria._id}`);
}