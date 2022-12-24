import React from 'react';
import logo from '../images/logo3.png';
import adminshowcase from '../images/adminshowcase.png';
import { useState } from 'react';

const AdminAuth = () => {
  const [admindata, setAdminData] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setAdminData({ ...admindata, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(admindata);
    setAdminData('');
  };
  return (
    <>
      <section style={{ backgroundColor: '#9A616D' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={adminshowcase}
                      alt="login form"
                      className="img-fluid h-100"
                      style={{ borderRadius: '1rem 0 0 1rem' }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1 gap-2">
                          <img
                            style={{
                              overflow: 'hidden',
                              width: '100px',
                              height: '52px',
                              display: 'inline-block',
                              border: '1px solid white',
                            }}
                            className="px-2 bg-danger rounded"
                            src={logo}
                            alt="Logo"
                          />
                          <span className="h1 fw-bold mb-0">
                            The Pizza City
                          </span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: '1px' }}
                        >
                          Sign into Admin Dashbord
                        </h5>
                        <div className="form-outline mb-4">
                          <label className="form-label">
                            Email address
                          </label>
                          <input
                            required
                            name="email"
                            onChange={handleChange}
                            type="email"
                            className="form-control form-control-lg"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label">
                            Password
                          </label>
                          <input
                            onChange={handleChange}
                            required
                            name="password"
                            type="password"
                            className="form-control form-control-lg"
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block w-100"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminAuth;
