import { Note } from '../index';
import './List.css';

export default function List({notes, onDelete}) {

  return (
    <div className="list">
      {notes.map((note) => <Note key={note.id} data={note} onDelete={onDelete} />)}
    </div>
  );
}