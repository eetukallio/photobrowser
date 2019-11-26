import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Photos',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      },
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      title: null,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      },
    },
  },
});

export default createAppContainer(AppNavigator);
