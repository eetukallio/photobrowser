import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';

const imageWidth = Dimensions.get('window').width;
const imageHeight = imageWidth;

const DetailsScreen = props => {
  const [loading, setLoading] = useState(true);

  const photo = useSelector(state => state.selectedPhoto);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator />}
      <Image
        style={styles.image}
        source={{uri: photo.url}}
        onLoad={() => setLoading(false)}
      />
      <Text style={styles.text}>{photo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    height: imageHeight,
    width: imageWidth,
  },
  text: {
    color: 'white',
    margin: 5,
  },
});

export default DetailsScreen;
