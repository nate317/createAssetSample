import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CaseForm from './createAsset';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={CaseForm} exact />
      </Switch>
    </main>
  )
}

export default App;
