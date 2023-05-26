module.exports = {
    new: newPizzeria
};

function newPizzeria(req, res) {
    res.render('pizzerias/new', { errorMsg: ''});
}