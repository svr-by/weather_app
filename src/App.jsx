import { Box, Form } from './components';

export default function App() {
  const handleCreate = (note) => {
    console.log(note);
  };

  return (
    <Box>
      <Form isLoading={false} onSubmit={handleCreate} />
    </Box>
  );
}
