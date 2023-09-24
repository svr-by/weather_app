import { useSelector, useDispatch } from 'react-redux';

import { addNoteWithWeather, deleteNote } from './redux/notesSlice';
import { Box, Form, List } from './components';

export default function App() {
  const { data: notes, isLoading} = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const handleCreate = (note) => {
    dispatch(addNoteWithWeather(note));
  };

  const handleDelete = (noteId) => {
    dispatch(deleteNote(noteId));
  };

  return (
    <Box>
      <List notes={notes} onDelete={handleDelete} />
      <Form isLoading={isLoading} onSubmit={handleCreate} />
    </Box>
  );
}
