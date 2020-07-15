
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
/* eslint-disable */

 const App = createStackNavigator({
  Home: { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  
  MemoDetail: { screen: MemoDetailScreen },
  
  
  MemoEdit: { screen: MemoEditScreen },
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },

}, {
  defaultNavigationOptions: { 
    headerTitle: 'memo',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
},

});
 


export default createAppContainer(App);
 