import React from "react";
import leftImg from "../../../../assets/images/ModernInterior1.png";
import centerImg1 from "../../../../assets/images/ModernInterior2.png";
import centerImg2 from "../../../../assets/images/ModernInterior3.png";
import centerImg3 from "../../../../assets/images/ModernInterior4.png";
import rightImg from "../../../../assets/images/ModernInterior5.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Left from "../../../../assets/images/MainLogoLeft.svg";
import Right from "../../../../assets/images/MainLogoRight.svg";

const ModernInterior = () => {
  return (
    <div id="modernInterior">
      <div className="container">
        <div className="modernInterior--title">
          <img src={Left} alt="" />
          <h3>modern interior</h3>
          <img src={Right} alt="" />
        </div>
        <div className="modernInterior">
          <div className="modernInterior--block">
            <div className="modernInterior--block__left">
              <Zoom>
                <img src={leftImg} alt="img" />
              </Zoom>
            </div>
            <div className="modernInterior--block__center">
              <div className="modernInterior--block__center--top">
                <Zoom>
                  <img src={centerImg1} alt="img" />
                </Zoom>
              </div>
              <div className="modernInterior--block__center--bottom">
                <Zoom>
                  <img src={centerImg2} alt="img" />
                </Zoom>
                <Zoom>
                  <img src={centerImg3} alt="img" />
                </Zoom>
              </div>
            </div>
            <div className="modernInterior--block__right">
              <Zoom>
                <img src={rightImg} alt="img" />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernInterior;
