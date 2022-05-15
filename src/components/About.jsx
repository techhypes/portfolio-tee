import React from 'react'
import me from '../assets/me-about.jpeg'
import { FaAward } from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi'


const About = () => {
  return (
    <section id='about' className='pt-5'>
      <h5 className='pt-5'>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container">
        <div className="row">

        <div className="about__me col-7 mb-5 col-lg-4 mb-lg-0 px-0">
          <div className="about__me-img">
            <img src={me} alt="About Image" />
          </div>
        </div>

        <div className="about__content col-11 col-lg-6 offset-lg-2 d-flex flex-column justify-content-center text-center text-md-start">
          
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Tutor</h5>
              <small>Freelance Tutor</small>
            </article>

            <article className="about__card">
              <HiLightBulb className='about__icon' />
              <h5>Academic</h5>
              <small>SPM 9A's</small>
            </article>

          </div>

          {/* <p>
            Passionate in web development. Interested in collabing internationally. 
            I can build a website for you, just drop me a DM, I won't eat you.
            I'm also a blockchain enthusiast, so if you've got a web3 idea, hit me up.
          </p> */}
          
          <a href="#contact" className='btn btn-primary mt-5'>Let's Talk</a>

        </div>
        
        </div>
      </div>
    </section>
  )
}

export default About