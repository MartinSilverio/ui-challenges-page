import React from 'react';
import './App.css';
// import LoginContainer from './components/login-container/LoginContainer';
import Header from './components/header/Header';
import LoginPage from './pages/ui-challenge-001-login/LoginPage';
import HomePage from './pages/homepage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Router path='/ui-challenge-001-login'>
            <LoginPage />
          </Router>
          <Router path='/ui-challenge-002-credit-card-checkout'>
            <LoginPage />
          </Router>
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
