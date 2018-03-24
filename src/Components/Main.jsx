import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';

export const Main = () => {
  return (<main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
    </Switch>
  </main>)
}