import { Component } from 'react';
import SauceForm from '../common/SauceForm';
import { addSauce } from '../utils/sauces-api.js';
import './SauceAdd.css';

export default class SauceAdd extends Component {

    handleAdd = async sauceToAdd => {
      const { history } = this.props;

      try {
        const newSauce = await addSauce(sauceToAdd);
        history.push(`/sauces/${newSauce.id}`);
      }
      catch (err) {
        console.log(err.message);
      }
    }
  
    render() {
      return (
        <div className="SauceAdd">
          <h1>Add or Update a Sauce</h1>
          <SauceForm onSubmit={this.handleAdd}/>
        </div>
      );
    }

}