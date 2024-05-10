import { useState } from 'react';

export default function NewNoteBox({ addNote }) {
    const [noteText, setNoteText] = useState('');

    function handleAddNote(evt) {
        evt.preventDefault();
        addNote(noteText);
    }

    function handleNoteText(evt) {
        setNoteText(evt.target.value);
    }

    return (  
        <form className="NewNoteForm" onSubmit={handleAddNote}>
            <textarea name="text" onChange={handleNoteText} placeholder="Enter note here..." className="NoteInput"></textarea>
            <button type="submit">Add Note</button>
        </form>  
    );
}