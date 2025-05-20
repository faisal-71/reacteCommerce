import React from 'react';

const Contact = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
      <div className="col-md-12 bg-secondary text-center mt-5 px-5 py-5">
          <h2 className="bg-warning text-secondary mt-5">Get in Touch</h2 >
          <p>We're here to help and answer any question you might have. We look forward to hearing from you!</p>
          <h4>📧 Email: <span className="text-warning">customerservices@fyndo.in</span> </h4>
          <h4 className='text-dark'><i className="bi bi-telephone-fill text-white"></i> Call: <span className='text-warning'>+91 97471 23455</span> </h4>
          <h3 className="pt-3">🏢 Address:</h3>
          <h5>Kuttaloor, Vengara, Malappuram, India</h5>
      </div>
      </div>
    </div>
  );
};

export default Contact;
