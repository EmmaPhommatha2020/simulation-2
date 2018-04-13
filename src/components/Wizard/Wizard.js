import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Wizard_2 from './Wizard_2'
// import Wizard_3 from './Wizard_3'



class Wizard extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0,
      img: '',
      mortgage: 0,
      rent: 0
    }
    this.addHouse = this.addHouse.bind(this)
    this.handleChange = this.handleChange.bind(this) 
    
  }

 
  addHouse(name, address, city, state, zip, img, mortgage, rent){
    console.log("post-add new house--->",name, address, city, state, zip, img, mortgage, rent)
    axios.post('/api/house', { 
      name: this.state.name, 
      address: this.state.address, 
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      img: this.state.img,
      mortgage: this.state.mortgage,
      rent: this.state.rent
    })
  }


  handleChange(e) {
    console.log("e--->",e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    const { name, address, city, state, zip, img, mortgage, rent} = this.state;
    return (
      <div>
        <div className="wizard">
          
          <h4>Property Name</h4>
          <input onChange={(e) => this.handleChange(e)} type="text" name="name" value={name} />
          <h4>Address</h4>
          <input onChange={(e) => this.handleChange(e)} type="text" name="address" value={address} />
          <h4>City</h4>
          <input onChange={(e) => this.handleChange(e)} type="text" name="city" value={city} />
          <h4>State</h4>
          <input onChange={(e) => this.handleChange(e)} type="text" name="state" value={state} />
          <h4>Zip</h4>
          <input onChange={(e) => this.handleChange(e)} type="text" name="zip" value={zip} />

          <Link to ="/wizard/step2">
          <button className="add" type="submit" onClick={() => this.addHouse()}>Next</button>
          </Link>

          <h4>Image URL</h4>
          <input onChange={(e) => this.handleChange(e)} type="text" name="img" value={img} />
          <Link to ="/wizard/step3">
          <button className="add" type="submit" onClick={() => this.addHouse()}>Next</button>
          </Link>  

          <h4>Monthly Mortgage Amount</h4>
          <input onChange={(e) => this.handleChange(e)} type="text" name="mortgage" value={mortgage} />
          <h4>Desired Monthly Rent</h4>
          <input onChange={(e) => this.handleChange(e)} type="text" name="rent" value={rent} />
          <Link to ="/wizard/step3">
          <button className="add" type="submit" onClick={() => this.addHouse(name, address, city, state, zip, img, mortgage, rent)}>Complete</button>
         </Link>   

        
        {/* 
         // this way not work yet //

          <Wizard_2 img={img} handleChange={this.handleChange} addHouse={this.addHouse}/>
          <Wizard_3 name={name} address={address} city={city} state={state} zip={zip} img={img} mortgage={mortgage} rent={rent} handleChange={this.handleChange} addHouse={this.addHouse}/> */}
          
        </div>
      </div>
    )
  }
}
export default Wizard;

