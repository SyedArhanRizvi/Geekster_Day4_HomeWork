import React from 'react'
import './Card.css'
export default function Card({img, mimg, mname, reltime, duration, type, title}) {
  return (
    <div className='cardStyle'>
      <div className='c1'>
        <div className='movie'>
            <div className="img"><img src={mimg} className='h-full w-full' alt="" /></div>
            <div className="details">
                <h1 className='font-bold text-3xl'>{mname}</h1>
                <p className='font-light text-cyan-600 mb-2'>{reltime}</p>
                <span className='border border-gray-300 p-1 font-light rounded-md mr-2'>{duration}</span><span className='font-thin'>{type}</span>
            </div>
            <div className="title">{title}</div>
        </div>
        <div className='about'>
            <div className="h-5 w-5"></div>
            <div className="h-5 w-5 bg-white"></div>
            <div className="h-5 w-5 bg-white"></div>
        </div>
      </div>
      <div className='c2'><img src={img} alt="" /></div>
    </div>
  )
}
