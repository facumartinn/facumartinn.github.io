import React, {Component} from 'react'
import Slider from "react-slick";
//import './Work.css'
import '../../style/app.css'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope)



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay: false,
      arrows: true,
      accessibility: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="overflow-hidden mt-20 sm:mt-24">
        <Slider {...settings}>
          <div className="w-1/2 fleximportant flex-col md:flex-row items-center justify-center">
            <div className="border-img">
              <img className="" src="./images/pickingapp1.png" alt="pickingapp" />
            </div>
            <div className="w-auto m-4 md:w-1/2 m-0 flex flex-col items-center justify-center">
              <h1 className="mb-4 sm:mb-6 text-2xl sm:text-5xl " >Picking App</h1>
              <p className="text-xs sm:text-sm text-center">Web app para armar pedidos en un depósito de mercadería de un supermercado online. TuAlmacen.com.ar es un supermercado online de la ciudad de mar del plata.</p>
              <ul className="w-auto mb-0 mt-0 tech-list no-underline list-none flex flex-wrap flex-row justify-center items-center text-2xl sm:text-4xl">
              <li className="p-4"><FontAwesomeIcon icon={["fab", "js-square"]}>Node.js</FontAwesomeIcon></li>
              <li className="p-4"><FontAwesomeIcon icon={["fab", "node"]}>Express.js</FontAwesomeIcon></li>
              <li className="p-4"><FontAwesomeIcon icon={["fab", "html5"]}>HTML5</FontAwesomeIcon></li>
              <li  className="p-4"><FontAwesomeIcon icon={["fab", "css3"]}>CSS3</FontAwesomeIcon></li>
            </ul> 
            <a href="https://tapickingapp.herokuapp.com/" target="_blank" rel="noreferrer"><Button>Visit the demo!</Button></a>
            </div>
          </div>
          <div className="">
            <h1>One Big Box</h1>
            <p>Development of an e-commerce using</p> 
             
          </div>
        </Slider>
      </div>
      
    );
  }
}