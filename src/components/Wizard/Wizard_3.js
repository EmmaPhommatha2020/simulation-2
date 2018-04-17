import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateStep3 } from "../../ducks/reducer.js";

class Wizard_3 extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: "",
      rent: ""
    };
    
    this.addHouse = this.addHouse.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { name, address, city, state, zip, img, mortgage, rent } = this.props;
    this.setState({
      name,
      address,
      city,
      state,
      zip,
      img,
      mortgage,
      rent
    });
  }

  handleChange(e) {
    console.log("e--->", e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addHouse () {
    const { name, address, city, state, zip, img } = this.props;
    const { mortgage, rent } = this.state;

    axios.post("/api/house", {
      name,
      address,
      city,
      state,
      zip,
      img,
      mortgage,
      rent
    });
  }

  render() {
    const { name, address, city, state, zip, img } = this.props;
    const { mortgage, rent } = this.state;
    return (
      <div className="step3">
        <h4>Monthly Mortgage Amount</h4>
        <input
          onChange={e => this.handleChange(e)}
          type="text"
          name="mortgage"
          value={mortgage}
        />
        <h4>Disired Monthly Rent</h4>
        <input
          onChange={e => this.handleChange(e)}
          type="text"
          name="rent"
          value={rent}
        />
        <Link to="/wizard/step2">
          <button
            className="add"
            type="submit"
            onClick={() => this.props.updateStep3(mortgage, rent)}
          >
            Back
          </button>
        </Link>

        <Link to="/" />
        <button
          className="add"
          type="submit"
          onClick={() =>
            this.addHouse(name, address, city, state, zip, img, mortgage, rent)
          }
        >
          Complete
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('STATE TO PROPS WIZ 3--->', state);
  
  const { name, address, city, zip, img, mortgage, rent } = state;
  return { name, address, city, state: state.state, zip, img, mortgage, rent };
}

export default connect(mapStateToProps, { updateStep3 })(Wizard_3);
