import { useState } from 'react';
import './NewNoteBox.css';

export default function NewNoteBox({ addNote }) {
    const [noteText, setNoteText] = useState('');

    function handleAddNote(evt) {
        evt.preventDefault();
        addNote(noteText);
        evt.target.text.value = '';
    }

    function handleNoteText(evt) {
        setNoteText(evt.target.value);
    }

    return (  
        <form className="NewNoteForm" onSubmit={handleAddNote}>
            <textarea name="text" onChange={handleNoteText} placeholder="Enter note here..." cols="35" rows="5" className="NoteInput"></textarea>
            <button type="submit" className="SubmitBtn">Add Note</button>
        </form>  
    );
}