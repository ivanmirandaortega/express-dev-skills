// import our model to perform our db logic 
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function create(req, res) {
    console.log(req.body, '<- req.body, contents of the form');
    Skill.create(req.body);
    res.redirect('/skills');
};

function index(req, res) {

    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    });
};

function show(req, res) {
    res.render('skills/show', {
        skillNum: req.params.id,
        skill: Skill.getOne(req.params.id)
    });
};

function newSkill(req, res) {
    res.render('skills/new');
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}
