import React from 'react'
import { Route, Routes} from "react-router-dom"
 import Hero from '../pages/Hero'
const Mainroutes = () => {
  return (
    <Routes>
<Route path='/' element={<Hero />} />
    </Routes>
  )
}

export default Mainroutes