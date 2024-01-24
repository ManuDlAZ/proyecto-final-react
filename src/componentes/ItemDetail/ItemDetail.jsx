import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({id, nombre, stock, precio, img, descripcion}) => {
  const [agregarCantidad, setAgregarCantidad]  = useState(0);

  const {agregarAlCarrito} = useContext(CarritoContext);
   
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
 
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
        <h2>Name: {nombre} </h2>
        <p>Price:{precio} </p>
        <p>ID:{id} </p>
        <p>STOCK: {stock} </p>
        <p>Description: {descripcion}</p>
        <img src={img} alt={nombre} />
        {
          agregarCantidad > 0 ? (<Link to="/cart">Finish purchase</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
    </div>
  )
}

export default ItemDetail