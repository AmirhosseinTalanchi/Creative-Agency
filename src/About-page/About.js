import React from "react";
import { useState, useEffect } from "react";
import Header from '../component/Header/Header';
import Svgs from '../component/svgs-comp/svgs';
import WorkingSpace from '../component/Working-space/Working-space';
import Footer from '../component/Footer/Footer';
import GreatTeamUSer from '../component/Great-team-users/Great-team-user';
import './About.css';

const About = () => {


  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);
    
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
    
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };


  let greatTeamUsers = [
    {name: "Darlene Robertson", job:"Product Designer", img:"project-imgae/About-page-img/Great-team-img/img1.png"},
    {name: "Kristin Watson", job:"Graphic Designer", img:"project-imgae/About-page-img/Great-team-img/img2.png"},
    {name: "Ronald Richards", job:"Networking Engineer", img:"project-imgae/About-page-img/Great-team-img/img3.png"},
    {name: "Guy Hawkins", job:"Marketing Manager", img:"project-imgae/About-page-img/Great-team-img/img4.png"},
    {name: "Annette Black", job:"Software Engineer", img:"project-imgae/About-page-img/Great-team-img/img5.png"},
    {name: "Marvin McKinney", job:"President of Sales", img:"project-imgae/About-page-img/Great-team-img/img6.png"},
    {name: "Wade Warren", job:"UI/UX Designer", img:"project-imgae/About-page-img/Great-team-img/img7.png"},
    {name: "Theresa Webb", job:"Visual Designer", img:"project-imgae/About-page-img/Great-team-img/img8.png"},
    {name: "Floyd Miles", job:"Project Manager", img:"project-imgae/About-page-img/Great-team-img/img9.png"},
    {name: "Kathryn Murphy", job:"Front End Developer", img:"project-imgae/About-page-img/Great-team-img/img10.png"},
    {name: "Eleanor Pena", job:"Techical Support Specialist", img:"project-imgae/About-page-img/Great-team-img/img11.png"},
    {name: "Arlene McCoy", job:"Product Designer", img:"project-imgae/About-page-img/Great-team-img/img12.png"},
  ]

  return (

    <div>
       {/* App Svgs */}
          <Svgs></Svgs>

       {/* //App Header */}
          <Header  theme={theme} toggleTheme={toggleTheme} >
          </Header>

       {/* //App main */}

          <main>
             {/* main-top */}
           <section>
              <div className="container">
                <div className="About-main-top">
                  <div className="About-main-top__box">
                      <h2 className="About-main-top__title h2">Get to know more about us</h2>
                      <p className="About-main-top__caption body">We are an agency engaged in the creative industry and business, we are ready to help you to improve your business performance together with our great team</p>
                  </div>  
                </div>              
              </div>
           </section>

           {/* Great-team */}

           <section>
              <div className="container">
                <div className="Great-team">
                  <h3 className="section-name h6">Our Great Team</h3>
                  <h2 className="section-title h3">Meet our professional team who will help you</h2>
                  <div className="Great-team__info-wrapper"> 
                      <GreatTeamUSer {...greatTeamUsers[0]} />
                      <GreatTeamUSer {...greatTeamUsers[1]} />
                      <GreatTeamUSer {...greatTeamUsers[2]} />
                      <GreatTeamUSer {...greatTeamUsers[3]} />
                      <GreatTeamUSer {...greatTeamUsers[4]} />
                      <GreatTeamUSer {...greatTeamUsers[5]} />
                      <GreatTeamUSer {...greatTeamUsers[6]} />
                      <GreatTeamUSer {...greatTeamUsers[7]} />
                      <GreatTeamUSer {...greatTeamUsers[8]} />
                      <GreatTeamUSer {...greatTeamUsers[9]} />
                      <GreatTeamUSer {...greatTeamUsers[10]} />
                      <GreatTeamUSer {...greatTeamUsers[11]} />
                  </div>
                </div>
              </div>
           </section>

             {/* Moment */}

             <section>
                <div className="container">
                    <div className="moment">
                      <h3 className="section-name h6">Our Moment</h3>
                      <h2 className="section-title h3">Our togetherness in working in the office</h2>
                      <div className="moment__img-wrapper">
                          <img src="project-imgae/About-page-img/moment-img/img1.png"/>
                          <img src="project-imgae/About-page-img/moment-img/img2.png"/>
                          <img src="project-imgae/About-page-img/moment-img/img3.png"/>
                          <img src="project-imgae/About-page-img/moment-img/img4.png" className="moment__img1"/>
                          <img src="project-imgae/About-page-img/moment-img/img5.png" className="moment__img3"/>
                          <img src="project-imgae/About-page-img/moment-img/img6.png" className="moment__img2"/>
                          <img src="project-imgae/About-page-img/moment-img/img7.png"/>
                          <img src="project-imgae/About-page-img/moment-img/img8.png"/>
                          <img src="project-imgae/About-page-img/moment-img/img9.png"/>
                          <img src="project-imgae/About-page-img/moment-img/img10.png" className="moment__img1"/>
                          <img src="project-imgae/About-page-img/moment-img/img11.png" className="moment__img3"/>
                          <img src="project-imgae/About-page-img/moment-img/img12.png" className="moment__img2"/>
                      </div>
                    </div>
                </div>
             </section>

             {/* section Working space */}
             
             <WorkingSpace></WorkingSpace>

          </main>

          {/*  App Footer */}

             <Footer></Footer>


           

    </div>
  );
};

export default About;
