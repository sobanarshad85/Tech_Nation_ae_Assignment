import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const types = {
    'AntDesign': AntDesign,
    'EvilIcons': EvilIcons,
    'Entypo': Entypo,
    'FontAwesome': FontAwesome,
    'Fontisto': Fontisto,
    'Ionicons': Ionicons,
    'MaterialCommunityIcons': MaterialCommunityIcons,
    'FontAwesome5': FontAwesome5,
    'Feather': Feather
}

export default Icon = ({ type, name, color, size }) => {
    // this can also be done as below, and write props in as parameter
    // const { type, name, color, size } = props
    const Icon = types[type]

    return (
        <Icon
            name={name}
            color={color}
            size={size}
        />
    )
}