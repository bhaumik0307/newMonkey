import React, { Component } from 'react'
import loading from '../../assets/loading.gif'
const Spinner = () => {
    return (
      <div className="flex justify-center items-center">
        <img className="w-10 h-10" src={loading} alt="loading" />
      </div>
    )
}

export default Spinner
