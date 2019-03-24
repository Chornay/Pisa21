import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer, StackNavigator } from 'react-navigation'

import SearchMainScreen from '../screens/SearchMainScreen';
import SearchNearByScreen from '../screens/SearchNearByScreen';
import SearchShortByScreen from '../screens/SearchShortByScreen';
import MenuMainScreen from '../screens/MenuMainScreen';
import MenuOrderScreen from '../screens/MenuOrderScreen';
import MenuCheckOutScreen from '../screens/MenuCheckOutScreen';
import ProfileHomeScreen from '../screens/ProfileHomeScreen';
import SearchFilter from '../screens/SearchFilter';

import AppStyle from '../styles/AppStyle'
import NavigationBarTitle from '../components/NavigationBarTitle'

// Search main StackNavigator
const SearchStackNavigator = createStackNavigator({
  SearchMain: {

    // Seach main screen
    screen: SearchMainScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft:
        <TouchableOpacity style={{ marginLeft: 10, padding: 8 }} onPress={() => { this.props.navigation.navigate('') }}>
          <Image source={require('../img/ico_menu.png')} />
        </TouchableOpacity>,
      headerRight:
        <TouchableOpacity style={{ marginRight: 10, padding: 8 }} onPress={() => { navigation.navigate('') }} >
          <Image source={require('../img/ico_bell.png')} />
          {/* Notification  */}
          {/* <View style={{ marginLeft: 22, marginTop: 3, backgroundColor: 'red', width: 8, height: 8, position: 'absolute', borderRadius: 4 }} /> */}
        </TouchableOpacity>
      ,
      headerStyle: {
        backgroundColor: AppStyle.navigationBarColor,
        borderBottomWidth: 0,
      },
      headerTitle: (
        <NavigationBarTitle title="Search" />
      )

    })

  },

  // Search Near By
  NearBy: {
    screen: SearchNearByScreen,
        navigationOptions: ({ navigation }) => ({
      headerLeft:
        <TouchableOpacity style={{ marginLeft: 10, padding: 8 }} onPress={() => { this.props.navigation.navigate('') }}>
          <Image source={require('../img/ico_menu.png')} />
        </TouchableOpacity>,
      headerRight:
        <TouchableOpacity style={{ marginRight: 10, padding: 8 }} onPress={() => { navigation.navigate('') }} >
          <Image source={require('../img/ico_bell.png')} />
          {/* Notification  */}
          {/* <View style={{ marginLeft: 22, marginTop: 3, backgroundColor: 'red', width: 8, height: 8, position: 'absolute', borderRadius: 4 }} /> */}
        </TouchableOpacity>
      ,
      headerStyle: {
        backgroundColor: AppStyle.navigationBarColor,
        borderBottomWidth: 0,
      },
      headerTitle: (
        <NavigationBarTitle title="Search" />
      )

    })

  },

  // Sort by
  ShortBy: {
    screen: SearchShortByScreen,
  },

  // Filter
  Filter: {
    screen: SearchFilter,
  }
},
  {
    initialRouteName: "NearBy",
  })


// Manu main Stacknavigator
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
    navigationOptions: ({ navigation }) => ({
      headerLeft:
        <TouchableOpacity style={{ marginLeft: 10, padding: 8 }} onPress={() => { this.props.navigation.navigate('ProfileHome')}}>
          <Image source={require('../img/ico_menu.png')} />
        </TouchableOpacity>,
      headerRight:
        <TouchableOpacity style={{ marginRight: 10, padding: 8 }} onPress={() => { navigation.navigate('NotificationsMain') }} >
          <Image source={require('../img/ico_bell.png')} />
          {/* Notification  */}
          {/* <View style={{ marginLeft: 22, marginTop: 3, backgroundColor: 'red', width: 8, height: 8, position: 'absolute', borderRadius: 4 }} /> */}
        </TouchableOpacity>
      ,
      headerStyle: {
        backgroundColor: AppStyle.navigationBarColor,
        borderBottomWidth: 0,
      },
      headerTitle: (
        <NavigationBarTitle title="Search" />
      )

    })
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
