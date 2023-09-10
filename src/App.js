import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'

function App() {

  let component;
  switch(window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/contact":
      component = <Contact />
      break
    case "/projects":
      component = <Projects />
      break
  }
  return (
  
    <div>
      <Navbar />
      {component}     
     
    </div>
  )
}

export default App