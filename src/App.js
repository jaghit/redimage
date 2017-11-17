import React from 'react';
import {
    Text,
    View
} from 'react-native';
import Splash from './Splash';
import Root from './Root';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            splashing: true
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.state.splashing ? <Splash /> : <Root screenProps={this.state.folders} />}
            </View>
        );
    }
    componentDidMount() {
        fetch('https://extenuative-chairpe.000webhostapp.com/folders.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    splashing: false,
                    folders: responseJson.folderList
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export default App;
