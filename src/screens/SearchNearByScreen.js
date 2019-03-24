import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container } from 'native-base';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from 'react-native-maps';


class SearchNearByScreen extends Component {
    render() {
        return (
            <Container>
                <View style={styles.map}>
                    {/* <Text>SearchNearBy</Text> */}
                    <MapView
                        // style={styles.map}
                        region={{
                            latitude: 37.422,
                            longitude: -122.084,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                        showsUserLocation={true}
                    />
                </View>
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
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
};

export default SearchNearByScreen;
