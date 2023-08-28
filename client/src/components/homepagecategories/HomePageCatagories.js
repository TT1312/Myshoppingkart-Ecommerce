import React from "react";
import "./HomePageCatagories.css";
import { Link } from "react-router-dom";

import headphones from '../../assets/headphones.jpg'
import smartWatch from '../../assets/smartWatch.jpg'
import Speakers from '../../assets/speakers.jpg'
import earbuds2 from '../../assets/earbuds2.jpg'


const HomePageCatagories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <Link className="link" to="/Category/6" style={{ textDecoration: "none" }}>
            <button>
              Sale
            </button>
          </Link>

        </div>
        <div className="row">
          <img
            src={headphones}
            alt=""
          />

          <Link to="/Category/2" className="link" style={{ textDecoration: "none" }}>
            <button>
              Headphones
            </button>

          </Link>

        </div>
      </div>
      <div className="col">
        <div className="row">

          <img
            src={Speakers}
            alt=""
          />

          <Link to="/Category/4" className="link" style={{ textDecoration: "none" }}>
            <button>
              Wireless Speakers
            </button>
          </Link>

        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src={smartWatch}
                alt=""
              />

              <Link to="/Category/5" className="link" style={{ textDecoration: "none" }}>
                <button>Smart Watch</button>
              </Link>

            </div>
          </div>
          <div className="col">
            <div className="row">

              <img
                src={earbuds2}
                alt=""
              />

              <Link to="/Category/3" className="link" style={{ textDecoration: "none" }}>
                <button>Earbuds</button>
              </Link>

            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />

          <Link to="/Category/7" className="link" style={{ textDecoration: "none" }}>
            <button>New Season</button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default HomePageCatagories;