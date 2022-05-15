import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';


const ContactDetail = ({icon, name, value, link}) => (
  <article className="contact__option">
    {icon}
    <h4>{name}</h4>
    <h5>{value}</h5>
    <a href={link} target='_blank'>Send a message</a>
  </article>
);

const Contact = () => {
  const form = useRef();

  // Client need to have account in emailJS to work
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'USER_ID')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });

    e.target.reset();
  };

  return (
    <section id='contact' className='pt-5'>
      <h5 className='pt-5'>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options d-flex flex-column gap-2">
          <ContactDetail icon={<HiOutlineMail className='contact__option-icon' />} name='Email' value='jingwentee525@gmail.com'
            link='mailto:jingwentee525@gmail.com' />
          <ContactDetail icon={<RiMessengerLine className='contact__option-icon' />} name='Messenger' value='Jing Wen Tee'
            link='https://m.me/100003647412430/' />
          <ContactDetail icon={<BsWhatsapp className='contact__option-icon' />} name='WhatsApp' value='+6012-345 6789'
            link='https://wa.me/60166021415/' /> 
            {/* https://wa.me/<number> */}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <a href='mailto:jingwentee525@gmail.com' className='btn btn-primary'>Send Message</a>
        </form>
      </div>
    </section>
  )
}

export default Contact