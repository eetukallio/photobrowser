import { combineReducers } from 'redux';
import photos from './slices/photosSlice';
import selectedPhoto from './slices/selectedPhotoSlice';

export default combineReducers({
    photos,
    selectedPhoto
})