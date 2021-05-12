import { Component } from 'react';
import './SauceForm.css';

export default class SauceForm extends Component {
    state = {
      name: '',
      scoville: '',
      location: '',
      img: ''
    }
  
    componentDidMount() {
      const { sauce } = this.props;
      this.setState(sauce);
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state);
    }
    
    handleChangeName = ({ target }) => {
      this.setState({ name: target.value });
    }

    handleChangeScoville = ({ target }) => {
      this.setState({ scoville: target.value });
    }

    handleChangeLocation = ({ target }) => {
      this.setState({ location: target.value });
    }

    handleChangeImg = ({ target }) => {
      this.setState({ img: target.value });
    }

    render() {
      const { name, scoville, location, img } = this.state;
      const { sauce } = this.props;

      return (
        <form className="SauceForm" onSubmit={this.handleSubmit}>
          <p>
            <label>
              <span>Sauce Name</span>
              <input name="name" required placeholder="Enter Name of Sauce" value={name} onChange={this.handleChangeName}/>
            </label>
          </p>

          <p>
            <label>
              <span>Scoville</span>
              <input name="scoville" required placeholder="Enter Scoville Info" value={scoville} onChange={this.handleChangeScoville}/>
            </label>
          </p>

          <p>
            <label>
              <span>Location</span>
              <input name="location" required placeholder="Where Is This Sauce Made?" value={location} onChange={this.handleChangeLocation}/>
            </label>
          </p>

          <p>
            <label>
              <span>Sauce Image</span>
              <input name="img" placeholder="Enter URL of Sauce Image" value={img} onChange={this.handleChangeImg}/>
            </label>
          </p>

          <p>
            <button>{sauce ? 'Update' : 'Add'} Sauce</button>
          </p>
        
        </form>
      );
    }

}