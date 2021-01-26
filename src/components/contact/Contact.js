import React, { Component } from 'react'
import '../../style/app.css'
import  {Spring} from 'react-spring/renderprops'
import Button from '../Button'

export default class Contact extends Component {
    render () {
        return (
            <div className="w-full h-full mt-16 flex flex-col justify-center items-center">
                <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 500}}>
                        {props => (
                            <div className="flex flex-col items-center p-6" style={props}>
                                <h1 className="font-serif text-4xl sm:text-5xl font-black">Get in touch</h1> 
                            </div>
                        )}
                </Spring>
                <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 600}}>
                        {props => (
                            <div style={props}>
                                <p className="font-sans w-50 text-sm mb-6 sm:text-lg text-center">I'm currently looking for new opportunities to develop my skills as a Software Developer.<br /> My inbox is open, I'll get back to you.</p>                                    
                            </div>
                        )}
                </Spring>  
                <Spring from={{opacity: 0, x:100}} to={{opacity:1, x:0}} config={{delay: 600}}>
                        {props => (
                            <div style={props}>
                                <a className="font-sans p-6" href="mailto:facumartinn@gmail.com" target="_blank" rel="noreferrer"><Button type='button'>Contact me</Button></a>
                            </div>
                        )}
                </Spring>
                
            </div>
        )
    }
}
