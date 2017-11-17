import React from 'react';
import { Dimensions, Image, View, ScrollView, Text, TouchableHighlight } from 'react-native';

const { width, height } = Dimensions.get('window');

class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            images: []
        };
    }
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{
                    this.state.images.map((item, i) => {
                        let loc = 'https://extenuative-chairpe.000webhostapp.com/UPLOAD/' + navigation.state.params.name + '/' + item;
                        return (
                            <TouchableHighlight key={i} onPress={() => { navigation.navigate('Photo', { uri: loc, name: item }) }} >
                                <Image style={{
                                    borderColor: 'black',
                                    borderWidth: 0.5,
                                    width: width / 2,
                                    height: width / 2
                                }} source={{ uri: loc }} />
                            </TouchableHighlight>
                        );
                    })
                }</View>
            </ScrollView>
        );
    }
    componentDidMount() {
        const navigation = this.props.navigation;
        fetch('https://extenuative-chairpe.000webhostapp.com/files.php?folder=' + navigation.state.params.name)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    images: responseJson.files
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export default Gallery;
