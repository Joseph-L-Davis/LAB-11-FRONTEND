import React, { Component } from 'react';
import SauceList from './SauceList.js';
import { getSauces } from '../utils/sauces-api.js';
import './SaucePage.css';

export default class SaucePage extends Component {
    state = {
      sauces: []
    }

    async componentDidMount() {
      const sauces = await getSauces();
      this.setState({ sauces: sauces });
    }

    render() {
      const { sauces } = this.state;

      return (
        <div className='SaucePage'>
          <h1>These Be The Sauces</h1>   

          <SauceList sauces={sauces}/>
        </div>
      );
    }
}
