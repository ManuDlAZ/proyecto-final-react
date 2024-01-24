import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if(cantidadTotal === 0 ) {
        return (
            <>
                <h2>Add some items to your cart adventurer! </h2>
                <Link to="/"> See Products </Link>
            </>
        )
    }

  return (
    <div>
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
        }
        <h3>Total: $ {total} </h3>
        <h3>Total amount: {cantidadTotal} </h3>
        <button onClick={()=> vaciarCarrito()}> Empty Cart</button>
        <Link to="/checkout"> Finish Purchase </Link>
    </div>
  )
}

export default Cart