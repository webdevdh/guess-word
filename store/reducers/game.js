const initialState = {
    victoryPoints: 0,
    lifePoints: 3,
    gameOn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'START_GAME':
            return {
                ...state,
                victoryPoints: 0,
                lifePoints: 3,
                gameOn: true
            };
        case 'ADD_VICTORY_POINT':
            return {
                ...state,
                victoryPoints: state.victoryPoints + 1
            };
        case 'REMOVE_LIFE_POINT':
            let gameOnStatus = true;
            if (state.lifePoints === 1) {
                gameOnStatus = false;
            }
            return {
                ...state,
                lifePoints: state.lifePoints - 1,
                gameOn: gameOnStatus
            };
        default:
            return state;
    }
};

