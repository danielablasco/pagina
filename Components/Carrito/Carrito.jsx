import React, { useContext } from "react";

import { DataContext } from "../Context/DataProvider";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const tooglefalse = () => {
    setMenu(false);
	};
	
	const reduce = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
			}
			setCarrito([...carrito])
		})
	}
	const increase = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad +=1;
			}
			setCarrito([...carrito])
		})
	}

	const removeProducto = id =>{
		if(window.confirm("¿Quieres eliminar el producto?")){
			carrito.forEach((item, index)=>{
				if(item.id === id){
					item.cantidad = 1;
					carrito.splice(index, 1)
				}
			})
			setCarrito([...carrito])
		}
	}

  const show1 = menu ? "carritos show" : "carrito";
	const show2 = menu ? "carrito show" : "carrito";
	


  return (
    <div className={show1}>
      <div className={show2}>
        <div onClick={tooglefalse} className="carrito_close">
          <box-icon name="x"></box-icon>
        </div>
        <h2>Mi carrito</h2>
        <div className="carrito_center">
					{
					
					
					carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito Vacio</h2> :<>
					{
					carrito.map((producto) => (
            <div className="carrito_item" key={producto.id}>
              <img src={producto.image} alt={producto.title} />
              <div>
                <h3> {producto.title} </h3>
                <p className="price">${producto.price}</p>
              </div>
              <div>
								<box-icon 
									onClick={() => increase(producto.id)} name="up-arrow" 
									type="solid"
									/>
                <p className="cantidad">{producto.cantidad}</p>
								<box-icon 
									onClick={() => reduce(producto.id)} 
									name="down-arrow" 
									type="solid" 
									/>
              </div>
							<div 
							onClick={() => removeProducto(producto.id)} 
							className="remove_item"
							>
                <box-icon name="trash" />
              </div>
            </div>
					))
				};
					
					</>
					}
        </div>

        <div className="carrito_footer">
          <h3>Total: ${total}</h3>
          <button className="btn">Comprar</button>
        </div>
      </div>
    </div>
  );
};