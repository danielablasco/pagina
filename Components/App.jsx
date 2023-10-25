import React from 'react';
import {BrowserRouter } from "react-router-dom";
import { Header } from './Header/IndexHeader';
//import { ProductosLista } from './Productos/indexProductos';
import 'boxicons';
import ParaCarousel from './Carousel/IndexCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Paginas} from "./Productos/Paginas";
import Footer from './Footer/Footer';
import { ProductosLista } from './Productos/indexProductos';
import { DataProvider } from './Context/DataProvider';
import {Carrito}  from './Carrito/Carrito';
import { Page } from './Page';

function App() {
  return (
    <DataProvider>
   <div className='App'>
    <BrowserRouter>
    <Header></Header>
    <Carrito></Carrito>
    <ParaCarousel></ParaCarousel>
    <ProductosLista></ProductosLista>
    <Paginas></Paginas>
    <Page></Page>
    <Footer></Footer>
    </BrowserRouter>
   </div>
   </DataProvider>
  );
}

export default App;
