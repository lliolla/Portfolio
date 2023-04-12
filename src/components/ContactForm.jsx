import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();//get all input's values
  const apiKey = import.meta.env.VITE_API_ID;
  const sendEmail = (e) => {
    e.preventDefault();//comportement par defaut est charge une nouvelle page
  const formMsge =document.querySelector(".formMessage")

    emailjs.sendForm('service_idkx70k', 
    'template_0p4dzsb', 
    form.current, 
    apiKey
    )
      .then((result) => {
      
          form.current.reset();
          formMsge.innerHTML="<p className='success'> Message envoyé</p>"

          setTimeout(()=>{
            formMsge.innerHTML=""
          },2000)
        form
      }, (error) => {
   
          formMsge.innerHTML="<p className='error'> Veuillez réessayer , une ereure est survenue</p>"
          setTimeout(()=>{
            formMsge.innerHTML=""
        
          },2000)
      });
  };

  return (
    <div className='form-container' >
        <h2>Contactez moi</h2>
    <form ref={form} onSubmit={sendEmail} className="form-content" >
      <label>Nom</label>
      <input type="text" name="name" required autoComplete='off'id="name" />
      <label>Email</label>
      <input type="email" name="email" required autoComplete='off' id="email" />
      <label>Message</label>
      <textarea name="message"  id="mess"/>
      <input type="submit" value="Envoyer" className='hover button' />
      <div className="formMessage"></div>
    </form>
      </div>
  );
};
export default ContactForm;