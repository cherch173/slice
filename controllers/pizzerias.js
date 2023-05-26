const Pizzeria = require('../models/pizzeria');

module.exports = {
    new: newPizzeria,
    create
};

async function create(req, res) {
    const pizzerias = 
    // switches the vegan checkbox on and off
    // to yasss or nah
    req.body.vegan = !!req.body.vegan;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
        try {
            await Pizzeria.create(req.body);
            //REDIRECT now that we've CRUD'd Data
            res.redirect('/pizzerias');
        } catch (err) {
            console.log(err);
            res.render('/pizzerias/new', { errorMsg: err.message})
        }
    }
}

function newPizzeria(req, res) {
    res.render('pizzerias/new', { errorMsg: ''});
}