import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SearchBrew from './components/SearchBrew';
import Brewery from './components/Brewery';
import NotFound from './components/NotFound';
import Header from './components/Header';

import './App.scss';

function App() {
  return (
    <div className="App">

      

      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path={["/","/brews-app"]}>
            <SearchBrew />
          </Route>

          <Route path={`/brewery/:breweryId`}>
            <Brewery />
          </Route>

          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
