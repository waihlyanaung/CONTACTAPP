import React, { useState } from 'react'
import { MdPersonOutline } from "react-icons/md"
import { CiLock } from "react-icons/ci"
import { useLoginMutation } from '../features/api/authApi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/services/authSlice';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const { data } = await login(user);
    dispatch(addUser({
      user: data?.user,
      token: data?.token
    }))

    if (data?.success) nav('/');
    console.log(data);
  }
  return (
    <div className='grid grid-cols-2  '>
      <div className='col-span-1 bg-red-300 '>
        {/* <img src="https://images.unsplash.com/photo-1685703206477-aa1df00a1f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60" alt="" /> */}
      </div>
      <div className='col-span-1  flex justify-center h-screen items-center'>
        <form onSubmit={loginHandler} action="" className=' bg-white p-10 shadow-xl' >
          <h1 className='text-center mb-5 font-semibold tracking-wider text-xl'>LOG IN</h1>

          <div className='mb-4 w-96'>
            <label htmlFor="" className='text-gray-600 '>Email</label>
            <div className="relative mt-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                <MdPersonOutline className='text-gray-400 text-xl' />
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" className="bg-white border shadow-lg text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
            </div>
          </div>
          <div className='mb-5 w-96'>
            <label htmlFor="" className='text-gray-600 '>Password</label>
            <div className="relative mt-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
                <CiLock className='text-gray-400 text-xl' />
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" className="bg-white border shadow-lg text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" />
            </div>
          </div>

          <div className='text-center mb-5'>
            <span>Don't you have an account?</span>
            <Link to={'/register'}>
              <span className='text-primary text-semibold tracking-wide '>Register Here</span>
            </Link>

          </div>
          <button className='bg-primary text-white w-96 py-2 shadow-lg  '>Login </button>
        </form>
      </div>
    </div>
  )
}

export default Login