import wave2 from '../images/wave2.png'
import React from 'react'

export default function Footer() {
  return (
    <section id="footer">
  <img src={wave2} alt="" className="footer-img" />
  <div className="container">
    <div className="row">
      <div className="col-md-6 footer-box">
        <p><b>CONTACT US</b></p>
        <p><i className="fa fa-map-marker"></i>Maharashtra, Pune</p>
        <p><i className="fa fa-phone"></i>+91-1234567890</p>
        <p><i className="fa fa-envelope-o"></i>runtime.algorhythm@gmail.com</p>
      </div>

      <div className="col-md-6 footer-box">
        <p><b>SUBSCRIBE NEWSLETTER</b></p>
        <input type="email"className="form-control" placeholder="Your Email" />
        <button type="button" className="btn btn-primary">Subscribe</button>
      </div>
    </div>
    <hr/>
    <p className="copyright">Created by Runtime AlgoRhythm  | &#169; 2023-2024 All&nbsp;Right Reserved.</p>
  </div>

</section>
  )
}
