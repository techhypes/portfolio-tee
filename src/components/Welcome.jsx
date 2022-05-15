import React from 'react'
import me from '../assets/me.png'
import { BsInstagram, BsFacebook } from 'react-icons/bs'

const Welcome = () => {
  return (
  <section className="welcome pt-5 overflow-hidden">
        <div className="container pt-5 text-center h-100 position-relative">
            <h5 className='pt-4'>Hello, I'm</h5>
            <h1>Tee Jing Wen</h1>
            <h5 className="text-lighter">Psychologist</h5>

            {/* CTA */}
            <div className="mt-4 d-flex justify-content-center">
              <a href="#contact" className='btn btn-primary mx-2'>Let's Talk</a>
            </div>

            {/* Socials */}
            <div className="welcome__socials d-none d-sm-flex flex-column align-items-center">
              <a href="https://www.instagram.com/tjingwen__/" target="_blank"><BsInstagram /></a>
              <a href="https://www.facebook.com/T.jingwen525/" target="_blank"><BsFacebook /></a>
            </div>

            <div className="me mt-5 overflow-hidden">
              <img src={me} alt="me" />
            </div>

            <a href="#contact" className='scroll__down d-none d-sm-block'>Scroll Down</a>
        </div>
    </section>
  )
}

export default Welcome