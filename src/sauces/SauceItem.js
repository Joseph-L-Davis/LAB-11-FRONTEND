import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SauceItem.css';

class SauceItem extends Component {

  render() {
    const sauce = this.props.sauce;

    return (
      <li className='SauceItem'>
        <Link to={`/sauces/${sauce.id}`}>

          <h2>{sauce.name}</h2>
          <img src={sauce.img} alt='Hot Sauce'/>
          <p className='scoville'>Scoville: {sauce.scoville}</p>
          <p className='location'>{sauce.location}</p>
      
        </Link>
        
      </li>

    );
  }
}

export default SauceItem;