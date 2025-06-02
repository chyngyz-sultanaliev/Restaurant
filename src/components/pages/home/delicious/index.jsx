import React, { useContext, useEffect } from "react";
import Img from "../../../../assets/images/Delicious.png";
import Left from "../../../../assets/images/MainLogoLeft.svg";
import Right from "../../../../assets/images/MainLogoRight.svg";
import { BsGeoAltFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Restaurat } from "../../../../context";
import API_BASE_URL from "../../../../config/api";

const Delicious = () => {
  const [delicious, setDelicious] = useState([]);
  const { language } = useContext(Restaurat);

  async function getDelicious() {
    let res = await axios(`${API_BASE_URL}${language}/list/
`);
    const { data } = res;
    setDelicious(data);
    console.log(data);
  }

  useEffect(() => {
    getDelicious();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);
  
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
    url(${delicious[0]?.list_image}) center/cover no-repeat
  `,
      }}
      id="delicious"
    >
      <div className="container">
        <div className="delicious">
          {delicious.map((item, index) => (
            <div key={index} className="delicious--content">
              <hr className="delicious--content__top" />
              <div className="delicious--content__center">
                <div className="delicious--content__center--name">
                  <img src={Left} alt="" />
                  <h3>{item.headline}</h3>
                  <img src={Right} alt="" />
                </div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div className="delicious--content__center--btn">
                  <hr />
                    <NavLink to={"/reserve"}>
                      Reserve Your Table <FaArrowRight />
                    </NavLink>
                  <hr />
                </div>
              </div>
              <div className="delicious--content__bottom">
                <div className="delicious--content__bottom--text">
                  <h4>{item.title_location}</h4>
                  <hr />
                  <a href="https://go.2gis.com/ny2jd" target="blank">
                    <BsGeoAltFill />
                  </a>
                  <span>{item.address}</span>
                </div>
                <div className="delicious--content__bottom--text">
                  <h4>{item.title_hotline}</h4>
                  <hr />
                  <a href={`tel:${item.phone_number}`}>
                    <ImPhone />
                  </a>
                  <span>{item.phone_number}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Delicious;
