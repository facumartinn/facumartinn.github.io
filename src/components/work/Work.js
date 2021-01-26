import React, {Component} from 'react'
import Slider from './Workslider'

import '../../style/app.css'

export default class Work extends Component {
    render () {
        
        return (
            <div className="overflow-hidden w-full h-auto">
                <Slider />
            </div>
        )
    }
}