import React from "react";
import Left from "../../../../assets/images/MainLogoLeft.svg";
import { FaArrowRight } from "react-icons/fa";
import { RiInstagramFill, RiTelegram2Fill } from "react-icons/ri";
import { MdPhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
const VisitRestaurant = () => {
  return (
    <div id="visitRestaurant">
      <div className="container">
        <div className="visitRestaurant">
          <div className="visitRestaurant--block">
            <div className="visitRestaurant--block__left">
              <div className="visitRestaurant--block__left--title">
                <img src={Left} alt="img" />
                <h3>Visit Restaurant</h3>
              </div>
              <h1>Join Us for Happy Hours</h1>
              <div className="visitRestaurant--block__left--text">
                <h3>Your neighborhood</h3>
                <p>225$.Lake Ave.Suite 1150 Pasadena,CA 911101</p>
              </div>
              <div className="visitRestaurant--block__left--text">
                <h3>Opening hours:</h3>
                <p>
                  Mon-Thu: 10:00 am - 01:00 am <br />
                  Fri-Sun: 10:00 am - 02:00 am
                </p>
              </div>
              <div className="visitRestaurant--block__left--btn">
                <hr />
                <button>
                  Purchase gift card <FaArrowRight />
                </button>
                <hr />
              </div>
            </div>
            <div className="visitRestaurant--block__right">
              <h2>contact Info</h2>
              <a href="#">
                <MdPhoneInTalk />
                <span>+771219900</span>
              </a>
              <a href="#">
                <TfiEmail />
                <span>motionweb312@gmail.com</span>
              </a>
              <div className="visitRestaurant--block__right--icon">
                <a href="#">
                  <RiTelegram2Fill />
                </a>
                <a href="#">
                  <RiInstagramFill />
                </a>
              </div>
              <div className="visitRestaurant--block__right--geo">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1693.3522930434945!2d74.6152384833918!3d42.890834492961005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1748074130644!5m2!1sru!2skg"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitRestaurant;
