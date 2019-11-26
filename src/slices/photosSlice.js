import { createSlice } from '@reduxjs/toolkit';

const photosSlice = createSlice({
    name: 'photos',
    initialState: {
        error: null,
        isFetching: false,
        data: []
    },
    reducers: {
        fetchPhotosRequest: (state, action) => {
            console.log('REQUEST')
            return {
                ...state,
                isFetching: true,
            };
        },
        fetchPhotosSuccess: (state, action) => {
            console.log('SUCCESS' ,action.payload)
            return {
                error: null,
                isFetching: false,
                data: action.payload,
            };
        },
        fetchPhotosFailure: (state, action) => {
            console.log('Error loading photos.', action.payload);
            return {
                error: action.payload,
                isFetching: false,
                data: [],
            }
        }
    }
})


export const fetchPhotos = () => dispatch => {
    dispatch(fetchPhotosRequest());
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => dispatch(fetchPhotosSuccess(json)))
        .catch(error => dispatch(fetchPhotosFailure(error)));
};


export default photosSlice.reducer;
export const { fetchPhotosSuccess, fetchPhotosFailure, fetchPhotosRequest } = photosSlice.actions;