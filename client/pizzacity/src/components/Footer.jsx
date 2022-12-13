import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

import { FaFacebook } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { SlCallIn } from 'react-icons/sl';
import { CgMail } from 'react-icons/cg';

export default function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white w-100">
      {/* Social Meadia Icons */}
      <section className="mb-4 pt-4 d-flex gap-4 align-items-center justify-content-center">
        <div
          className="border rounded p-2 hover-class"
          onClick={() =>
            (window.location.href =
              'https://www.facebook.com/people/%E0%A4%AA%E0%A4%BF%E0%A4%9D%E0%A5%8D%E0%A4%9D%E0%A4%BE-%E0%A4%B8%E0%A4%BF%E0%A4%9F%E0%A5%80/100045314523636/')
          }
        >
          <FaFacebook size={'20px'} />
        </div>
        <div className="border rounded p-2 hover-class">
          <AiFillTwitterCircle size={'20px'} />
        </div>
        <div
          className="border rounded p-2 hover-class"
          onClick={() =>
            (window.location.href =
              'https://www.instagram.com/invites/contact/?i=18u01cgz910fw&utm_content=q68skao')
          }
        >
          <BsInstagram size={'20px'} />
        </div>
        <div
          onClick={() => {
            window.location.href = 'mailto:Pizzacitycafe@gmail.com';
          }}
          className="border rounded p-2 hover-class"
        >
          <SiGmail size={'20px'} />
        </div>
      </section>

      {/* Map or Addreess */}
      <section>
        <div>
          <iframe
            className="w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6537523448706!2d76.78996231490389!3d19.25391618698605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd019b7c8ec96f1%3A0xa9dd05c70da44c72!2sPizza%20city%20pizzeria%20%26%20cafe!5e0!3m2!1sen!2sin!4v1670440689752!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* CopyRight */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2022 Copyright :
        <a
          className="text-white text-decoration-none"
          href="https://thepizzacity.com"
        >
          <em>{' ' + 'thepizzacity.com'}</em>
        </a>
        <p>
          Developed by Nitin Kadam{' '}
          <span>
            <a href="tel:+917249597070">
              <SlCallIn size={'20px'} className="m-2" />
            </a>
          </span>
          <span>
            <a href="mailto:nitinakadam1999@gmail.com">
              <SiGmail size={'20px'} className="m-2" color="red" />
            </a>
          </span>
        </p>
      </div>
    </MDBFooter>
  );
}
