import React, { useState } from 'react'
import { MdPersonOutline } from "react-icons/md"
import { CiLock } from "react-icons/ci"
import { useRegisterMutation } from '../features/api/authApi';
import { Link, useNavigate } from 'react-router-dom';
// import { image1 } from "../assets/Images";

const Register = () => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [password_confirmation, setPasswordComfirmation] = useState("");
      const [register] = useRegisterMutation();
      const navigate = useNavigate();
      const registerHandler =async(e) => {
            e.preventDefault();
            const user = { name, email, password, password_confirmation };
            const { data } = await register(user);
            if(data?.success)navigate('/login')
            console.log(data);
      }
  return (
      <div className='grid grid-cols-2  flex justify-center h-screen items-center  '>
          <div className='col-span-1  '>
              <img src="https://images.unsplash.com/photo-1685703204758-c37561dff8d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
          </div>
          <div className='col-span-1 flex justify-center h-screen items-center'>
              <form onSubmit={registerHandler} action="" className='shadow-xl bg-white p-10 shadow-2xl' >
              <h1 className='text-center mb-5 font-semibold tracking-wider text-xl'>GET'S STARTED</h1>
                  <div className='mb-3 w-96'>
                      <label htmlFor="" className='text-gray-600 '>Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
                              <MdPersonOutline className='text-gray-400 text-xl'/>
                          </div>
                         
                                      <input
                                            value={name}
                                            onChange={(e)=>setName(e.target.value)}
                                            type="text" id="email-address-icon" className="bg-white border border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name" />
                        </div>
                  </div>
                   <div className='mb-3 w-96'>
                      <label htmlFor="" className='text-gray-600 '>Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
                              <MdPersonOutline className='text-gray-400 text-xl'/>
                        </div>
                                      <input
                                             value={email}
                                            onChange={(e)=>setEmail(e.target.value)}
                                            type="email" className="bg-white border border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                        </div>
                  </div>
                   <div className='mb-3 w-96'>
                      <label htmlFor="" className='text-gray-600 '>Password</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
                              <CiLock className='text-gray-400 text-xl'/>
                        </div>
                                      <input
                                             value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                            type="password" className="bg-white border border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" />
                        </div>
                  </div>
                   <div className='mb-3 w-96'>
                      <label htmlFor="" className='text-gray-600 '>Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
                              <CiLock className='text-gray-400 text-xl'/>
                        </div>
                                      <input
                                             value={password_confirmation}
                                            onChange={(e)=>setPasswordComfirmation(e.target.value)}
                                            type="password" className="bg-white border border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" />
                        </div>
                  </div>
                  <div className='text-center mb-3'>
                                <span>Already Have An Account?</span>
                                <Link to={'/login'} >
                                       <span className='text-primary text-semibold tracking-wide'>Login Here</span>
                                </Link>
                    
                  </div>
                  <button type='submit' className='bg-primary text-white w-96 py-2 rounded-lg '>Register </button>
              </form>
          </div>
    </div>
  )
}

export default Register