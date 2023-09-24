import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: { data: [], isLoading: false },
  reducers: {
    addNote: (state, action) => {
      state.data.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.data = state.data.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;