import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import EskilMP4 from "./../assest/EskilMP4.mp4";
import smStar from "./../assest/smStar.png";
import SMChair from "./../assest/SMChair.jpg";
import brand1 from "./../assest/brand1.png";
import brand2 from "./../assest/brand2.png";
import brand3 from "./../assest/brand3.png";
import brand4 from "./../assest/brand4.png";
import brand5 from "./../assest/brand5.png";
import brand6 from "./../assest/brand6.png";

class HomeComp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row header_content">
          <div className="col-4">
            <div className="sitetitle">
              <div className="head">
                <h1>
                  FURNITURE & <br /> DÉCOR
                </h1>
                <p>
                  Made from premium non-stretch Japanese denim for a
                  vintage-inspired look, the ’90s Cheeky Jean has an easy
                  straight leg.
                </p>
              </div>
              <div className="read_more">
                <Link to="/about">Learn More</Link>
              </div>
              <div className="quick_access">
                <ul>
                  <li>
                    <Link to="/cart">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      chair
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>home
                      decor
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      tabels
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                      lighting
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-5 p-0 vid_entire">
            <div className="sm-caption">
              <div className="caption">
                <p>10% discount for registered users</p>
              </div>
              <img src={smStar} alt="star" />
            </div>
            <video loop muted autoPlay playsInline src={EskilMP4} />
          </div>
          <div className="col-3  p-0 ">
            <div className="last_container d-flex flex-column">
              <img src={SMChair} alt="chair" />
              <p>
                The perfect place for every contemporary furniture store and
                manufacture. This is Eskil
              </p>
            </div>
          </div>
        </div>
        <div className="row brands_wrap">
          <div className="brands">
            <div>
              <img src={brand1} alt="brand1" />
            </div>
            <div>
              <img src={brand2} alt="brand2" />
            </div>
            <div>
              <img src={brand5} alt="brand5" />
            </div>
            <div>
              <img src={brand6} alt="brand6" />
            </div>
            <div>
              <img src={brand3} alt="brand3" />
            </div>
            <div>
              <img src={brand4} alt="brand4" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComp;