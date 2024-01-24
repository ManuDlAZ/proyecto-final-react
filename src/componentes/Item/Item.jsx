import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, stock,  precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>Name: {nombre} </h3>
        <p>Price: {precio} </p>
        <p>ID: {id} </p>
        <p>STOCK: {stock} </p>
        <Link className='btn' to={`/item/${id}`}> See Details </Link>
    </div>
  )
}

export default Item