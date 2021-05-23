import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import Input from '../components/Input';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import * as gameActions from '../store/actions/game';
import Colors from '../constants/Colors';

const GameOverScreen = props => {
    const dispatch = useDispatch();

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The game is over!</Text>
            <Card style={styles.card}>
                <Text>Fill in your details to keep track of your scores</Text>
                <Input style={styles.input} placeholder="name" />
                <Input style={styles.input} placeholder="phone" />
                <MainButton onPress={() => {}}>
                    Submit
                </MainButton>
            </Card>
            <MainButton onPress={() => {
                dispatch(gameActions.startGame());
            }}>
                New Game
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
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20
    },
    card: {
        width: 250,
        marginBottom: 40
    },
    input: {
        width: 200
    }
});

export default GameOverScreen;

