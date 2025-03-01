import React from 'react'
import "./Testimonials-user.css"


export default function TestimonialsUser(props) {
  return (
    <div>
        <div className='Testimonials__user'>
            <img src={props.img} className='Testimonials__user-img'/>
            <h4 className='Testimonials__user-name h5'>{props.name}</h4>
            <div className='Testimonials__user-job menu'>{props.job}</div>
            <p className='Testimonials__user-caption body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <svg className='Testimonials__user-star'>
                <use href='#star'></use>
            </svg>
        </div>
    </div>
  )
}
