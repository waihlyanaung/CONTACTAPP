import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ContactTable from '../components/ContactTable'

const Dashboard = () => {
  
  return (
    <div>
      <Navbar />
      <div className='flex justify-around'>
        <Sidebar/>
        <ContactTable/>

        </div>
        
    </div>
  )
}

export default Dashboard