import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Icon, Form, Item, Input, Container, Header, Content, Footer, Button } from 'native-base';

class LogInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', paddingTop: 80 }}>
          <Text style={{ fontSize: 24 }}>Welcome</Text>
        </View>

        <View style={{ height: 20 }} />

        <View style={{ alignItems: 'center', paddingLeft: 90 }}>
          <Image source={require('../img/pisa_logo.png')} style={{ alignItems: 'center' }} />
        </View>

        <View style={{ height: 45 }} />

        <View style={{ alignSelf: 'center' }}>
          <Button style={{ width: 300, borderWidth: 1, backgroundColor: 'white', borderColor: '#EB5757', borderRadius: 20 }}>
            <Text style={{ paddingLeft: 8 }}>Username</Text>
          </Button>
        </View>

        <View style={{ height: 20 }} />

        <View style={{ alignSelf: 'center' }}>
          <Button style={{ width: 300, borderWidth: 1, backgroundColor: 'white', borderColor: '#EB5757', borderRadius: 20 }}>
            <Text style={{ paddingLeft: 8 }}>Password</Text>
          </Button>
        </View>

        <View style={{ height: 20 }} />

        <View style={{ alignSelf: 'center' }}>
          <Button style={{ width: 240, borderWidth: 1, backgroundColor: '#EB5757', borderColor: 'white', borderRadius: 20 }}>
            <Text style={{ paddingLeft: 80, color: 'white' }}>Login</Text>
          </Button>
          <View style={{ height: 20 }} />
          <Text style={{ alignSelf: 'center' }}>Forgot Password</Text>
        </View>

        <View style={{ height: 180 }} />

        <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>
          <View style={{}}>
            <Text>Create an account</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text>Guest</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },

};


export default LogInScreen;
