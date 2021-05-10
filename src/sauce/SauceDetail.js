import React, { Component } from 'react';
import './SauceDetail.css';
import { getSauce } from '../utils/sauces-api.js';

export default class SauceDetail extends Component {
  state = {
    sauce: null
  }

  async componentDidMount() {
    const { match } = this.props;
    const sauce = await getSauce(match.params.id);
    if (sauce) {
      this.setState({ sauce: sauce });
    } else {
      console.log('No Sauce Here');
    }
  }

  render() {
    const { sauce } = this.state;

    if (!sauce) return null;
    return (
      <div>
        <h1>Hot Sauce Deets</h1>
        <h2>{sauce.name}</h2>
        <img src={sauce.img} alt='Hot Sauce'/>
        <p className='scoville'>Scoville: {sauce.scoville}</p>
        <p className='location'>{sauce.location}</p>
                
      </div>
    );
  }
}
