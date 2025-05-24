import React from "react";
import Img from "../../../../assets/images/Delicious.png";
import Left from "../../../../assets/images/MainLogoLeft.svg";
import Right from "../../../../assets/images/MainLogoRight.svg";
import { BsGeoAltFill } from "react-icons/bs";
import { FaArrowRight} from "react-icons/fa";
import { ImPhone } from "react-icons/im";
const Delicious = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        background: `
    linear-gradient(
      180deg,
      rgba(27, 32, 38, 0.4) 46.81%,
      rgba(27, 32, 38, 0.8) 100.67%
    ),
    url(${Img}) center/cover no-repeat
  `,
      }}
      id="delicious"
    >
      <div className="container">
        <div className="delicious">
          <div className="delicious--content">
            <div className="delicious--content__center">
              <div className="delicious--content__center--name">
                <img src={Left} alt="" />
                <h3>Delicious</h3>
                <img src={Right} alt="" />
              </div>
              <h1>Italian Cuisine</h1>
              <p>
                Classic steak & delicious with delightfully unexpenced twists.{" "}
                <br />
                The Restaurant`s sunny decor was inspired by the diners
              </p>
              <div className="delicious--content__center--btn">
                <hr />
                <button>
                  Reserve Your Table <FaArrowRight />
                </button>
                <hr />
              </div>
            </div>
            <div className="delicious--content__bottom">
              <div className="delicious--content__bottom--text">
                <h4>Location</h4>
                <hr />
                <a href="https://go.2gis.com/ny2jd" target="blank">
                  <BsGeoAltFill />
                </a>
                <span>Rua da moeda 1g,1200-275,Portugal</span>
              </div>
              <div className="delicious--content__bottom--text">
                <h4>Hotline</h4>
                <hr />
                <a href="tel:+771219900">
                  <ImPhone />
                </a>
                <span>+771219900</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delicious;
