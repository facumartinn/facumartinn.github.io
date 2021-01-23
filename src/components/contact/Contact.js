import React, { Component } from 'react'
import '../../style/app.css'
import Button from '../Button'

export default class Contact extends Component {
    render () {
        return (
            <div className="w-full h-full mt-16 flex flex-col justify-center items-center">
                <div className="flex flex-col items-center p-10">
                    <h1 className="text-4xl font-black">Get in touch</h1>
                    <p className="w-50 text-lg mt-6 text-center">I'm currently looking for new opportunities to develop my skills as a Software Developer.<br /> My inbox is open, I'll get back to you.</p>
                </div>
                <div>
                    <a className="p-6" href="mailto:facumartinn@gmail.com" target="_blank" rel="noreferrer"><Button type='button'>Contact me</Button></a>
                </div>
                
                
            </div>
        )
    }
}
