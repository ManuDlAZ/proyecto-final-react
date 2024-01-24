import { Link,NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
      <header>
          <Link to="/">
              <h1>Dragon's Hoard Emporium</h1>
          </Link>
  
          <nav>
              <ul>
                  <li>
                      <NavLink to="/category/Manual">Manual</NavLink>
                  </li>
  
                  <li>
                      <NavLink to="/category/Dice">Dice</NavLink>
                  </li>
  
                  <li>
                      <NavLink to="/category/Adventure">Adventure</NavLink>
                  </li>
              </ul>
          </nav>
          <CartWidget/>
  
      </header>
    )
  }
  
  export default NavBar