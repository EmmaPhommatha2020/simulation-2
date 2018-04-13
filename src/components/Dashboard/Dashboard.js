import React, { Component } from 'react';
import axios from 'axios';
import House from '../House/House.js';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      houses: [],
      id:''
    }
    
    this.deleteHouse = this.deleteHouse.bind(this)
  }

  componentDidMount() {
    axios.get('/api/houses').then(res => {
      console.log("get houses--->", res.data)
      this.setState({
        houses: res.data
      })
    });
  }

  deleteHouse(id) {
    axios.delete(`/api/house/${id}`).then(res => {
      console.log("delete--->", id)
      this.setState({
        products: res.data
      })
    })
  }

  render() {
    const {houses} = this.state
    let newHouse = houses.map((house, i) => {
      const {name, address, city, state, zip, img, mortgage, rent, id} = house
      return (
       <House deleteHouse={this.deleteHouse} name={name} address={address} city={city} state={state} zip={zip} img={img} mortgage={mortgage} rent={rent} id={id}/>
      )});

    return (
      <div>
        {newHouse}
      </div>
    )
  }
}


export default Dashboard;