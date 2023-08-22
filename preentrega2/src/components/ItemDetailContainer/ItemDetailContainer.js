import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import React, { useEffect, useState } from 'react'

const ItemDetailContainer= ()=>{
    const[product,setProducts]=useState([])
    useEffect(()=>{
      getProductsById('1')
      .then(response=>{
        setProducts(response)
      })
      .catch(error=>{
        console.error(error);
      })
  
    },[])
    return (
      <div className='ItemDetailContainer'>
        <ItemDetail {...product}/>
      </div>
    );
}

export default ItemDetailContainer