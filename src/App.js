import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ActiveRoute } from './components/ActiveRoute/ActiveRoute';
import { PageWrapper } from './components/PageWrapper/PageWrapper';
import { SidePanel } from './components/SidePanel/SidePanel';
import { Header } from './components/Header/Header';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './material-ui-theme';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <div className="App">
          <Header />
          <Grid container>
            <SidePanel />
            <Box style={{ flex: 1 }}>
              <PageWrapper>
                <ActiveRoute />
              </PageWrapper>
            </Box>
          </Grid>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
