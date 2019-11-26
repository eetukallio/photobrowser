import React from 'react'
import { useDispatch } from 'react-redux';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import NavigationService from '../../navigation/NavigationService'
import { setSelectedPhoto } from '../../slices/selectedPhotoSlice';

const imageWidth = Dimensions.get('window').width / 3 - 10;
const imageHeight = imageWidth;

const PhotoListItem = props => {

    const dispatch = useDispatch();

    const photo = props.photo;

    const handlePress = () => {
        dispatch(setSelectedPhoto(photo))
        NavigationService.navigate('Details')
    }

    return (
        <TouchableOpacity onPress={handlePress}  style={styles.container}>
            <Image style={styles.image} source={{uri: photo.thumbnailUrl}} /> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        height: imageHeight,
        width: imageWidth,
        margin: 5,
        borderRadius: 15
    }
})


export default PhotoListItem
