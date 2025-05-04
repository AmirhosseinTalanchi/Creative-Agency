import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from '../component/Header/Header';
import WorkingSpace from '../component/Working-space/Working-space';
import GreatCustomers from '../component/Great-customers/Great-customers';
import Testimonials from '../component/Testimonials/Testimonials';
import {Footer} from '../component/Footer/Footer';
import Svgs from '../component/svgs-comp/svgs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const SliderComponent = () => {
    useEffect(() => {
      const swiper = new Swiper(".swiper-container", {
        modules: [Navigation, Pagination, Autoplay],
        navigation: {
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        },
      });
    }, [])};
const testimonials = [
    {
        text: "We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.",
        name: "Mark Garfield",
        position: "CEO & Head of Product",
    },
    {
        text: "Our team works tirelessly to ensure client success and satisfaction.",
        name: "Jane Doe",
        position: "Head of Customer Relations",
    },
    {
        text: "Quality and commitment define our work culture and service delivery.",
        name: "John Smith",
        position: "Operations Manager",
    }
];


function Home() {

    const storedTheme = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(storedTheme);
    
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }, [theme]);
    
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
      };
    
  return (
    <div className="Home">
 
        {/* App Svgs */}
        <Svgs></Svgs>

       {/* //App Header */}
        <Header  theme={theme} toggleTheme={toggleTheme} >
        </Header>

        {/*  App Main */}
        <main>
          {/* section main-top */}
            <section>
              <div className="container">
                  <div className="main-top">
                      <div className="main-top__left">
                          <h1 className="main-top__title h2">
                              Make your business <span className="main-top__title-line">more powerful</span><br className="br" /> 
                              with us
                          </h1>
                          <p className="main-top__caption body">We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.</p>
                          <Link to="/contact-us" className="main-top__btn btn table-button">
                                 Get Started
                                 <svg>
                                      <use href="#arrow-right"></use>
                                 </svg>
                          </Link>                          
                      </div>
                      <div className="main-top__right">
                         <img className='main-top__right-img' src="project-imgae/home-page-img/img/main-top-img.png"/>
                      </div>
                  </div>
              </div>
            </section>

          {/* section Services */}
            <section>
                <div className="container">
                    <div className="services">
                        <h3 className="section-name h6">Our Services</h3>
                        <h2 className="section-title h3">The various services we provide to make your business more powerful</h2>
                        <div className="services__box-wrapper">
                            <div className="services__box">
                                <div className="services__box-icon-wrapper services__box-icon-wrapper--color1">
                                    <svg className="services__box-icon">
                                        <use href="#flame"></use>
                                    </svg>
                                </div>
                                <h4 className="services__box-title h6">Ideate</h4>
                                <p className="services__box-caption body">We help you develop creative ideas so that your business can grow more rapidly</p>
                                <div className="arrow-btn-wrapper">
                                    <svg className="arrow-btn">
                                        <use href="#arrow-right"></use>
                                    </svg>
                                </div>                            
                            </div>
                            <div className="services__box">
                                <div className="services__box-icon-wrapper services__box-icon-wrapper--color2 ">
                                    <svg className="services__box-icon">
                                        <use href="#pen"></use>
                                    </svg>
                                </div>
                                <h4 className="services__box-title h6">Design</h4>
                                <p className="services__box-caption body">We provide services with the best designs than our designer team for your business</p>
                                <div className="arrow-btn-wrapper">
                                    <svg className="arrow-btn">
                                        <use href="#arrow-right"></use>
                                    </svg>
                                </div>                            
                            </div>
                            <div className="services__box">
                                <div className="services__box-icon-wrapper services__box-icon-wrapper--color3">
                                    <svg className="services__box-icon">
                                        <use href="#dekstop"></use>
                                    </svg>
                                </div>
                                <h4 className="services__box-title h6">Web Development</h4>
                                <p className="services__box-caption body">We help develop company websites to be more professional and attractive</p>
                                <div className="arrow-btn-wrapper">
                                    <svg className="arrow-btn">
                                        <use href="#arrow-right"></use>
                                    </svg>
                                </div>                            
                            </div>
                            <div className="services__box">
                                <div className="services__box-icon-wrapper services__box-icon-wrapper--color4">
                                    <svg className="services__box-icon">
                                        <use href="#mobile"></use>
                                    </svg>
                                </div>
                                <h4 className="services__box-title h6">App Development</h4>
                                <p className="services__box-caption body">We help develop company mobile apps to be more professional and attractive</p>
                                <div className="arrow-btn-wrapper">
                                    <svg className="arrow-btn">
                                        <use href="#arrow-right"></use>
                                    </svg>
                                </div>                            
                            </div>
                            <div className="services__box">
                                <div className="services__box-icon-wrapper services__box-icon-wrapper--color5">
                                    <svg className="services__box-icon">
                                        <use href="#Building"></use>
                                    </svg>
                                </div>
                                <h4 className="services__box-title h6">Business Growth</h4>
                                <p className="services__box-caption body">We also provide services by providing input for your business growth</p>
                                <div className="arrow-btn-wrapper">
                                    <svg className="arrow-btn">
                                        <use href="#arrow-right"></use>
                                    </svg>
                                </div>                            
                            </div>
                            <div className="services__box">
                                <div className="services__box-icon-wrapper services__box-icon-wrapper--color6">
                                    <svg className="services__box-icon">
                                        <use href="#Chart"></use>
                                    </svg>
                                </div>
                                <h4 className="services__box-title h6">Digital marketing</h4>
                                <p className="services__box-caption body">We also help you market your products through an online marketplace</p>
                                <div className="arrow-btn-wrapper">
                                    <svg className="arrow-btn">
                                        <use href="#arrow-right"></use>
                                    </svg>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          {/* section Documentation */}
            <section className="section-Documentation1">
              <div className="container">
                  <div className="Documentation">
                      <h3 className="section-name h6">Our Documentation</h3>
                      <h2 className="section-title h3 Documentation__title">See what our profile is like and how we work for your business</h2>
                      <img className="Documentation__img" src="project-imgae/home-page-img/img/Documentation section/Group 10088.webp"/>
                  </div>
              </div>

              <img className="Documentation__left-shape" src="project-imgae/home-page-img/img/Documentation section/vector2.png"/>
              <img className="Documentation__right-shape" src="project-imgae/home-page-img/img/Documentation section/Shape 3.png"/>

            </section>
            <section className="section-Documentation2"> 
              <div className="container">
                  <div className="Documentation-b">
                      <div className="Documentation-b__left">
                          <div className="Documentation-b__box-wrapper1">
                              <div className="Documentation-b__boxs Documentation-b__boxs-mt">
                                  <span className="Documentation-b__boxs-number Documentation-b__boxs-number-blue h2">70K+</span>
                                  <span className="Documentation-b__boxs-text body">We have more than customers</span>
                              </div>
                              <div className="Documentation-b__boxs Documentation-b__boxs-pb">
                                  <span className="Documentation-b__boxs-number Documentation-b__boxs-number-red h2">10M+</span>
                                  <span className="Documentation-b__boxs-text body">People who are helped because of our hard work</span>
                              </div>
                          </div>
                          <div className="Documentation-b__box-wrapper2">
                              <div className="Documentation-b__boxs Documentation-b__boxs-mt">
                                  <span className="Documentation-b__boxs-number Documentation-b__boxs-number-orange h2">100+</span>
                                  <span className="Documentation-b__boxs-text body">Projects we have
                                      completed</span>
                              </div>
                              <div className="Documentation-b__boxs">
                                  <span className="Documentation-b__boxs-number Documentation-b__boxs-number-green h2">200+</span>
                                  <span className="Documentation-b__boxs-text body">Support from world-renowned companies</span>
                              </div>
                          </div>
                      </div>
                      <div className="Documentation-b__right">
                          <h3 className="h2 Documentation-b__title"> 
                              Customer satisfaction is our first priority
                          </h3>
                          <div className="body Documentation-b__caption">
                              We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies. Their satisfaction is our pleasure. We strive to provide the best service by:
                          </div>
                          <ul className="Documentation-b__menu">
                              <li className="Documentation-b__manu-items body">
                                  <span className="Documentation-b__manu-items-icon">
                                      <svg className="tik">
                                          <use href="#tik"></use>
                                      </svg>
                                  </span>
                                  Provide idea support from our creative team
                              </li>
                              <li className="Documentation-b__manu-items body">
                                  <span className="Documentation-b__manu-items-icon">
                                      <svg className="tik">
                                          <use href="#tik"></use>
                                      </svg>
                                  </span>
                                  Provide attractive and professional design services
                              </li>
                              <li className="Documentation-b__manu-items body">
                                  <span className="Documentation-b__manu-items-icon">
                                      <svg className="tik">
                                          <use href="#tik"></use>
                                      </svg>
                                  </span>
                                  Support for service 24 hours a week
                              </li>
                              <li className="Documentation-b__manu-items body">
                                  <span className="Documentation-b__manu-items-icon">
                                      <svg className="tik">
                                          <use href="#tik"></use>
                                      </svg>
                                  </span>
                                  Helping our customers to grow their business
                              </li>
                              <li className="Documentation-b__manu-items body">
                                  <span className="Documentation-b__manu-items-icon">
                                      <svg className="tik">
                                          <use href="#tik"></use>
                                      </svg>
                                  </span>
                                  Provide support to market products through online marketplace
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
            </section>

          {/* section Working space */}
            <WorkingSpace></WorkingSpace>

          {/* section Great Customer */}
            <GreatCustomers></GreatCustomers>
            <section className="Great-Customers2-section">
                <div className="container">
                    <Swiper 
                        modules={[Navigation, Pagination, Autoplay]} 
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        pagination={{ clickable: true }} 
                        loop = {true}
                        // autoplay={{ delay: 5000 }}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="Great-Customers2">
                                    <img src="project-imgae/home-page-img/img/Path 113.png" className="Great-Customers2__logo" alt="Logo" />
                                    <h4 className="Great-Customers__text Quote">{item.text}</h4>
                                    <span className="Great-Customers__caption h6">{item.name}</span>
                                    <span className="Great-Customers__caption h6">{item.position}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className="custom-prev">
                        <svg className="svgs">
                            <use href="#arrow-right"></use>
                        </svg>
                    </button>
                    <button className="custom-next">
                        <svg className="svgs">
                            <use href="#arrow-right"></use>
                        </svg>
                    </button>
                </div>
            </section>

          {/* section Question */}
            <section className="question-section">
                <div className="container">
                    <div className="question">
                        <h3 className="h6 section-name">Frequently Ask Question</h3>
                        <h2 className="h3 section-title">Some of our frequently asked questions</h2>
                        <div className="question__content-wrapper">
                            <details name="question" className="question__box">
                                <summary className="question__text menu">
                                    <h4 className="question__text-wraapper">What are the services provided to customers?</h4>
                                    <svg className="question__arrow"> 
                                        <use href="#arrow "></use>
                                    </svg>
                                </summary>
                                <p className="question__caption body2">Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.</p>
                            </details>
                            <details name="question" className="question__box">
                                <summary className="question__text menu">
                                    <h4 className="question__text-wrapper">How can I submit a proposal for cooperation?</h4>
                                    <svg className="question__arrow"> 
                                        <use href="#arrow "></use>
                                    </svg>
                                </summary>
                                <p className="question__caption body2">Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.</p>
                            </details>
                            <details name="question" className="question__box">
                                <summary className="question__text menu">
                                    <h4 className="question__text-wraapper">I come from a faraway place, can collaboration be done full time online through several meeting applications?</h4>
                                    <svg className="question__arrow"> 
                                        <use href="#arrow "></use>
                                    </svg>
                                </summary>
                                <p className="question__caption body2">Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.</p>
                            </details>
                            <details name="question" className="question__box">
                                <summary className="question__text menu">
                                    <h4 className="question__text-wrapper">How do I get the payment complete?</h4>
                                    <svg className="question__arrow"> 
                                        <use href="#arrow "></use>
                                    </svg>
                                </summary>
                                <p className="question__caption body2">Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.</p>
                            </details>
                            <details name="question" className="question__box">
                                <summary className="question__text menu">
                                    <h4 className="question__text-wrapper">How long can the collaboration last?</h4>
                                    <svg className="question__arrow"> 
                                        <use href="#arrow "></use>
                                    </svg>
                                </summary>
                                <p className="question__caption body2">Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.</p>
                            </details>
                        </div>
                    </div>
                </div>
                <img src="project-imgae/home-page-img/img/question section/questoin section right shape.png" className="question__right-shape"/>
                <img src="project-imgae/home-page-img/img/question section/question section left shape.webp" className="question__left-shape"/>
            </section>        

          {/* section Testimonials */}
            <Testimonials></Testimonials>
        
        </main>

         {/*  App Footer */}
         <Footer></Footer>

        
        
    </div>
  );
}

export default Home;
