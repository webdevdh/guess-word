import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import MainButton from '../components/MainButton';
import * as gameActions from '../store/actions/game';
import Colors from '../constants/Colors';

const IntroScreen = props => {
    const dispatch = useDispatch();

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Welcome to the GUESS THE WORD game!</Text>
            <MainButton
                onPress={() => {
                    dispatch(gameActions.startGame());
                }}
            >
                START GAME
            </MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: Colors.primary
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 50,
        textAlign: 'center'
    }
});

export default IntroScreen;

