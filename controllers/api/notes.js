const Note = require('../../models/note');

module.exports = {
    create,
    index,
};


async function create(req, res) {
    req.body.user = req.user._id;
    try {
        // create new note in database (received from front end)
        const note = await Note.create(req.body);
        // then send same note back to front end to render in state
        res.json(note); 
        // data from the server is sent as a string, so we .json() to convert back into object for front end use
    } catch (error) {
        console.log('Notes controller error: ', error)
    }
}

async function index(req, res) {
    const noteList = await Note.find({ user: req.user._id });
    res.json(noteList);
}