import './App.css';
import React from "react";
import { Carousel, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "holderjs";

import home from './home.jpg';

function ControlledCarousel() {
    return (
        <Carousel prevLabel="" nextLabel="">
        <Carousel.Item interval={14000} className = "carousel-inner">
            <Image
            className="h-25"
            src={home}
            alt="About Us"
            responsive/>
            <Carousel.Caption>
            <h3><b className="border-text-y">About Us</b></h3>             
            <p>
              <b className="border-text">
                4sTek is a boutique systems integrator firm founded by highly experienced individuals who are passionate about providing custom solutions using industry standard technologies and componenets
              </b>
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={14000} className = "carousel-inner">
            <Image
            className="h-25"
            src={home}
            alt="What we do"
            respnsive/>
            <Carousel.Caption>
            <h3><b className="border-text-y">Our Philosophy</b></h3> 
            <p>
              <b className="border-text">
                The company is founded on the principle that while clients have unique needs that require custom solutions - they can be built using standard components in a cloud native and largely vendor agnostic fashion
              </b>
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={14000} className = "carousel-inner">
            <Image
            className="h-25"
            src={home}
            alt="Contact Us"
            responsive/>
            <Carousel.Caption>
            <h3><b className="border-text-y">Get in touch</b></h3> 
            <p>
              <b className="border-text">
                We believe in referals based organic growth.  If you are being pitched a behemoth of a solution with high vendor lock-ins, we will be happy to <a  className="border-text-y" href="mailto:info@4sTek.com?Subject=Need a second opinion">provide a second opinion</a>.
              </b>
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
  }
  
export default ControlledCarousel;
