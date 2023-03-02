import facebooklogo from '../images/facebook-icon.png'
import twitterlogo from '../images/twitter-icon.png'
import instagramlogo from '../images/instagram-icon.png'
import whatsapplogo from '../images/whatsapp-icon.png'
import linkedinlogo from '../images/linkedin-icon.png'
import snapchatlogo from '../images/snapchat-icon.png'


import React from 'react'

export default function Socialmedia() {
  return (
    <section id="social-media">
  <div className="container text-center">
    <p>FIND US ON SOCIAL MEDIA</p>
    <div className="social-icons">
      <a href="#"><img src={facebooklogo} alt="facebook" /></a>
      <a href="#"><img src={instagramlogo} alt="insta" /></a>
      <a href="#"><img src={twitterlogo} alt="twitter" /></a>
      <a href="#"><img src={whatsapplogo} alt="whastapp" /></a>
      <a href="#"><img src={linkedinlogo} alt="linkedin" /></a>
      <a href="#"><img src={snapchatlogo} alt="snapchat" /></a>
    </div>
  </div>
</section>
  )
}
