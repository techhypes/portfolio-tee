import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { GrInstagram, GrGithub, GrYoutube } from 'react-icons/gr'

const Footer = () => {
  return (
    <footer className='py-5 text-center'>
      <a href="#" className='footer__logo'>TEE</a>

      <ul className="d-flex flex-wrap flex-column flex-sm-row justify-content-center gap-3 gap-sm-5 mt-0 mx-auto mb-5 ps-0">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials d-flex justify-content-center gap-3 mb-5">
        <a href="https://www.facebook.com/T.jingwen525/" target='_blank'><FaFacebook /></a>
        <a href="https://www.instagram.com/tjingwen__/" target='_blank'><GrInstagram /></a>
      </div>

      <div className="footer__copyright mb-3 mb-sm-5">
        <small>&copy; Tee Jing Wen. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer