import { StackNavigator } from 'react-navigation';
import List from './List';
import Gallery from './Gallery';
import Photo from './Photo';

const Root = StackNavigator({
    List: {
        screen: List,
        navigationOptions: {
            title: 'Albums'
        }
    },
    Gallery: {
        screen: Gallery,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}`,
        })
    },
    Photo: {
        screen: Photo,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.name}`,
        })
    }
});

export default Root;
