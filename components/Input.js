import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const Input = props => {
    return (
        <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        width: 130,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        color: Colors.primary,
        fontSize: 20
    }
});

export default Input;

