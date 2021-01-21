import React, {Component} from 'react'
//import './About.css'
import '../../style/app.css'


export default class About extends Component {
    render () {
    return (
            <span className="about-img 
                            w-32 lg:w-80 md:w-64 sm:w-44 
                            mr-5">
                <img className="mr-5 
                                border-solid border-2 border-gray-900 
                                transition-all 
                                hover:translate-x-1.5 hover:-translate-y-1.5" 
                     src="./images/Facu.jpg" alt="profile" />
            </span>
    )
}
}
