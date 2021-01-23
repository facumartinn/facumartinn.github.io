import React, {Component} from 'react'
//import './About.css'
import '../../style/app.css'

import Aboutme from './Aboutme'
import Image from './Image'


export default class About extends Component {
    render () {
    return (
        <div className='about-info 
                        md:box-border md:container md:mx-auto 
                        flex flex-col-reverse items-center sm:flex-row justify-center 
                        mt-10 sm:mt-10 mb-20'>
                            <Image />
                            <Aboutme />
            
        </div>
    )
}
}
