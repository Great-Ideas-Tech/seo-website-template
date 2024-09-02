import React from 'react'
import Banner from './components/Banner'

function contact() {
  return (
    <>
    <Banner heading='Contact Us' page='Contact'/>
    <div className="page-section">
  <div className="container">
    <div className="row text-center align-items-center">
      <div className="col-lg-4 py-3">
        <div className="display-4 text-center text-primary">
          <span className="mai-pin" />
        </div>
        <p className="mb-3 font-weight-medium text-lg">Address</p>
        <p className="mb-0 text-secondary">
          203 Fake St. Mountain View, San Francisco, California, USA
        </p>
      </div>
      <div className="col-lg-4 py-3">
        <div className="display-4 text-center text-primary">
          <span className="mai-call" />
        </div>
        <p className="mb-3 font-weight-medium text-lg">Phone</p>
        <p className="mb-0">
          <a href="#" className="text-secondary">
            +1 232 3235 324
          </a>
        </p>
        <p className="mb-0">
          <a href="#" className="text-secondary">
            +00 1122 3344 5566
          </a>
        </p>
      </div>
      <div className="col-lg-4 py-3">
        <div className="display-4 text-center text-primary">
          <span className="mai-mail" />
        </div>
        <p className="mb-3 font-weight-medium text-lg">Email Address</p>
        <p className="mb-0">
          <a href="#" className="text-secondary">
            support@seogram.com
          </a>
        </p>
        <p className="mb-0">
          <a href="#" className="text-secondary">
            hello@seogram.com
          </a>
        </p>
      </div>
    </div>
  </div>
  <div className="container-fluid mt-4">
    <div className="row">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <form action="#" className="contact-form py-5 px-lg-5">
          <h2 className="mb-4 font-weight-medium text-secondary">
            Get in touch
          </h2>
          <div className="row form-group">
            <div className="col-md-6 mb-3 mb-md-0">
              <label className="text-black" htmlFor="fname">
                First Name
              </label>
              <input type="text" id="fname" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="text-black" htmlFor="lname">
                Last Name
              </label>
              <input type="text" id="lname" className="form-control" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label className="text-black" htmlFor="email">
                Email
              </label>
              <input type="email" id="email" className="form-control" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label className="text-black" htmlFor="subject">
                Subject
              </label>
              <input type="text" id="subject" className="form-control" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label className="text-black" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={5}
                className="form-control"
                placeholder="Write your notes or questions here..."
                defaultValue={""}
              />
            </div>
          </div>
          <div className="row form-group mt-4">
            <div className="col-md-12">
              <input
                type="submit"
                defaultValue="Send Message"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-6 px-0">
        <div className="maps-container">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14558.10013227571!2d72.4229299!3d24.1883848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ceb33c359af53%3A0xf8ab971338096c1e!2sGreat%20Ideas%20Tech!5e0!3m2!1sen!2sin!4v1725259003277!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default contact