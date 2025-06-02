import React from "react";
import { Link } from "react-router-dom";
import { Restaurat } from "../../../context";

const Productcard = ({ el }) => {

  return (
    <div className="product">
      <Link to={`/detail/${el.id}`}>
        <img src={el.product_image} alt="img" />
      </Link>
      <div className="product--title">
        <h2>
          {el.product_name} <br />  
             {el.product_ingradient?.slice(0,3).map((ing, idx) => (
          <span key={idx}>
            {ing.ingradient_name.length > 40
              ? ing.ingradient_name.slice(0, 40) + "..."
              : ing.ingradient_name}
            {idx !== el.product_ingradient.length - 1 ? " ," :  " "}
          </span>
        ))}
        </h2>

        <h3>${el.price}</h3>
      </div>
    </div>
  );
};

export default Productcard;
