import React, { Component } from 'react'
import Item from './Item'

var    itemsA=[{name: "ps4", price:"35", description:"good gaming console"},
            {name: "iphone", price:"55", description:"good gaming console"},
            {name: "shirt", price:"5", description:"good gaming console"},
            {name: "jeans", price:"10", description:"good gaming console"},
            {name: "Toy", price:"5", description:"good gaming console"}];

class ItemList extends Component {
    render() {
        var i=0;
        const items = itemsA.map((data)=>{ 
            i++;
             
           return( 
                  
                
               
                 <Item  key={i} name={data.name} description={data.description} price={data.price} />
              )
             
       })
        
        return (
            

            <div class="row">
                {items}
            </div>
        )
    }
}
export default ItemList;