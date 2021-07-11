import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SearchBrew from './components/searchBrew/SearchBrew';
import Brewery from './components/brewery/Brewery';
import NotFound from './components/notFound/NotFound';
import Header from './components/header/Header';

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
