import { Component } from 'react';
import SauceForm from '../common/SauceForm.js';
import { getSauce, updateSauce } from '../utils/sauces-api.js';
import './SauceEdit.css';

export default class SauceEdit extends Component {

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

  handleUpdate = async sauce => {
    const { history } = this.props;
    try {
      const updatedSauce = await updateSauce(sauce);
      history.push(`/sauces/${updatedSauce.id}`);
    }
    catch (err){
      console.log(err.message);
    }
  }
  
  render() {
    const { sauce } = this.state;
    return (
      <div className="SauceEdit">
        <h1> Edit Sauce</h1>

        {sauce && <SauceForm sauce={sauce} onSubmit={this.handleUpdate}/>}
      </div>
    );
  }

}