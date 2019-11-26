import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { fetchPhotos } from '../../slices/photosSlice';
import PhotoListItem from './PhotoListItem';

const PhotoList = () => {

    const { isFetching, error, data } = useSelector(state => state.photos);

    const dispatch = useDispatch();

    const hadleRefresh = () => {
        dispatch(fetchPhotos());
    }

    return (
        isFetching ? <ActivityIndicator /> : error ? <Text>Something went terribly wrong.</Text> :
            <FlatList
                style={styles.list}
                numColumns={3}
                data={data}
                extraData={data}
                keyExtractor={item => "ID" + item.id}
                renderItem={({ item }) =>
                    <PhotoListItem photo={item} />
                }
                refreshing={isFetching}
                onRefresh={hadleRefresh}
            />
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: 'black'
    }
})


export default PhotoList
