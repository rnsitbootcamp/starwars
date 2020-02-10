import React from 'react';

import { Provider } from 'react-redux';
import { Block, GalioProvider } from 'galio-framework';

// You can import from local files
import store from './stores/configureStore';
import AppContainer from './navigation/AppNavigator';
import { materialTheme } from './constants/';

// or any pure javascript modules available in npm

export default function App() {
  return (
    <Provider store={store()}>
      <GalioProvider theme={materialTheme}>
        <Block flex>
          <AppContainer />
        </Block>
      </GalioProvider>
    </Provider>
  );
}
