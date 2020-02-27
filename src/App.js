import React from 'react';
import './App.css';
import { ActiveRoute } from './components/ActiveRoute/ActiveRoute';
import { PageWrapper } from './components/PageWrapper/PageWrapper';
import { SidePanel } from './components/SidePanel/SidePanel';
import { Header } from './components/Header/Header';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './material-ui-theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <SidePanel/>
        <PageWrapper>
          <ActiveRoute/>
        </PageWrapper>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
