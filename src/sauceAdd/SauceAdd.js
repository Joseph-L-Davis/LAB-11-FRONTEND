import { Component } from 'react';
import SauceForm from '../common/SauceForm';
import './SauceAdd.css';

export default class SauceAdd extends Component {

    handleAdd = sauceToAdd => {
      console.log(sauceToAdd);
    }
  
    render() {
      return (
        <div className="SauceAdd">
          <h2>Add or Update a Sauce</h2>
          <SauceForm onSubmit={this.handleAdd}/>
        </div>
      );
    }

}