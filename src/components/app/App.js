import React, { Component } from 'react'
// import './App.css'
import '../../style/app.css'
import { BrowserRouter } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routes from '../Routes'



class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App overflow-hidden">
        
            <Header>

            </Header>
            <div className="Center">
                
                <Routes />

                <Footer />
            </div>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;