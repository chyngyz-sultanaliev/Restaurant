import React from "react";
// import leftImg from "../../../../assets/images/ModernInterior1.png";
// import centerImg1 from "../../../../assets/images/ModernInterior2.png";
// import centerImg2 from "../../../../assets/images/ModernInterior3.png";
// import centerImg3 from "../../../../assets/images/ModernInterior4.png";
// import rightImg from "../../../../assets/images/ModernInterior5.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Left from "../../../../assets/images/MainLogoLeft.svg";
import Right from "../../../../assets/images/MainLogoRight.svg";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Restaurat } from "../../../../context";
import API_BASE_URL from "../../../../config/api";
  
const ModernInterior = () => {
  const [modernInterior, setModernInterior] = useState([]);
  const {language} = useContext(Restaurat)
  async function getMoadernInterior() {
    let res = await axios(`${API_BASE_URL}${language}/modern/`);
    const { data } = res;
    setModernInterior(data);
  }

  useEffect(() => {
    getMoadernInterior();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);
  return (
    <div id="modernInterior">
      <div className="container">
        <div className="modernInterior--title">
          <img src={Left} alt="" />
          <h3>{modernInterior[0]?.headline}</h3>
          <img src={Right} alt="" />
        </div>
        <div className="modernInterior">
          <div className="modernInterior--block">
            <div className="modernInterior--block__left">
              <Zoom>
                <img
                  src={modernInterior[0]?.interior_images[0]?.interior_image}
                  alt="img"
                />
              </Zoom>
            </div>
            <div className="modernInterior--block__center">
              <div className="modernInterior--block__center--top">
                <Zoom>
                  <img
                    src={modernInterior[0]?.interior_images[1]?.interior_image}
                    alt="img"
                  />
                </Zoom>
              </div>
              <div className="modernInterior--block__center--bottom">
                <Zoom>
                  <img
                    src={modernInterior[0]?.interior_images[2]?.interior_image}
                    alt="img"
                  />
                </Zoom>
                <Zoom>
                  <img
                    src={modernInterior[0]?.interior_images[3]?.interior_image}
                    alt="img"
                  />
                </Zoom>
              </div>
            </div>
            <div className="modernInterior--block__right">
              <Zoom>
                <img
                  src={modernInterior[0]?.interior_images[4]?.interior_image}
                  alt="img"
                />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernInterior;
