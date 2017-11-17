import React from 'react';
import { Button, Dimensions, Image, ScrollView, View } from 'react-native';

const { width, height } = Dimensions.get('window');

class Photo extends React.Component {
    render() {
        return (
            <Image style={{
                backgroundColor: 'rgb(232,232,238)',
                width: width,
                height: height / 1.18
            }} resizeMode={'contain'} source={{ uri: this.props.navigation.state.params.uri }} />

        );
    }
}

export default Photo;
