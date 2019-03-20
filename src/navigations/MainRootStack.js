import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import RestoSearchMainScreen from '../screens/RestoSearchMainScreen';
import SearchNearByScreen from '../screens/SearchNearByScreen';
import SearchShortByScreen from '../screens/SearchShortByScreen';
import MenuMainScreen from '../screens/MenuMainScreen';
import MenuOrderScreen from '../screens/MenuOrderScreen';
import MenuCheckOutScreen from '../screens/MenuCheckOutScreen';

const SearchStackNavigator = createSwitchNavigator({
  RestoSearchMain: {
    screen: RestoSearchMainScreen,
  },
  NearBy: {
    screen: SearchNearByScreen,
  },
  ShortBy: {
    screen: SearchShortByScreen,
  }
}, 
{
    initialRouteName: "ShortBy",
})

const MenuStackNavigator = createBottomTabNavigator({
  MenuMain:{
    screen: MenuMainScreen,
  },
  MenuOrder:{
    screen: MenuOrderScreen,
  },
  MenuCheckOut:{
    screen: MenuCheckOutScreen,
  }

},
{
    initialRouteName:"MenuOrder"
  
})
const AppContainer = createAppContainer(MenuStackNavigator);

class MainRootStack extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
export default MainRootStack;
