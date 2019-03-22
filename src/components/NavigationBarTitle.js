import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'

class NavigationBarTitle extends Component {
   render() {

      let leftAdjustment = 0;

      if ( this.props.emptyLeft === true ) {
        leftAdjustment = 30;
      } else if (this.props.emptyRight === true) {
        leftAdjustment = -30;
      }

       return (
        
           <View style={{
              marginLeft:'auto',
              marginRight:'auto',
              left: Platform.OS === 'ios' ? 0 : leftAdjustment,
           }}>
               <Text style={{ color: 'white', fontSize: 17, fontWeight:'700', textAlign:'center',padding:12}}>{this.props.title}</Text>
           </View>

       );
   }
}


export default NavigationBarTitle;
