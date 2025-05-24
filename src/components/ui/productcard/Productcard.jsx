import React from "react";
import { Link } from "react-router-dom";

const Productcard = ({ el }) => {
  return (
    <div className="product">
      <Link to={`/detail/${el.id}`}>
        <img src={el.url} alt="img" />
      </Link>
      <div className="product--title">
        <h2>{el.title}</h2>
        <h3>${el.price}</h3>
      </div>
    </div>
  );
};

export default Productcard;
