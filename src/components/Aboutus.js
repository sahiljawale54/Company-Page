import networkimg from '../images/network.png'
import React from 'react'


export default function Aboutus() {
  return (
    <section id="about-us">
  <div className="container">
    <h1 className="title text-center"> Why Choose Us?</h1>
    <div className="row">
      <div className="col-md-6 about-us">
        <p className="about-title">Why we're differnt</p>
        <ul>
          <li>We Provide Crisp- To The Point Content. We Value Your Precious Time !</li>
          <li>We Provide Highly Curated Content For Technical Interviews.</li>
          <li>Accuracy To The Point. Updated,accurate Content.</li>
        </ul>
      </div>
      <div className="col-md-6">
        <img src={networkimg} className="img-fluid" alt='newtork' />
      </div>
    </div>
  </div>
</section>

  )
}
