import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Headphones</span>
          <span>Earbuds</span>
          <span>Smart Watch</span>
          <span>Wireless Speakers</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            An effective About Us page will make visitors want to engage with
            your brand and stay updated which means this is the perfect place
            to plug your social media profiles. Whether you want to embed your
            Instagram feed directly on the page, or simply include a CTA that
            says “Follow Us On Twitter,” you should definitely take advantage of
            your About Us page as an opportunity to attract a larger following
            across platforms.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Office No.5, Laravel Society-12,Shalan Nagar,Buke
            Road,Kharsundi,Bengluru-51275, India.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Myshoppingkart</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/PaymentImg.png" alt="" />
        </div>
      </div>
      <div className="socialIcons">
        <span className="icons">
          <FacebookIcon />
        </span>
        <span className="icons">
          <InstagramIcon />
        </span>
        <span className="icons">
          <TwitterIcon />
        </span>
        <span className="icons">
          <LinkedInIcon />
        </span>
      </div>
    </div>
  );
};

export default Footer;
