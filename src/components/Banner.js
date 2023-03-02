import wave1 from '../images/wave1.png'
import homeimg from '../images/home2.png'

import React from 'react'


export default function Banner() {
  return (
    <section id="banner">
  <div className="container">
    
    <div className="row">
      <div className="col-md-6">
        <h1 className='company-name'>Runtime&nbsp;AlgoRhythm</h1>
        <p className='description'>Set your Algo-Rhythm with Us <br/>At Runtime AlgoRhythm, We believe in delivering Crisp, Curated, Precise and Accurate content, catering Technical Domains and Tech Roles. We provide highly efficient- and a user friendly material for a quick brush-up, or giving a bird's eye view for freshers to the content..</p>
        <button className='btn btn-primary'><a href="#about-us">Learn More</a></button>
      </div>

      <div className="col-md-6 text-center">
        <img src={homeimg} className="img-fluid"  alt='imghome'/>
      </div>
    </div>
  </div>
  <img src={wave1} className="bottom-img" la alt='wave1 img' />
</section>
  )
}
