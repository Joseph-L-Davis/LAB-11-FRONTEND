import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>Hot Sauce App</h1>
        
        <Link to='/'>Home Page</Link>
        <Link to='/sauces/add'>Add Your Favorite Hot Sauce</Link>
        
      </header>
    );
  }

}
 
export default Header;