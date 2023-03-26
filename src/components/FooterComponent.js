import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faMailBulk,
  faMailReply,
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGooglePlus,
  faMailchimp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default class FooterComponent extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 offset-1 col-sm-2">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/aboutUs">About Us</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/contactUs">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-7 col-sm-5">
              <h5>Our Address</h5>
              <address>
                121, Clear Water Bay Road
                <br />
                Clear Water Bay, Kowloon
                <br />
                HONG KONG
                <br />
                <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
                <br />
                <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
                <br />
                <i className="fa fa-envelope fa-lg"></i>:
                <a href="mailto:confusion@food.net">confusion@food.net</a>
              </address>
            </div>
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://google.com/+"
                >
                  <FontAwesomeIcon icon={faGooglePlus} size="2x" />
                </a>
                <a
                  className="btn btn-social-icon btn-facebook"
                  href="http://www.facebook.com/profile.php?id="
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a
                  className="btn btn-social-icon btn-linkedin"
                  href="http://www.linkedin.com/in/"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  className="btn btn-social-icon btn-twitter"
                  href="http://twitter.com/"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://youtube.com/"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a className="btn btn-social-icon btn-google" href="mailto:">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>© Copyright 2023 Ristorante Con Fusion-Robel</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
