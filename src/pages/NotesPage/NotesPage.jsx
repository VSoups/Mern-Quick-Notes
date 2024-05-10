import { useEffect, useState } from 'react';
import * as usersService from '../../utilities/users-service';
import NoteBox from '../../components/NoteBox/NoteBox';
import NewNoteBox from '../../components/NewNoteBox/NewNoteBox';
import * as notesAPI from '../../utilities/notes-api';

export default function NotesPage() {
  const [notes, setNotes] = useState([]);

  async function newNote(note) {
    console.log('delivering: ', note);
    await notesAPI.addNote(note);

  }

  // useEffect(function() {

  // }, [notes]);


  return (
    <>
      <h1>Your Notes</h1>
      <section className="NewNote">
        <NewNoteBox addNote={newNote} />
      </section>
      <section className="NoteList">
        {notes.length === 0 ? 'No notes yet' : <NoteBox />}
      </section>
    </>
  );
}