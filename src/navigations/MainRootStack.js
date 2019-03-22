import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer, StackNavigator } from 'react-navigation'
import RestoSearchMainScreen from '../screens/RestoSearchMainScreen';
import SearchNearByScreen from '../screens/SearchNearByScreen';
import SearchShortByScreen from '../screens/SearchShortByScreen';
import MenuMainScreen from '../screens/MenuMainScreen';
import MenuOrderScreen from '../screens/MenuOrderScreen';
import MenuCheckOutScreen from '../screens/MenuCheckOutScreen';
import ProfileHomeScreen from '../screens/ProfileHomeScreen';

import AppStyle from '../styles/AppStyle'
import NavigationBarTitle from '../components/NavigationBarTitle'

// Main search StackNavigator
const SearchStackNavigator = createSwitchNavigator({
  RestoSearchMain: {
    screen: RestoSearchMainScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft:
        <TouchableOpacity style={{ marginLeft: 10, padding: 8 }} onPress={() => { navigation.navigate('WebBrowser') }}>
          <Image source={require('../img/ico_menu.png')} />
        </TouchableOpacity>,
      headerRight:
        <TouchableOpacity style={{ marginRight: 10, padding: 8 }} onPress={() => { navigation.navigate('NotificationsMain') }} >
          <Image source={require('../img/ico_bell.png')} />
          {/* Notification  */}
          {/* <View style={{ marginLeft: 22, marginTop: 3, backgroundColor: 'red', width: 8, height: 8, position: 'absolute', borderRadius: 4 }} /> */}
        </TouchableOpacity>
      ,
      headerTintColor: 'red',
      headerStyle: {
        backgroundColor: AppStyle.navigationBarColor,
        borderBottomWidth: 0,
      },
      headerTitle: (
        <NavigationBarTitle title="Search" />
        // <Text title="Search" />
      )

    })

  },
  NearBy: {
    screen: SearchNearByScreen,
  },
  ShortBy: {
    screen: SearchShortByScreen,
  }
},
  {
    initialRouteName: "RestoSearchMain",
  })

// Manu 
const MenuStackNavigator = createStackNavigator({
  MenuMain: {
    screen: MenuMainScreen,

  },
  MenuOrder: {
    screen: MenuOrderScreen,
  },
  MenuCheckOut: {
    screen: MenuCheckOutScreen,
  },
  ProfileHome: {
    screen: ProfileHomeScreen,
  }

},
  {
    initialRouteName: "MenuMain"

  })
const AppContainer = createAppContainer(SearchStackNavigator);

class MainRootStack extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
export default MainRootStack;
