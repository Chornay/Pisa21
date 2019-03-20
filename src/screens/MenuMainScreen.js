import React, { Component } from 'react'
import { View, Text } from 'react-native'

class MenuMainScreen extends Component {
   render() {
       return (
           <View style={styles.container}>
               <Text>MenuMainScreen</Text>
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

export default MenuMainScreen;
