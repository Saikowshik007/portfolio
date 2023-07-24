import React from "react";
import imageOverlay from "../Assets/home-bg.jpg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiTwotoneMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ background: "transparent"  }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send A Message</h5>
                      </div>
                      <div>
                        <form
                          action="https://formspree.io/xdoeonlo"
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Whether you want to get in touch, talk about a project
                          collaboration, or just say hi, I'd love to hear from
                          you.
                          <br />
                          Simply fill the from and send me an email.
                        </p>
                        {/* <!-- <ul class="list-ico">
                                <li><span class="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                                <li><span class="ion-ios-telephone"></span> (617) 557-0089</li>
                                <li><span class="ion-email"></span> contact@example.com</li>
                                </ul> --> */}
                      </div>
                    <ul className="home-about-social-links">
                                  <li className="social-icons">
                                    <a
                                      href="https://github.com/Saikowshik007"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="icon-colour  home-social-icons"
                                    >
                                      <AiFillGithub />
                                    </a>
                                  </li>

                                  <li className="social-icons">
                                    <a
                                      href="https://www.linkedin.com/in/sai-kowshik-ananthula-9b1816177/"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="icon-colour  home-social-icons"
                                    >
                                      <FaLinkedinIn />
                                    </a>
                                  </li>
                                  <li className="social-icons">
                                    <a
                                      href="https://instagram.com/sai_kowshik007?igshid=NGExMmI2YTkyZg=="
                                      target="_blank"
                                      rel="noreferrer"
                                      className="icon-colour home-social-icons"
                                    >
                                      <AiFillInstagram />
                                    </a>
                                  </li>
                                  <li className="social-icons">
                                    <a
                                      href="mailto: saianantula007@outlook.com"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="icon-colour home-social-icons"
                                    >
                                      <AiTwotoneMail />
                                    </a>
                                  </li>
                                </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;