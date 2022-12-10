import React from 'react';
import pizzacityFront from '../images/pizzacityFront.jpg';
import pizzcityInside from '../images/pizzacityInside.jpg';
import ownerimg from '../images/ownerimg.jpg';

const AboutUs = () => {
  return (
    <div className="container">
      {/* Heading */}
      <h1 className="text-center m-5">
        <strong>About US</strong>
      </h1>

      {/* ShowCase founder and para */}
      <div className="d-lg-flex w-100 m-auto p-5 gap-5">
        <div>
          <p
            className="text-justify font-weight-light"
            style={{ fontSize: '1.3rem' }}
          >
            Hi, I'm ankush balatkar, started this cafe 11-09-2019 with
            the pure intuition of spreading yummy smiles and quality
            food as pleasure. Quality and varieties of pizza is our
            speciality. And glad to know that it becomes very popular
            in short period of time in town. Hygiene is our main goal,
            to taking care of our beloved customers, and that bond
            make us unique from others. Our staff is too kind humble
            providing services at their best. Customer reviews makes
            us ultra energetic for showering love and kind off offers
            for them. This journey is quite struggling, but achieving
            something that we desire , we satisfied and we loved. My
            brother Avinash balatakr handles everything as co founder.
            We want to see the heights of success in this cafe journey
            with spreading love smiles and happiness. Hope all you are
            happy for cafe's existence to making ur special memories
            with your dear ones. Be a part of cafe's family.... Be
            happy, eat happy, make your tummy smiles😁
          </p>
        </div>
        <div>
          <img
            src={ownerimg}
            alt="owner"
            style={{ width: '18rem' }}
            className="border border-light"
          />
        </div>
      </div>

      {/* Cafe IMages */}
      <div className="d-lg-flex flex-md-column flex-lg-row flex-sm-column align-items-center justify-content-between gap-2 m-5">
        <div>
          <h2>Outside View</h2>
          <img
            src={pizzacityFront}
            alt="front"
            className="w-100 rounded"
          />
        </div>
        <div>
          <h2>Inside view</h2>
          <img
            src={pizzcityInside}
            alt="front"
            className="w-100 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
