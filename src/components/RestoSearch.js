import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Icon, Form, Item, Input, Container, Header, Content, Footer, Button } from 'native-base';

class RestoSearch extends Component {
   render() {
       return (
           <View style={{flexDirection:'row', justifyContent:'space-evenly', paddingHorizontal:12, }}>
             <Button style={{backgroundColor:'#EB5757', paddingHorizontal:8, width:120, borderRadius:10, alignItems:'center'}}>
               <Text style={{color:'white'}}>{this.props.title}</Text>
             </Button>
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

export default RestoSearch;
