import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AuthLoadingScreen extends Component {
   render() {
       return (
           <View style={styles.container}>
               <Text>AuthLoadingScreen</Text>
           </View>
       );
   }
}

const styles = {
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
   },
};

export default AuthLoadingScreen;
