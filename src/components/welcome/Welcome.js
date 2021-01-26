import React, { Component } from 'react'
import '../../style/app.css'
//import './Welcome.css'
import  {Spring} from 'react-spring/renderprops'
import Button from '../Button'

const titleFrom = { width: 100,
                    padding: 0,
                    transform:'translate3d(800px,0,0) scale(2) rotateX(90deg)',
                    shape: 'M20,380 L380,380 L380,380 L200,20 L20,380 Z',
                    textShadow: '0px 5px 0px white'
                }

const titleTo = {width: 0,
                padding: 0,
                transform:'translate3d(0px,0,0) scale(1) rotateX(0deg)',
                shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
                textShadow: '0px 5px 15px rgba(255,255,255,0.5)'
            }

export default class Welcome extends Component {
    render() {
        return (
            <div className='overflow-hidden md:container md:mx-auto md:box-border mt-6 md:ml-10 flex flex-col '>
                <Spring from={{opacity:0}} to={{opacity:1}} config={{delay: 1400}}>
                    {props => (
                        <div style={props}>
                            <p className="font-sans text-base mx-12 sm:text-lg">Hi, my name is</p>
                        </div>
                    )}
                </Spring>
                
                <Spring from={titleFrom} 
                        to={titleTo}  
                        config={{delay: 1600}}>
                    {props => (
                        <div style={props}>
                            <h1 className="font-serif home-name leading-none mt-6 mx-12 text-6xl sm:text-7xl">Facundo Martin.</h1>
                        </div>
                    )}
                </Spring>

                
                <Spring from={{opacity:0}} to={{opacity:1}} config={{delay: 1800}}>
                    {props => (
                        <div style={props}>
                            <p className="font-sans mt-10 mx-12 text-base sm:text-lg">I'm a Full Stack Developer based in Buenos Aires, Arg., specializing in building websites with a high sense of design.<br /><br /></p>
                        </div>
                    )}
                </Spring>
                
                <Spring from={{ opacity: 0}} to={{opacity: 1}} config={{delay: 2000}}>
                    {props => (
                        <div className="mx-12" style={props}>
                           <a href="mailto:facumartinn@gmail.com"><Button className="font-sans" type='button'>Contact me</Button></a>
                        </div>
                    )}
                </Spring>
            </div>
)
    }
    
    }
