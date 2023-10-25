import React from "react";
import {Route, Routes} from "react-router-dom";
import Inicio  from "../Inicio";
import { ProductosLista } from "./indexProductos";

 export const Paginas = () => {

    return(
   <>

<Routes>
   <Route Path="/" element={<Inicio></Inicio>}/>
   <Route Path="/productos" element={ProductosLista}/>
   
   </Routes>
   </>

    )
}

export default Paginas;