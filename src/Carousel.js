import './App.css';
import React, { useEffect, useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "holderjs";

function ControlledCarousel() {
    return (
        <Carousel prevLabel="" nextLabel="">
        <Carousel.Item interval={14000}>
            <img
            className="d-block w-100"
            src="holder.js/800x400?bg=453B39&text=About Us \n \n"
            alt="About Us"
            />
            <Carousel.Caption>
            {/* <h3>Who is 4sTek</h3> */}
            4sTek is a boutique systems integrator firm founded by highly experienced individuals who are passionate about providing custom solutions using industry standard technologies and componenets
            </Carousel.Caption>
            {/* <BottomRight src={logo} style={{position: "absolute", bottom: 0, right: 0}}/> */}
        </Carousel.Item>
        <Carousel.Item interval={14000}>
            <img
            className="d-block w-100"
            src="holder.js/800x400?bg=453B39&text=Our Philosophy \n \n"
            alt="What we do"
            />
            <Carousel.Caption>
            {/* <h3>Custom solutions - Standard components</h3> */}
            <p>The company is founded on the principle that while clients have unique needs that require custom solutions - they can be built using standard components in a cloud native and largely vendor agnostic fashion. </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={14000}>
            <img
            className="d-block w-100"
            src="holder.js/800x400?bg=453B39&text=Get In Touch \n \n"
            alt="Contact Us"
            />
            <Carousel.Caption>
            {/* <h3>Get in touch</h3> */}
            <p>We are a company that believe in referals based organic growth.  If you are being pitched a vendor locked-in behemoth of a solution, we will be happy to <a href="mailto:info@4sTek.com?Subject=Need a second opinion">provide a second opinion</a>.  </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
  }
  
export default ControlledCarousel;
