const Pizzeria = require('../models/pizzeria');

module.exports = {
    new: newPizzeria,
    create,
    index,
    show
};

async function show(req, res) {
    const pizzeria = await Pizzeria.findById(req.params.id);
    res.render('pizzerias/show', { title: 'Pizzeria Detail', pizzeria });
  }

async function index(req, res) {
    const pizzerias = await Pizzeria.find({});
    res.render('pizzerias/index', { title: 'The Whole Pie', pizzerias})
}    

async function create(req, res) {
    // switches the vegan checkbox on and off
    // to yasss or nah
    req.body.vegan = !!req.body.vegan;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
        try {
            const pizzeria = await Pizzeria.create(req.body);
            //REDIRECT now that we've CRUD'd Data
            res.redirect('/pizzerias');
        } catch (err) {
            console.log(err);
            res.render('pizzerias/new', { errorMsg: err.message})
        }
    }
}

function newPizzeria(req, res) {
    res.render('pizzerias/new', { title: 'Add a New Pizzeria to Slice', errorMsg: '' });
}