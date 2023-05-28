const Pizzeria = require('../models/pizzeria')

module.exports = {
    create,
    delete: deleteReview
}

function deleteReview(req, res, next) {
    Pizzeria.findOne({
        'reviews._id': req.params.id, 
        'reviews.user': req.user._id}).then(function(pizzeria) {
        // prevents rogue users
        if (!pizzeria) return res.redirect('/');
        // deletes the review using remove method
        pizzeria.reviews.remove(req.params.id);
        // save the updated pizzeria
        pizzeria.save().then(function() {
            // redirects back to pizzeria's details (show) view
            res.redirect(`/pizzerias/${pizzeria._id}`);
        }).catch(function(err) {
            // lets Express display an error
            return next(err);
        });
    });
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