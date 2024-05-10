import { useEffect, useState } from 'react';
import NoteBox from '../../components/NoteBox/NoteBox';
import NewNoteBox from '../../components/NewNoteBox/NewNoteBox';
import * as notesAPI from '../../utilities/notes-api';
import './NotesPage.css';

export default function NotesPage() {
  const [notes, setNotes] = useState([]);

  const notesIndex = notes.sort((n1, n2) => new Date(n2.createdAt) - new Date(n1.createdAt))
  .map((note, idx) => <NoteBox noteText={note.text} time={note.createdAt} key={idx} />);

  async function newNote(note) {
    // sends note that user added to database
    // then returns same note to update state
    const n = await notesAPI.addNote(note);
    console.log(n)
    setNotes([...notes, n]);
  }

  // render user notes (initial render)
  useEffect(function() {
    async function getNotes() {
      const notesList = await notesAPI.getAll();
      setNotes(notesList);
    }
    getNotes();
  }, []);

  return (
    <>
      <h1>Your Notes</h1>
      <section className="NewNote">
        <NewNoteBox addNote={newNote} />
      </section>
      <ul className="NoteList">
        {notes.length === 0 ? 'No notes yet' : notesIndex}
      </ul>
    </>
  );
}