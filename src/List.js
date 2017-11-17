import React from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

const { width, height } = Dimensions.get('window');

class List extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Image style={{ flex: 1 }} source={require('./img/side.png')} />
                </View>
                <View style={{ flex: 6 }}>
                    <ScrollView>
                        {this.props.screenProps.map((item, i) => {
                            return (
                                <TouchableHighlight key={i} style={styles.item} onPress={() => { navigation.navigate('Gallery', { name: item }) }} underlayColor='lightblue'>
                                    <Text style={styles.itemContent}>
                                        {item}
                                    </Text>
                                </TouchableHighlight>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'stretch',
        flex: 1,
        flexDirection: 'row'
    },
    title: {
        // alignItems: 'center',
        // backgroundColor: 'tomato',
        elevation: 0,
        flex: 4,
        // justifyContent: 'center'
    },
    item: {
        alignItems: 'flex-start',
        borderColor: 'lightgray',
        borderWidth: 0.5,
        height: width / 5,
        justifyContent: 'center',
        paddingHorizontal: width / 20
    },
    itemContent: {
        fontSize: 16,
        // textAlign: 'right'
    }
});

export default List;
