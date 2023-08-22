import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <div className='fondo'>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido"} />
      <ItemDetailContainer/>
    </div>
  );
};

export default App;
