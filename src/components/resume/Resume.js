import React, { Component } from 'react'
import './Resume.css'


export default class Resume extends Component {
    componentDidMount() {
        if(typeof window.orientation !== "undefined"){
            document.getElementById('enlaceDescargarPdf').click();
            window.close();
        }
    }

    render() {
        return (
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                <object
                data={require('./resume.pdf')}
                type="application/pdf"
                width="100%"
                height="100%"
                >
                </object>
            </div>
        )
    }    
}
