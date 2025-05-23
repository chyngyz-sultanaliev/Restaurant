import React from "react";
import redrow from "../../../../assets/icons/redrow.svg";
import about1 from "../../../../assets/images/about-1.png";
import about2 from "../../../../assets/images/about-2.png";

const AboutUs = () => {
  const aboutUs = [
    {
      title: "About Us",
      subtitle: "A Journey Through Cafesio Flavors",
      description:
        "Try dishes that will open up new tastes for you and delight your eyes with their appearance. Here you will find a cozy atmosphere, excellent service and attention to each guest. Book a table now and enjoy a unique experience of taste discovery!",
      image1: about1,
      image2: about2,
    },
  ];

  return (
    <div id="aboutUs">
      <div className="container">
        <div className="aboutUs">
          {aboutUs.map((el, index) => (
            <React.Fragment key={index}>
              <div className="aboutUs__ab">
                <img src={redrow} alt="red arrow" />
                <h1>{el.title}</h1>
              </div>

              <div className="aboutUs__text">
                <h2>{el.subtitle}</h2>
                <p>{el.description}</p>
              </div>

              <div className="aboutUs__img">
                <img
                  src={el.image1}
                  alt="Cafesio dish 1"
                />
                <img
                  src={el.image2}
                  alt="Cafesio dish 2"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
