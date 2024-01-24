import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext);

    return (
        <div>
            <h4> {item.nombre} </h4>
            <p> Amount: {cantidad} </p>
            <p> Price: {item.precio} </p>
            <button onClick={()=> eliminarProducto(item.id)}> Remove product</button>
            <hr />
        </div>
    )
}

export default CartItem