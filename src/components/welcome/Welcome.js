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
            <div className='overflow-hidden md:container md:mx-auto md:box-border mt-10 md:ml-10 flex flex-col '>
                <Spring from={titleFrom} 
                        to={titleTo}  
                        config={{delay: 1600}}>
                    {props => (
                        <div style={props}>
                            <h1 className="home-name ml-6 text-8xl ">HE<br/>LLO!<br /></h1>
                        </div>
                    )}
                </Spring>

                <Spring from={{opacity:0}} to={{opacity:1}} config={{delay: 1600}}>
                    {props => (
                        <div style={props}>
                            <p className="mt-5 ml-6 text-base sm:text-lg">  my name is Facu.</p>
                        </div>
                    )}
                </Spring>
                <Spring from={{opacity:0}} to={{opacity:1}} config={{delay: 1800}}>
                    {props => (
                        <div style={props}>
                            <p className="mt-5 ml-6 text-base sm:text-lg">I'm a Full Stack Developer, with a great sense of design. Blending simplicity with usability.<br /><br /></p>
                        </div>
                    )}
                </Spring>
                
                <Spring from={{ opacity: 0}} to={{opacity: 1}} config={{delay: 2000}}>
                    {props => (
                        <div className="ml-6" style={props}>
                            <Button type='button'>Contact me</Button>
                        </div>
                    )}
                </Spring>
            </div>
)
    }
    
    }
