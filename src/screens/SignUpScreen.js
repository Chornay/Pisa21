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
                {/* <Content>  */}
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
                        <Item rounded style={{width:160, height:35, borderColor:'#EB5757', borderWidth:1}}>
                                <Input/>
                            </Item>
                            <Item rounded style={{width:160, height:35, borderColor:'#EB5757', borderWidth:1}}>
                                <Input/>
                            </Item>

                        </View>
                    </Form>

                    <View style={{ height: 10 }} />

                    <View style={{paddingTop:460, paddingRight: 16, alignSelf:'center'}}>
                    <Button style={{width:120, backgroundColor:'#EB5757', paddingLeft:45}} onPress={()=>{this.props.navigation.navigate('Login')}}>
                        <Text style={[styles.textCenterWhite, {alignSelf:'center'}]}>Next</Text>
                    </Button>
                    </View>



                {/* </Content> */}

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
    },
    textCenterWhite:{
        color: 'white',
    }

};

export default SignUpScreen;
