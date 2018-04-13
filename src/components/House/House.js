import React from 'react';


function House(props) {
  const { name, address, city, state, zip, img, mortgage, rent, deleteHouse, id} = props
  return (
    <div className="box">
      <img className="img_houses" src={img} alt='pic' />
      <div className="content">

        <div className="property">
          <p>Property Name: {name}</p>
          <p>Address: {address}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Zip: {zip}</p>
        </div>
          <div className="mortgage">
          <p>Monthly Morgage: {mortgage}</p>
          <p>Desired Rent: {rent}</p>
          </div>


        <div className='buttonsContainer'>
          <button className="deleteHouse"onClick={() => deleteHouse(id)}>X</button>
        </div>

      </div>
    </div>
  )
}

export default House;