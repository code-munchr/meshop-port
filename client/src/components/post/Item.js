import React, { Component } from 'react';
import logo from '../../imgs/41ktfs.jpg';



class Item extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            
            
            
            
            


<div class="col s12 m4 l4">
  <div class="card">
    <span class="card-title">{this.props.name}</span>
    <div class="card-image">
      <img src={logo} ></img>
    </div>
    <div class="card-content">
      <p>{this.props.description}</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
</div>

            
            
             
            
        )
    }
}
export default  Item