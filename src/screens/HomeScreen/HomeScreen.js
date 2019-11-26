import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import PhotoList from '../../components/PhotoList/PhotoList';
import {fetchPhotos} from '../../slices/photosSlice';

const HomeScreen = props => {
  const dispatch = useDispatch();

  dispatch(fetchPhotos());

  return (
    <View style={styles.container}>
      <PhotoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default HomeScreen;
