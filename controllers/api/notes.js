const Note = require('../../models/note');

module.exports = {
    create,
    index,
};


function create(req, res) {
    req.body.user = req.user._id;
    try {
        Note.create(req.body);
    } catch (error) {
        console.log('Notes controller error: ', error)
    }

}

async function index(req, res) {
    const noteList = await Note.find({ user: req.user._id });
    res.json(noteList);
}