import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateStep1 } from "../../ducks/reducer.js";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { name, address, city, state, zip } = this.props;
    this.setState({
      name,
      address,
      city,
      state,
      zip
    });
  }

  handleChange(e) {
    console.log("e--->", e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { name, address, city, state, zip } = this.state;
    return (
      <div>
        <div className="wizard">
          <h4>Property Name</h4>
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            name="name"
            value={name}
          />
          <h4>Address</h4>
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            name="address"
            value={address}
          />
          <h4>City</h4>
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            name="city"
            value={city}
          />
          <h4>State</h4>
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            name="state"
            value={state}
          />
          <h4>Zip</h4>
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            name="zip"
            value={zip}
          />

          <Link to="/wizard/step2">
            <button
              className="add"
              type="submit"
              onClick={() =>
                this.props.updateStep1(name, address, city, state, zip)
              }
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { name, address, city, zip } = state;
  console.log('IN STATE WIZ 1--->', state)
  return { name, address, city, zip, state: state.state };
}

export default connect(mapStateToProps, { updateStep1 })(Wizard);
