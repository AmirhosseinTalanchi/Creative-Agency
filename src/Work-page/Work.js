import React from "react";
import { useState, useEffect } from "react";
import Header from '../component/Header/Header';
import Svgs from '../component/svgs-comp/svgs';
import GreatCustomers from '../component/Great-customers/Great-customers';
import Testimonials from '../component/Testimonials/Testimonials';
import Footer from '../component/Footer/Footer';
import "./Work.css"
import LastProjectBox1, {LastProjectBox2} from '../component/last-project-box/last-project-box';

const Work = () => {


  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);
    
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
    
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  let LastProjectBoxInfo =[
    {title:"M’Course" ,caption:"Online learning application course" ,img:"project-imgae/work-page-img/img/last-project-img/image1.png" ,color:"#4C40F7" ,shadowcolor:"rgba(23, 13, 166, 0.5)"},
    {title:"BurgerQ" ,caption:"Applications for buying and selling fast food online" ,img1:"project-imgae/work-page-img/img/last-project-img/image2.png" ,img2:"project-imgae/work-page-img/img/last-project-img/image3.png" ,color:"#FFCC00"},
    {title:"POPcorn" ,caption:"Online marketplace for buying and selling popcorn" ,img:"project-imgae/work-page-img/img/last-project-img/image4.png" ,color:"#FF2D59" ,shadowcolor:"rgba(161, 16, 46, 0.5)"},
    {title:"CoffeeJoy" ,caption:"Application for buying and selling coffee online" ,img1:"project-imgae/work-page-img/img/last-project-img/image5.png" ,img2:"project-imgae/work-page-img/img/last-project-img/image6.png" ,color:"#007BFF"},
    {title:"Alpaca" ,caption:"Fundraising and caring for alpacas" ,img:"project-imgae/work-page-img/img/last-project-img/image7.png" ,color:"var(--last-pro-box)" ,shadowcolor:"var(--last-pro-box-shadow)"},
    {title:"Shopipiy" ,caption:"Online marketplace to sell and buy clothes" ,img1:"project-imgae/work-page-img/img/last-project-img/image8.png" ,img2:"project-imgae/work-page-img/img/last-project-img/image9.png" ,color:"#5CC8FC"}
  ]

  return (

    <div>
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
                  <div className="work-main-top">
                    <h2 className="work-main-top__title h2">Check out some of our amazing projects!</h2>
                    <img className="work-main-top__img" src="project-imgae/work-page-img/img/main-top-img.png"/>
                  </div>
                </div>
            </section>

             {/* section Great Customer */}
             <GreatCustomers></GreatCustomers>

             {/* section last project */}
              <section>
                <div className="container">
                  <div className="last-pro">
                    <h3 className="h6 section-name">Our Latest Project</h3>
                    <h2 className="h3 section-title">This is the last variety of projects we have worked on</h2>
                    <div className="last-pro-box-wrapper">
                      <LastProjectBox1 {...LastProjectBoxInfo[0]}/>
                      <LastProjectBox2 {...LastProjectBoxInfo[1]}/>
                      <LastProjectBox1 {...LastProjectBoxInfo[2]}/>
                      <LastProjectBox2 {...LastProjectBoxInfo[3]}/>
                      <LastProjectBox1 {...LastProjectBoxInfo[4]}/>
                      <LastProjectBox2 {...LastProjectBoxInfo[5]}/>
                    </div>
                  </div>
                </div>
              </section>

            {/* section Testimonials */}
             <Testimonials></Testimonials>
        </main>

          {/*  App Footer */}
          <Footer></Footer>
    </div>
  );
};

export default Work;
