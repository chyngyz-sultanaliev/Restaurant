import React from "react";
import Left from "../../../../assets/images/MainLogoLeft.svg";
import { FaArrowRight } from "react-icons/fa";
import { RiInstagramFill, RiTelegram2Fill } from "react-icons/ri";
import { MdPhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const VisitRestaurant = () => {
  const [visitRestaurant, setVisitRestaurant] = useState([]);
  const restaurant = visitRestaurant[0] || {};
  const {
    headline,
    title,
    restaurant_address,
    restaurant_time,
    restaurant_contact,
  } = restaurant;

  async function getVisitRestaurant() {
    let res = await axios(`http://13.53.173.252/ru/visit/
`);
    const { data } = res;
    setVisitRestaurant(data);
  }

  useEffect(() => {
    getVisitRestaurant();
  }, []);
  return (
    <div id="visitRestaurant">
      <div className="container">
        <div className="visitRestaurant">
          <div className="visitRestaurant--block">
            <div className="visitRestaurant--block__left">
              <div className="visitRestaurant--block__left--title">
                <img src={Left} alt="img" />
                <h3>{headline}</h3>
              </div>
              <h1>{title}</h1>
              <div className="visitRestaurant--block__left--text">
                <h3>{restaurant_address?.title}</h3>
                <p>{restaurant_address?.address}</p>
              </div>
              <div className="visitRestaurant--block__left--text">
                <h3>{restaurant_time?.title}</h3>
                <p>
                  {restaurant_time?.day_range1}
                  {restaurant_time?.open_time1.slice(0, 5)} am -
                  {restaurant_time?.close_time1.slice(0, 5)} am <br />
                  {restaurant_time?.day_range2}
                  {restaurant_time?.open_time2.slice(0, 5)} am -
                  {restaurant_time?.close_time2.slice(0, 5)} am
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
              <h2>{restaurant_contact?.title}</h2>
              <a href={`tel:${restaurant_contact?.phone_number}`}>
                <MdPhoneInTalk />
                <span>{restaurant_contact?.phone_number}</span>
              </a>
              <a href={`email:${restaurant_contact?.mail}`} target="blank">
                <TfiEmail />
                <span>{restaurant_contact?.mail}</span>
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
