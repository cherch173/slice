const Pizzeria = require('../models/pizzeria')

module.exports = {
    create
}

async function create(req, res) {
    const pizzeria = await Pizzeria.findById(req.params.id);
    // the user-centric data aka
    // the newly added review-ski
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    pizzeria.reviews.push(req.body);
    try {
        await pizzeria.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/pizzerias/${pizzeria._id}`);
}