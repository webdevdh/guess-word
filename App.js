import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider, useSelector } from 'react-redux';

import IntroScreen from './screens/IntroScreen';
import GamePlayScreen from './screens/GamePlayScreen';
import GameOverScreen from './screens/GameOverScreen';
import gameReducer from './store/reducers/game';

const rootReducer = combineReducers({
  game: gameReducer
});

const store = createStore(rootReducer);

const ScreenShown = props => {
  const isGameOn = useSelector(state => state.game.gameOn);
  const lifePoints = useSelector(state => state.game.lifePoints);

  let content = <IntroScreen />;

  if (isGameOn) {
    content = <GamePlayScreen />;
  } else if (lifePoints <= 0) {
    content = <GameOverScreen />;
  }
  
  return (
    <View style={{ flex: 1 }}>
      {content}
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
        <ScreenShown />
    </Provider>
  );
}

