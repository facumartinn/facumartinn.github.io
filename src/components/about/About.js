import React, {Component} from 'react'
import './About.css'
import Aboutme from './Aboutme'
import Image from './Image'


export default class About extends Component {
    render () {
    return (
        <div className='about-info'>
            <Image />
            <Aboutme />
        </div>
    )
}
}
