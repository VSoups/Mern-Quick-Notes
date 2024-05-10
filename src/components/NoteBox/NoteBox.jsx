import './NoteBox.css';

export default function NoteBox({ noteText, time }) {
    const timestamp = new Date(time).toLocaleString();
    

    return (
        <li><span className="Time">{timestamp}</span><br />{noteText}</li>
    );
}