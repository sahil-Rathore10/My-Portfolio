import React from 'react'
import Nav from './component/Nav'
import Mainroutes from './Routes/Mainroutes'

const App = () => {
  return (
     <div className="py-6 px-10 w-screen h-screen overflow-x-hidden bg-white">
    <Nav />
    <Mainroutes />
    </div>
  )
}

export default App