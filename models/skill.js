const skills = [
    { id: 123451, skill: 'Design', app: true },
    { id: 123456, skill: 'Project Management', app: true },
    { id: 123456, skill: 'Front End Dev', app: true },
    { id: 123456, skill: 'Back End Dev', app: false }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
};

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.app = false;
    skills.push(skill);
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}