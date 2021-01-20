import React, { Component } from 'react'
import './Welcome.css'
import  {Spring} from 'react-spring/renderprops'
import Typewriter from 'typewriter-effect'
import Button from '../Button'


export default class Welcome extends Component {
    render() {
        return (
            <div className='welcome'>
                <Spring from={{ opacity: 0}} to={{opacity: 1}}>
                    {props => (
                        <div style={props}>
                            <h1 className="title">HE<br></br>LLO!</h1>
                        </div>
                    )}
                </Spring>
                
                <Typewriter  options={{delay: 25}} onInit={(typewriter =>  {
                    typewriter.typeString('my name is Facu.<br> Im Full Stack Developer, with a great sense of design. Blending simplicity with usability.<br>').start()             
                })}/>
                
                <Spring from={{ opacity: 0}} to={{opacity: 1}} config={{delay: 4000}}>
                    {props => (
                        <div style={props}>
                            <Button type='button'>Contact me</Button>
                        </div>
                    )}
                </Spring>
            </div>
)
    }
    
    }
