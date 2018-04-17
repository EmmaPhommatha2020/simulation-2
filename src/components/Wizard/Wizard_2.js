import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateImg } from "../../ducks/reducer.js";

class Wizard_2 extends Component {
  constructor() {
    super();
    this.state = {
      img: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { img } = this.props;
    this.setState({
      img: img
    });
  }

  handleChange(e) {
    console.log("e--->", e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { img } = this.state;
    return (
      <div className="img_step2">
        <h4>Image URL</h4>
        <input
          className="step2"
          onChange={e => this.handleChange(e)}
          type="text"
          name="img"
          value={img}
        />
        <Link to="/wizard/step1">
          <button
            className="add"
            type="submit"
            onClick={() => this.props.updateImg(img)}
          >
            Back
          </button>
        </Link>

        <Link to="/wizard/step3">
          <button
            className="add"
            type="submit"
            onClick={() => this.props.updateImg(img)}
          >
            Next
          </button>
        </Link>
        <button
          className="cancel"
          type="submit"
          onClick={() => this.setState({ img: "" })}
        >
          Cancel
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("STATE TO PROPS WIZ 2--->", state);
  return {
    img: state.img
  };
}

export default connect(mapStateToProps, { updateImg })(Wizard_2);
