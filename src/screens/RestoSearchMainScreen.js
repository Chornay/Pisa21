import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Icon, Form, Item, Input, Container, Header, Content, Footer, Button } from 'native-base';

class RestoSearchMainScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <Item>
                            <Input placeholder="Search all restaurant"/>
                        </Item>

                    </View>

                </Content>

            </Container>
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

export default RestoSearchMainScreen;


