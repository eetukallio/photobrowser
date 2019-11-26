import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import {fetchPhotos} from '../../slices/photosSlice';
import PhotoListItem from './PhotoListItem';

const PhotoList = () => {
  const {isFetching, error, data} = useSelector(state => state.photos);

  const dispatch = useDispatch();

  const hadleRefresh = () => {
    dispatch(fetchPhotos());
  };

  const renderContent = () => {
    if (isFetching) {
      return <ActivityIndicator />;
    } else if (error) {
      return <Text>Something went terribly wrong.</Text>;
    } else {
      return (
        <FlatList
          style={styles.list}
          numColumns={3}
          data={data}
          extraData={data}
          keyExtractor={item => 'ID' + item.id}
          renderItem={({item}) => <PhotoListItem photo={item} />}
          onRefresh={hadleRefresh}
          refreshing={isFetching}
        />
      );
    }
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PhotoList;
