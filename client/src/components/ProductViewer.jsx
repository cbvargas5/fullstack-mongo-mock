import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      view: {}
    }
    // this.displayFirstViewer = this.displayFirstViewer.bind(this)
  }
  componentDidMount() {
    // this.displayFirstViewer
    axios.get('/products')
      .then((data) => {
        this.setState({
          products: data.data,
          view: data.data[0]
        })
        console.log('new State: ', data.data)
      })
  }
  // displayFirstViewer() {
  //   this.setState(() => ({
  //     view: this.props.products
  //   }))
  // }

  render(){
    return(
      <div className = 'product-viewer'>
        <img src={this.state.view.image}/>
        <h1>{this.state.view.item}</h1>
        <h3>Current Bid: ${this.state.view.curr_bid}</h3>
        <h3>Original Posting Price: ${this.state.view.min_cost}</h3>
        <h3>Bidding ends in {this.state.view.ends_in} Days(s)</h3>
        {/* <h1 onClick={this.displayFirstViewer}>test</h1> */}
      </div>
    )
  }
}