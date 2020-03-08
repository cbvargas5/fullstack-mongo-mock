import React from 'react';
  
const Products = (props) => {
   return(
    <div className='product-list-entry'>
      {console.log('props in individual products -->', props)}
      <img src={props.img}/>
      <h2>{props.item}</h2>
      <p>Current Bid: ${props.bid}</p>
      <p>Bid Ends in {props.end} days(s)</p>
    </div>
  )
}

export default Products