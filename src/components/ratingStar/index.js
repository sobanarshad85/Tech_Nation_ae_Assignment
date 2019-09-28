import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { View } from 'native-base';


export default class StarRating extends Component {

    constructor(props) {
        super(props);
    }


    render = () => {
        const starSize = this.props.size;
        const value = this.props.value;
        const color = this.props.color;
        const lightSilver = 'silver';
        return (
            <View style={{ flexDirection: 'row' }}>
                <MaterialIcons name="star" color={value >= 1 ? color : lightSilver} size={starSize} />
                <MaterialIcons name="star" color={value >= 2 ? color : lightSilver} size={starSize} />
                <MaterialIcons name="star" color={value >= 3 ? color : lightSilver} size={starSize} />
                <MaterialIcons name="star" color={value >= 4 ? color : lightSilver} size={starSize} />
                <MaterialIcons name="star" color={value >= 5 ? color : lightSilver} size={starSize} />
            </View>
        );
    }
}
