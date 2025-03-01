import React from 'react'
import TestimonialsUser from './Testimonials-user'
import "./Testimonials.css"

export default function Testimonials() {
  return (
    <div>
        <div className='Testimonials'>
            <h3 className="h6 section-name">Frequently Ask Question</h3>
            <h2 className="h3 section-title">Some of our frequently asked questions</h2>
            <div className='Testimonials__user-wrapper'>
                 <TestimonialsUser name="Ronald Richards" job="Google inc." img="../project-imgae/home-page-img/img/TestimonialsUser-img/user1.png"/>
                 <TestimonialsUser name="Guy Hawkins" job="Paypal inc." img="../project-imgae/home-page-img/img/TestimonialsUser-img/user2.png"/>
                 <TestimonialsUser name="Kristin Watson" job="Microsoft inc." img="../project-imgae/home-page-img/img/TestimonialsUser-img/user3.png"/>
                 <TestimonialsUser name="Robert Fox" job="Facebook inc." img="../project-imgae/home-page-img/img/TestimonialsUser-img/user4.png"/>
                 <TestimonialsUser name="Savannah Nguyen" job="Twitter inc." img="../project-imgae/home-page-img/img/TestimonialsUser-img/user5.png"/>
                 <TestimonialsUser name="Courtney Henry" job="Apple inc." img="../project-imgae/home-page-img/img/TestimonialsUser-img/user6.png"/>
            </div>
        </div> 
    </div>
  )
}
