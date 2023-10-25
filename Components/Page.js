import React, {useEffect} from 'react';
import { gsap } from 'gsap';
import '../Style/Page.css';
export const Page= () => {

 const timeline= gsap.timeline();

  useEffect(()=>{
    const Titulo= document.querySelectorAll( ".Titulo");
    timeline.from(Titulo, {opacity:0, y: 50, duration:3, stagger:0})
  },[])


  return (
    <div className='Container'>
        <div className='Wrapper'>
            <div className='Info'>
  <div className='CenterInfo'>
    <h2 className='Titulo'>SUSCRIBITE A NUESTRO NEWSLETTER</h2>
    <h1 className='Titulo'> Enlace: </h1>
  <button>Get Started</button>
  </div>
 </div>
 <div className='Imagenes'>
 <div className='Colum1'>
<img src='../images/alexiaNegro.jpg'  alt=''img/>

 </div>
 <div className='Colum2'>
<img src='../images/alexiaAzul.jpg' alt=''img/>
 </div>
 </div>
</div>


    </div>
  )
}
