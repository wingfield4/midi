import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import './App.css';

import ChordManager from './components/managers/ChordManager';
import InputManager from './components/managers/InputManager';
import InstrumentManager from './components/managers/InstrumentManager';
import MidiManager from './components/managers/MidiManager';

import AppBar from './components/common/AppBar';
import PageContainer from './components/common/PageContainer';
import Pages from './Pages';
import ThemeProvider from './components/common/mui/ThemeProvider';

import store from './utilities/store'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <ChordManager />
          <InputManager />
          <InstrumentManager />
          <MidiManager />
          <PageContainer>
            <Pages />
          </PageContainer>
          <AppBar />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App;
