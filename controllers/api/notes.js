const Note = require('../../models/note');

module.exports = {
    create,
};


function create(req, res) {
    req.body.user = req.user._id;
    try {
        Note.create(req.body);
    } catch (error) {
        console.log('Notes controller error: ', error)
    }
    
}