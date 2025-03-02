import React from 'react'
import TestimonialsUser from './Testimonials-user'
import "./Testimonials.css"

export default function Testimonials() {

  let userinfo = [
    {name:"Ronald Richards" ,job:"Google inc." ,img:"../project-imgae/home-page-img/img/TestimonialsUser-img/user1.png"},
    {name:"Guy Hawkins" ,job:"Paypal inc.", img:"../project-imgae/home-page-img/img/TestimonialsUser-img/user2.png"},
    {name:"Kristin Watson" ,job:"Microsoft inc." ,img:"../project-imgae/home-page-img/img/TestimonialsUser-img/user3.png"},
    {name:"Robert Fox" ,job:"Facebook inc." ,img:"../project-imgae/home-page-img/img/TestimonialsUser-img/user4.png"},
    {name:"Savannah Nguyen" ,job:"Twitter inc." ,img:"../project-imgae/home-page-img/img/TestimonialsUser-img/user5.png"},
    {name:"Courtney Henry" ,job:"Apple inc." ,img:"../project-imgae/home-page-img/img/TestimonialsUser-img/user6.png"}
]



  return (
    <div>
        <div className='Testimonials'>
            <h3 className="h6 section-name">Frequently Ask Question</h3>
            <h2 className="h3 section-title">Some of our frequently asked questions</h2>
            <div className='Testimonials__user-wrapper'>
                 <TestimonialsUser {...userinfo[0]} />
                 <TestimonialsUser {...userinfo[1]}/>
                 <TestimonialsUser {...userinfo[2]}/>
                 <TestimonialsUser {...userinfo[3]}/>
                 <TestimonialsUser {...userinfo[4]}/>
                 <TestimonialsUser {...userinfo[5]}/>
            </div>
        </div> 
    </div>
  )
}
