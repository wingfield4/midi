import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import './App.css';

import AppBar from './components/common/AppBar';
import PageContainer from './components/common/PageContainer';
import Pages from './Pages';
import ThemeProvider from './components/common/mui/ThemeProvider';

import store from './utilities/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
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
