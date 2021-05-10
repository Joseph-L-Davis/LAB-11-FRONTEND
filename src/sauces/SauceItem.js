import React, { Component } from 'react';
import './SauceItem.css';

class SauceItem extends Component {

  render() {
    const sauce = this.props.sauce;

    return (
      <li className='SauceItem'>
        <h2>{sauce.name}</h2>
        <img src={sauce.url} alt='Hot Sauce'/>
        <p className='scoville'>Scoville: {sauce.scoville}</p>
        <p className='location'>{sauce.location}</p>
      </li>

    );
  }
}

export default SauceItem;