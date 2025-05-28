import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { Restaurat } from "../../../context";
import Productcard from "../../ui/productcard/Productcard";

const Similar = () => {
  const { similarName } = useParams();
  const { product, category } = useContext(Restaurat);

  const filteredProducts =
    product.filter((v) => {
      return v.category.category_name
        .toLowerCase()
        .includes(similarName.toLowerCase());
    }) || [];

  return (
    <div id="similar">
      <div className="container">
        <div className="similar">
          <div className="similar--blocks">
            {category?.map((el) => (
              <div className="similar--blocks__block" key={el.category_name}>
                <NavLink
                  to={`/similar/${el.category_name}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {el.category_name}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="similar--nav">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((el) => <Productcard el={el} key={el._id} />)
            ) : (
              <h2>"{similarName}" категориясына продукт табылган жок</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Similar;
