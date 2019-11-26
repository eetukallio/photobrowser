import {createSlice} from '@reduxjs/toolkit';

const selectedPhotoSlice = createSlice({
  name: 'selectedPhoto',
  initialState: {},
  reducers: {
    setSelectedPhoto: (state, action) => {
      return action.payload;
    },
  },
});

export default selectedPhotoSlice.reducer;
export const {setSelectedPhoto} = selectedPhotoSlice.actions;
