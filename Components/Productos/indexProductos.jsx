import React,{useContext} from "react";
import { DataContext } from "../Context/DataProvider";
import ProductosItem  from "./ProductosItem";


export const ProductosLista = () => {

const value = useContext(DataContext)
const [productos] = value.productos

console.log(productos)

  return (
    <div>
      <h1 className="title"> PRODUCTOS</h1>
      <div className="productos">
      {productos.map((producto) =>(
          <ProductosItem 
          key= {producto.id}
          id={producto.id}
          title={producto.title}
          price={producto.price}
          image={producto.image}
          category={producto.category}
          cantidad={producto.cantidad}
          />
        ))
      }
      </div>
    </div>
  );
};
