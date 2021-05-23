import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import Input from '../components/Input';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import * as gameActions from '../store/actions/game';
import Colors from '../constants/Colors';
import WORDS from '../data/words';

const GamePlayScreen = props => {
    const [ wordArray, setWordArray ] = useState(WORDS);
    const [ wordGuessed, setWordGuessed ] = useState('');
    const [ imgSource, setImageSource ] = useState(require('../assets/none.png'));

    const dispatch = useDispatch();

    let wordMissingLetters = '';
    let lifePoints = useSelector(state => state.game.lifePoints);

    const createWordMissingLetters = () => {
        wordMissingLetters = '';

        for (var i=0; i<wordArray[0].length; i++) {
            if (i % 2 === 0) {
                wordMissingLetters = wordMissingLetters + wordArray[0].substr(i, 1);
            } else {
                wordMissingLetters = wordMissingLetters + '_';
            }
        }
    };

    createWordMissingLetters();

    const inputHandler = inputText => {
        setWordGuessed(inputText);
    };

    const afterCheckGuess = () => {
        if (lifePoints === 0) {
            return;
        }
        wordArray.shift();
        const newWordArray = wordArray;
        setWordArray(newWordArray);
        setWordGuessed('');
        setImageSource(require('../assets/none.png'));
    };

    const checkGuessHandler = () => {
        if (wordGuessed === wordArray[0]) {
            setImageSource(require('../assets/correct.png'));
            dispatch(gameActions.addVictoryPoint());
        } else {
            setImageSource(require('../assets/incorrect.png'));
            dispatch(gameActions.removeLifePoint());
        }
        setTimeout(afterCheckGuess, 1000);
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Guess what this word is:</Text>
            <Card>
                <Text style={styles.word}>{wordMissingLetters}</Text>
            </Card>
            <Text style={styles.text}>Your guess:</Text>
            <Card>
                <View style={styles.inputRow}>
                    <Input onChangeText={inputHandler} value={wordGuessed} />
                    <Image style={styles.image} source={imgSource} />
                </View>
            </Card>
            <View style={styles.buttonContainer}>
                <MainButton onPress={() => checkGuessHandler()}>
                    Check your guess
                </MainButton>
            </View>
            <View style={styles.data}>
                <Text style={styles.textData}>Victory points: {useSelector(state => state.game.victoryPoints)}</Text>
                <Text style={styles.textData}>Life points: {useSelector(state => state.game.lifePoints)}</Text>
            </View>
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
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 30
    },
    word: {
        color: Colors.primary,
        fontSize: 20
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 20,
        width: 20
    },
    buttonContainer: {
        marginVertical: 30
    },
    data: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '80%',
        marginVertical: 20
    },
    textData: {
        color: 'white',
        fontSize: 18
    }
});

export default GamePlayScreen;

