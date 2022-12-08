import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

import { FaFacebook } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillGoogleCircle,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white ">
      <section className="mb-4 pt-4 d-flex gap-4 align-items-center justify-content-center">
        <div className="border rounded p-2 hover-class">
          <FaFacebook size={'20px'} />
        </div>
        <div className="border rounded p-2 hover-class">
          <AiFillTwitterCircle size={'20px'} />
        </div>
        <div className="border rounded p-2 hover-class">
          <BsInstagram size={'20px'} />
        </div>
        <div className="border rounded p-2 hover-class">
          <AiFillGoogleCircle size={'20px'} />
        </div>
      </section>

      <section>
        <div>
          <iframe
            className="w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6537523448706!2d76.78996231490389!3d19.25391618698605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd019b7c8ec96f1%3A0xa9dd05c70da44c72!2sPizza%20city%20pizzeria%20%26%20cafe!5e0!3m2!1sen!2sin!4v1670440689752!5m2!1sen!2sin"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2022 Copyright :
        <a
          className="text-white text-decoration-none"
          href="https://pizzacitypbn.com/"
        >
          <em>{' ' + 'pizzacitypbn.com'}</em>
        </a>
      </div>
    </MDBFooter>
  );
}
