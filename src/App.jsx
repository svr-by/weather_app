import { useSelector, useDispatch } from 'react-redux';

import { addNote, deleteNote } from './redux/notesSlice';
import { Box, Form, List } from './components';

export default function App() {
  const { data: notes } = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const handleCreate = (note) => {
    dispatch(addNote(note));
  };

  const handleDelete = (noteId) => {
    dispatch(deleteNote(noteId));
  };

  return (
    <Box>
      <List notes={notes} onDelete={handleDelete} />
      <Form isLoading={false} onSubmit={handleCreate} />
    </Box>
  );
}
