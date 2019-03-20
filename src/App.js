import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import MainRootStack from './navigations/MainRootStack';
import LogInForgetPwScreen from './screens/LogInForgetPwScreen';

// login/ sign up/ forget password
const LoginNavigator = createStackNavigator({
  LogInWelcome: {
    screen: LogInScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
  LogInForgetPw: {
    screen: LogInForgetPwScreen,
  }
},
{
    initialRouteName: "SignUp",
})

// AuthLoading checks if the user in login
// if not login go to login
// if log in go to mainrootstack
// if guest to main but can't order 
const RootSwitchNavigator = createSwitchNavigator({
  AuthLoading: {
    screen: AuthLoadingScreen,
  },
  Login: {
    screen: LoginNavigator,
  },
  Main: {
    screen: MainRootStack
  },
}, 
{
    initialRouteName: "Main", // Prod: AuthLoading
})


const AppContainer = createAppContainer(RootSwitchNavigator);

class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;

