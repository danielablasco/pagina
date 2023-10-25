import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../Context/DataProvider';

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;
 const toogleMenu = () =>{
  setMenu(!menu)
 }


  return (
   <header>
    <ul>
    <li>
          <Link to="/">Inicio</Link>
             </li>
      <li>
          <Link to="/productos">Productos</Link>
  </li>
  
  </ul>
    <div className='cart' onClick={toogleMenu}>
      <box-icon name="cart"></box-icon>
    <span className="item_total">{carrito.length} </span>
    </div>
    </header>
  );
};

export default Header