import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Icon, Form, Item, Input, Container, Header, Content, Footer, Button } from 'native-base';
// import Slideshow from 'react-native-slideshow';
// import MapView from 'react-native-maps'

import RestoSearch from '../components/RestoSearch'

class SearchMainScreen extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <Item>
                            <Input placeholder="Search all restaurant" />
                        </Item>
                    </View>
                    <View style={{ height: 20 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingHorizontal: 12, }}>
                        <RestoSearch 
                            title="Search near by"
                            onPress={() => { this.props.navigation.navigate('NearBy') }}
                        />
                        <RestoSearch title="Filter" />
                        <RestoSearch title="Sort by" />
                    </View>

                    {/* <View style ={{ flew:1, backgroundColor:'blue'}}>
                    <MapView
                        style={{backgroundColor:'blue' }}
                        region={{
                            latitude: 42.882004,
                            longitude: 74.582748,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                        showsUserLocation={true}
                    />
                    </View> */}
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

export default SearchMainScreen;


