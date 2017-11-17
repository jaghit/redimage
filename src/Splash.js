import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class Splash extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <View>
                    <Text style={styles.content}>
                        RedImage
                    </Text>
                </View>
                <View>
                    <Text style={styles.loading}>
                        Loading...
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'tomato',
        flex: 1,
        justifyContent: 'center'
    },
    content: {
        color: 'white',
        // fontFamily: 'sans-serif',
        fontSize: 32,
        fontWeight: '900'
    },
    loading: {
        color: 'white',
        // fontFamily: 'sans-s/erif',
        fontSize: 12
    }
});

export default Splash;
