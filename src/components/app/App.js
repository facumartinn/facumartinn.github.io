import React, { Component } from 'react'
// import './App.css'
import '../../style/app.css'
import { BrowserRouter } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routes from '../Routes'
import Welcome from '../welcome/Welcome'
import About from '../about/About'
import Work from '../work/Work'
import Contact from '../contact/Contact'


class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
        
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