import React, { Component } from 'react'
import { View, Text } from 'react-native'

class LogInForgetPwScreen extends Component {
   render() {
       return (
           <View style={styles.container}>
               <Text>LogInForgetPwScreen</Text>
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

export default LogInForgetPwScreen;
