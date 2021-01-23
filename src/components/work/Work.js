import React, {Component} from 'react'
import Slider from './Workslider'
//import './Work.css'
import '../../style/app.css'

export default class Work extends Component {
    render () {
        
        return (
            <div className="overflow-hidden w-full h-auto">
                {/* <h1>My recent Work</h1>
                <p>Here are a few design projects I've worked on recently. Want to see more?</p> <a href="mailto:facumartinn@gmail.com">Email me.</a> */}
                <Slider />
            </div>
        )
    }
}