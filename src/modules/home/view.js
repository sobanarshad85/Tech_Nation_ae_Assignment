//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '../../components/icons';

// create a component
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hosmse</Text>
                <Icon type='AntDesign' name='home' color={'white'} size={20} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Home;
