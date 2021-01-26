import React, {Component} from 'react'
import Slider from "react-slick";
//import './Work.css'
import '../../style/app.css'
import Button from '../Button'
import  {Spring} from 'react-spring/renderprops'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope)



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      arrows: true,
      accessibility: true,
      autoplaySpeed: 6000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="overflow-hidden mt-6">
        <Slider {...settings}>

          <div className="w-1/2 fleximportant flex-col md:flex-row items-center justify-center">
          <Spring from={{opacity:0}} to={{opacity:1}} config={{delay: 0}}>
                  {props => (
                      <div className="border-img horizontal-img" style={props}>
                          <img className="" src="./images/pickingapp1.png" alt="pickingapp" />
                      </div>
                  )}
          </Spring>

          <Spring from={{opacity:0}} to={{opacity:1}} config={{delay: 500}}>
                  {props => (
                      <div className="w-auto m-4 md:w-1/2 m-0 flex flex-col items-center justify-center" style={props}>
                          <h1 className="font-serif mb-4 sm:mb-6 text-3xl sm:text-5xl font-black" >Picking App</h1>
                          <p className="font-sans text-xs text-center sm:text-sm text-center">Development of an internal picking web app for an online supermarket used with a barcode scanner. TuAlmacen.com.ar is an online supermarket based in Mar del plata, Arg. I've used other technologies for this project, such as MySQL and Express.JS</p>
                          <ul className="w-auto mb-0 mt-0 tech-list no-underline list-none flex flex-wrap flex-row justify-center items-center text-2xl sm:text-4xl">
                              <li className="p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "js-square"]}>Node.js</FontAwesomeIcon></li>
                              <li className="p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "node"]}>Express.js</FontAwesomeIcon></li>
                              <li className="p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "html5"]}>HTML5</FontAwesomeIcon></li>
                              <li  className="p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "css3"]}>CSS3</FontAwesomeIcon></li>
                          </ul> 
                          <a href="https://tapickingapp.herokuapp.com/" target="_blank" className="font-sans" rel="noreferrer"><Button>Visit the demo!</Button></a>
                    </div>
                  )}
          </Spring>  
            
          </div>
          <div className="w-1/2 fleximportant flex-col-reverse md:flex-row items-center justify-center">
            

            <div className="w-auto m-4 md:w-1/2 m-0 flex flex-col items-center justify-center">
              <h1 className="font-serif mb-4 sm:mb-6 text-3xl sm:text-5xl font-black" >One Big Box</h1>
              <p className="font-sans text-xs sm:text-sm text-center">E-commerce site, developed as the final project of the Full Stack Development Bootcamp at Digital House. </p>
              <ul className="w-auto mb-0 mt-0 tech-list no-underline list-none flex flex-wrap flex-row justify-center items-center text-2xl sm:text-4xl">
              <li className="p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "js-square"]}>Node.js</FontAwesomeIcon></li>
              <li className="p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "node"]}>Express.js</FontAwesomeIcon></li>
              <li className="p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "html5"]}>HTML5</FontAwesomeIcon></li>
              <li  className="p-4"><FontAwesomeIcon className="hvr-grow" icon={["fab", "css3"]}>CSS3</FontAwesomeIcon></li>
            </ul>
            <div className="w-2/3 border-img">
              <img className="" src="./images/Onebigbox.png" alt="pickingapp" />
            </div>
            </div>
          </div>
        </Slider>
      </div>
      
    );
  }
}