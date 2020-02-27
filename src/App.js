import React from 'react';
import './App.css';
import { ActiveRoute } from './components/ActiveRoute/ActiveRoute';
import { PageWrapper } from './components/PageWrapper/PageWrapper';
import { SidePanel } from './components/SidePanel/SidePanel';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <SidePanel/>
      <PageWrapper>
        <ActiveRoute/>
      </PageWrapper>
    </div>
  );
}

export default App;
