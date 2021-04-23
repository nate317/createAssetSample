import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CaseForm from './caseForm';
import CaseProfile from './caseProfile';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={CaseForm} exact />
        <Route path='/profile' component={CaseProfile} />
      </Switch>
    </main>
  )
}

export default App;
