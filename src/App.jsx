import { Box, Form, List } from './components';

export default function App() {
  const notes = [
    { 
      id: '169554420307060', 
      message: 'test', 
      time: 1695544203070, 
      temp: 17.08, 
      icon: '04d',
      desc:'broken clouds'
    }
  ];

  const handleCreate = (note) => {
    console.log(note);
  };

  const handleDelete = (noteId) => {
    console.log(noteId);
  };

  return (
    <Box>
      <List notes={notes} onDelete={handleDelete} />
      <Form isLoading={false} onSubmit={handleCreate} />
    </Box>
  );
}
