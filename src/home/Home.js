import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">

        <Link to='/sauces'>See Them Sauces</Link>

        
      </div>
    );
  }

}