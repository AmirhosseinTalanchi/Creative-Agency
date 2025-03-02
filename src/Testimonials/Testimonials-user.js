import React from 'react'
import "./Testimonials-user.css"


export default function TestimonialsUser({name,job,img}) {
  return (
    <div>
        <div className='Testimonials__user'>
            <img src={img} className='Testimonials__user-img'/>
            <h4 className='Testimonials__user-name h5'>{name}</h4>
            <div className='Testimonials__user-job menu'>{job}</div>
            <p className='Testimonials__user-caption body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <svg className='Testimonials__user-star'>
                <use href='#star'></use>
            </svg>
        </div>
    </div>
  )
}
