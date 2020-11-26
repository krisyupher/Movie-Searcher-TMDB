import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../component/Header'; 
import Hero from '../component/Hero';
import MovieDetail from '../component/MovieDetail';
import TvDetail from '../component/TvDetail';

const App = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path='/' component={Hero} />
      <Route exact path='/Search' component={Hero} />
      <Route exact path='/Search/:id' component={Hero} />
      <Route exact path='/Detail/:id' component={MovieDetail} />
      <Route exact path='/DetailTv/:id' component={TvDetail} />
    </Switch>
  </BrowserRouter>
);

export default App;