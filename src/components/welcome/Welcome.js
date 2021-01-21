import React, { Component } from 'react'
import '../../style/app.css'
//import './Welcome.css'
import  {Spring} from 'react-spring/renderprops'
import Button from '../Button'


export default class Welcome extends Component {
    render() {
        return (
            <div className='md:container md:mx-auto md:box-border mt-40 flex flex-col '>
                <Spring from={{ opacity: 0}} to={{opacity: 1}} config={{delay: 1000}}>
                    {props => (
                        <div style={props}>
                            <h1 className="home-name ml-10">HE<br/>LLO!<br /></h1>
                        </div>
                    )}
                </Spring>

                <Spring from={{ opacity: 0}} to={{opacity: 1}} config={{delay: 2000}}>
                    {props => (
                        <div style={props}>
                            <p className="mt-5 ml-10">my name is Facu.<br /> Im Full Stack Developer, with a great sense of design. Blending simplicity with usability.<br /><br /></p>
                        </div>
                    )}
                </Spring>
                
                <Spring from={{ opacity: 0}} to={{opacity: 1}} config={{delay: 3000}}>
                    {props => (
                        <div className="ml-10" style={props}>
                            <Button type='button'>Contact me</Button>
                        </div>
                    )}
                </Spring>
            </div>
)
    }
    
    }
