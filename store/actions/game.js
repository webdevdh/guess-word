export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';
export const ADD_VICTORY_POINT = 'ADD_VICTORY_POINT';
export const REMOVE_LIFE_POINT = 'REMOVE_LIFE_POINT';

export const startGame = () => {
    return { type: START_GAME };
};

export const endGame = () => {
    return { type: END_GAME };
};

export const addVictoryPoint = () => {
    return { type: ADD_VICTORY_POINT };
};

export const removeLifePoint = () => {
    return { type: REMOVE_LIFE_POINT };
};

