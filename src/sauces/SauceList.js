import React, { Component } from 'react';
import SauceItem from './SauceItem';
import './SauceList.css';

class List extends Component {
  
  render() {
    const sauces = this.props.sauces;

    return (
      <ul className='List'>
        {sauces.map(sauce => (
          <SauceItem key={sauce.name} sauce={sauce}/>
        ))}
      </ul>
    );
  }
}

export default List;