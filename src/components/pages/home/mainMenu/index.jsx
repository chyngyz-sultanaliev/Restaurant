import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";

import mainlogo from "../../../../assets/image/mainmenulogo.svg";
import mainlogo2 from "../../../../assets/image/mainmenulogol.svg";
import detailslogo from "../../../../assets/image/detaillogo.png";

const MainMenu = () => {
  const navigate = useNavigate();

  const categories = [
    "Desserts",
    "Hot Drinks",
    "Cold Drinks",
    "National Foods",
    "Eastern cuisine",
    "Fast foods",
  ];

  const product = [
    {
      id: 1,
      title: "sasha",
      url: detailslogo,
      category: "Desserts",
      price: "120",
    },
    {
      id: 2,
      title: "sasha",
      url: detailslogo,
      category: "Desserts",
      price: "120",
    },
    {
      id: 3,
      title: "sasha",
      url: detailslogo,
      category: "Desserts",
      price: "120",
    },
    {
      id: 4,
      title: "sasha",
      url: detailslogo,
      category: "Desserts",
      price: "120",
    },
    {
      id: 5,
      title: "sasha",
      url: detailslogo,
      category: "Desserts",
      price: "120",
    },
  ];

  return (
    <div id="mainmenu">
      <div className="container">
        <div className="mainmenu">
          <div className="mainmenu--img">
            <img src={mainlogo2} alt="logo left" />
            <h2>Main Menu</h2>
            <img src={mainlogo} alt="logo right" />
          </div>

          <h1>
            Exceptional Quality. <br />
            Delightfully Delicious
          </h1>

          <div className="mainmenu--nav">
            <div className="mainmenu--nav__left">
              {categories.map((cat) => (
                <div className="mainmenu--nav__left--h3" key={cat}>
                  <NavLink to={`/similar/${cat}`}>{cat}</NavLink>
                  <hr />
                </div>
              ))}
            </div>

            <div className="mainmenu--nav__right">
              {[...Array(5)].map((_, index) => (
                <div className="mainmenu--nav__right--block" key={index}>
                  <div className="mainmenu--nav__right--block__h1">
                    <h1>Beer Brewery</h1>
                    <h5>
                      . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                      . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                      .
                    </h5>
                    <h3>$24</h3>
                  </div>
                  <div className="mainmenu--nav__right--block__text">
                    <p>
                      Lörem ipsum askstoppad defaktisk, logokemi. Diastat retos
                      att <br />
                      endomatisk. Geogehet pultvätta, om pneumativ.
                    </p>
                    <a href="#">Order Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mainmenu--btn" onClick={() => navigate("/detail")}>
            <hr />
            <button>
              Reserve Your Table <FaArrowRight />
            </button>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
