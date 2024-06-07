import React, { Component } from 'react'

const NewsItem = (props) => {
  
    const {title, description, image, url, author, date, sourceName} = props
    return (
      <div className="relative border border-solid border-black w-96 min-h-96 m-7
      flex flex-col">
          <span className="absolute top-2 right-2 text-white text-bold bg-red-600 rounded-lg text-xs p-1">{sourceName}</span>
          
          <img 
            src={image} 
            alt="image" 
            className = "w-full h-52"

            />

        <div className="w-full px-1 h-60 flex flex-col pb-1">
          <h5 className="text-xl text-bold">{title}</h5>
          <p className="text-lg flex-grow">{description}</p>
          <p className="text-sm text-gray-400 pb-1">By {author?author:"Unknown"} 
          on {new Date(date).toGMTString()}</p>
          <a 
            href={url} 
            target='blank'
            className='text-lg py-1 px-5 bg-gray-800 text-white rounded 
            hover:text-gray-400 active:scale-95 w-32'
            >Read More</a>
        </div>
      </div>
    )
  }

export default NewsItem
