import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import SaucePage from '../sauces/SaucePage.js';
import SauceDetail from '../sauce/SauceDetail.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/sauces" exact={true}
                render={routerProps => (
                  <SaucePage {... routerProps}/>
                )}
              />

              <Route path="/sauces/:id"
                render={routerProps => (
                  <SauceDetail {...routerProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
