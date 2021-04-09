import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ZipCode from './ZipCode';
import CitySearch from './CitySearch';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

const router = (
  <BrowserRouter basename="/wd-5">
    <Switch>
      <Route exact path="/zipsearch" component={ZipCode} />
      <Route exact path="/citysearch" component={CitySearch} />
      <Route path="/*" component={() => <Redirect to="/zipsearch" />} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
