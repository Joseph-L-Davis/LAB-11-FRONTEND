import { Component } from 'react';
import SauceForm from '../common/SauceForm';
import './SauceAdd.css';

export default class SauceAdd extends Component {
  
  render() {
    return (
      <div className="SauceAdd">
        <h2>Add or Update a Sauce</h2>
        <SauceForm/>
      </div>
    );
  }

}