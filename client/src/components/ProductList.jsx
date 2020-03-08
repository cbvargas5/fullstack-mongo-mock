import React from 'react';
import Products from './Products.jsx';
  
const ProductList = (props) => {
   return(
    <div className='product-list'>
      {props.products.map((item, index) => <Products key={item._id} item={item.item} bid={item.curr_bid} end={item.ends_in}/>)}
    </div>
  )
}

export default ProductList