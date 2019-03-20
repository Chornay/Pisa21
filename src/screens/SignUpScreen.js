import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Icon, Form, Item, Input, Container, Header, Content, Footer, Button } from 'native-base';

class SignUpScreen extends Component {
    state = {
        email: '',
        password: '',
    }
    render() {
        return (
            <Container style={styles.container}>
                {/*Create account*/}
                <View style={{ paddingTop: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 24 }}>Create an account</Text>
                </View>

                <View style={{ height: 30 }} />

                {/*Sign in form*/}
                <Content>
                    <Form>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ paddingLeft: 35 }}>
                                <Text>Last Name</Text>
                            </View>
                            <View style={{ paddingRight: 90 }}>
                                <Text>First Name</Text>
                            </View>
                        </View>

                        <View style={{ height: 10 }} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12 }}>
                        {/* <Button style={{ width: 160, height: 33, borderWidth: 1, backgroundColor: 'white', borderColor: '#EB5757', borderRadius: 20 }} /> */}

                            <Item style = {{ width: 160, height: 33, borderWidth: 1, backgroundColor: 'white', borderColor: '#EB5757', borderRadius: 20 }}>
                                <Input  keyboardType="email-address" value={this.state.email} placeholderTextColor="#85878B" autoCapitalize={'none'} ref="input1" onSubmitEditing={() => { this.refs.input2._root.focus() }} onChangeText={(text) => { this.setState({ email: text }) }} returnKeyType={'next'} />
                            </Item>
                            <View style={{}}>
                                <Button style={{ width: 160, height: 33, borderWidth: 1, backgroundColor: 'white', borderColor: '#EB5757', borderRadius: 20 }} Button />
                            </View>
                        </View>
                    </Form>
                    <View>
                        
                    </View>
                    <Button style={{ width: 160, height: 33, borderWidth: 1, backgroundColor: 'white', borderColor: '#EB5757', borderRadius: 20 }} />

                    
                </Content>

            </Container>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        //    justifyContent: 'center',
        //    alignItems: 'center',
    },
    padLeft: {
        paddingLeft: 12,
    }
};

export default SignUpScreen;
