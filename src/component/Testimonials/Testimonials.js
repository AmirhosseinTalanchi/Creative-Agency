
import TestimonialsUser from './Testimonials-user'
import "./Testimonials.css"

export default function Testimonials() {

  let userinfo = [
    {name:"Ronald Richards" ,job:"Google inc." ,img:"project-imgae/home-page-img/img/Testimonials section/user1.webp"},
    {name:"Guy Hawkins" ,job:"Paypal inc.", img:"project-imgae/home-page-img/img/Testimonials section/user2.webp"},
    {name:"Kristin Watson" ,job:"Microsoft inc." ,img:"project-imgae/home-page-img/img/Testimonials section/user3.webp"},
    {name:"Robert Fox" ,job:"Facebook inc." ,img:"project-imgae/home-page-img/img/Testimonials section/user4.webp"},
    {name:"Savannah Nguyen" ,job:"Twitter inc." ,img:"project-imgae/home-page-img/img/Testimonials section/user5.webp"},
    {name:"Courtney Henry" ,job:"Apple inc." ,img:"project-imgae/home-page-img/img/Testimonials section/user6.webp"}
]



  return (
    <div>
        <section className='Testimonials-section'>
          <div className='container'>
            <div className='Testimonials'>
                  <h3 className="h6 section-name">Testimonials</h3>
                  <h2 className="h3 section-title">Some testimonials from our customers</h2>
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
        </section>
    </div>
  )
}
