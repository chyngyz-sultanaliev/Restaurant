import React, { useState, useEffect } from "react";
import axios from "axios";
import redrow from "../../../../assets/icons/redrow.svg";
import { useContext } from "react";
import { Restaurat } from "../../../../context";
import API_BASE_URL from "../../../../config/api";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useContext(Restaurat);
  const fetchAboutData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}${language}/about/`
      );
      if (response.data && response.data.length > 0) {
        setAboutData(response.data[0]);
      } else {
        throw new Error("No data received from server");
      }
    } catch (err) {
      setError(err.message || "Failed to fetch about data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAboutData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!aboutData) return <div>No data available</div>;

  return (
    <div id="aboutUs">
      <div className="container">
        <div className="aboutUs">
          <div className="aboutUs__ab">
            <img src={redrow} alt="red arrow" />
            <h1>{aboutData.headline}</h1>
          </div>

          <div className="aboutUs__text">
            <h2>{aboutData.title}</h2>
            <p>{aboutData.description}</p>
          </div>

          <div className="aboutUs__img">
            <img
              src={aboutData.restaurant_images[0].restaurant_image}
              alt="Restaurant interior"
            />
            <img
              src={aboutData.restaurant_images[1].restaurant_image}
              alt="Restaurant dishes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
