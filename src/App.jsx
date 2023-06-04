import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      {/* <div className="px-6 py-1 hover:bg-primary hover:text-white transition-all duration-200 rounded-full border-2 border-primary w-96 text-center uppercase tracking-wider font-semibold  text-primary">Login</div> */}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      </div>
  )
}

export default App