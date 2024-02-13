import { React,  useState } from 'react';
import ItemContext from './ItemContext';

const ItemProvider = (props) =>{

    const [list_item, setItem] = useState([   {
        id:1,
        item_img: "images/f1.png",
        item_name: "brown Chair Design",
        item_price: 100,
      },
      {
        id:2,
        item_img: "images/f2.png",
        item_name: "Double Bed Design",
        item_price: 100,
      },
      {
        id:3,
        item_img: "images/f3.png",
        item_name: "House Chair Design",
        item_price: 100,
      },
      {
        id:4,
        item_img: "images/f4.png",
        item_name: "brown Table Design",
        item_price: 100,
      },
      {
        id:5,
        item_img: "images/f5.png",
        item_name: "Blue Chair Design",
        item_price: 100,
      },
      {
        id:6,
        item_img: "images/f6.png",
        item_name: "Blue table Design",
        item_price: 500,
       }]);
      
      
    return(
        <ItemContext.Provider value={list_item}>
            {props.children}
        </ItemContext.Provider>
    );
}

export default ItemProvider;