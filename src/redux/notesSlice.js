import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCityWeatherEndpoint } from '../services/endpointServices';

export const addNoteWithWeather = createAsyncThunk(
  'notes/addNoteWithWeather',
  async (note) => {
    try {
      const serverUrl = getCityWeatherEndpoint('Mogilev');
      const response = await fetch(serverUrl);
      const wheatherData = await response.json();

      const temp = wheatherData?.main?.temp;
      const icon = wheatherData?.weather?.[0]?.icon;
      const desc = wheatherData?.weather?.[0]?.description;
      return {...note, temp, icon, desc};
    } catch(err) {
      alert('Sorry, data loading error');
      throw new Error(err);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(addNoteWithWeather.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addNoteWithWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNoteWithWeather.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;