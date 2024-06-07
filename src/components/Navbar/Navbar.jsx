import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom'
import Monkey from '../Footer/Monkey'
const Navbar = () => {
    return (
      <>
      <nav className="fixed top-0 bg-gray-800 py-4 px-6 flex flex-row w-full justify-between z-10">
            <div className="flex flex-row items-center">
            <Monkey />
                <Link className="text-xl text-white mr-6 ml-2 hover:text-gray-500 active:scale-95" to="/">NewsMonkey</Link>
                <ul className="flex flex-row items-center">
                    <NavLink className={({ isActive }) => `text-base ${isActive?'text-gray-100 hover:text-gray-100':'text-gray-400 hover:text-gray-500'} 
                      active:scale-95 mr-3`} to="/">Home</NavLink>

                    <NavLink className={({ isActive }) => `text-base ${isActive?'text-gray-100 hover:text-gray-100':'text-gray-400 hover:text-gray-500'} 
                      active:scale-95 mr-3`} to="/business">Business</NavLink>

                    <NavLink className={({ isActive }) => `text-base ${isActive?'text-gray-100 hover:text-gray-100':'text-gray-400 hover:text-gray-500'} 
                      active:scale-95 mr-3`} to="/entertainment">Entertainment</NavLink>

                    <NavLink className={({ isActive }) => `text-base ${isActive?'text-gray-100 hover:text-gray-100':'text-gray-400 hover:text-gray-500'} 
                      active:scale-95 mr-3`} to="/health">Health</NavLink>

                    <NavLink className={({ isActive }) => `text-base ${isActive?'text-gray-100 hover:text-gray-100':'text-gray-400 hover:text-gray-500'} 
                      active:scale-95 mr-3`} to="/science">Science</NavLink>

                    <NavLink className={({ isActive }) => `text-base ${isActive?'text-gray-100 hover:text-gray-100':'text-gray-400 hover:text-gray-500'} 
                      active:scale-95 mr-3`} to="/sports">Sports</NavLink>

                    <NavLink className={({ isActive }) => `text-base ${isActive?'text-gray-100 hover:text-gray-100':'text-gray-400 hover:text-gray-500'} 
                      active:scale-95 mr-3`} to="/technology">Technology</NavLink>


                </ul>
            </div>
        </nav>
      </>
    )
}

export default Navbar