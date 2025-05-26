import React from "react";
import { NavLink, useParams } from "react-router-dom";
import detailslogo from "../../../assets/image/detaillogo.png";
import Productcard from "../../ui/productcard/Productcard";

const Similar = () => {
  const { similarName } = useParams();

  const product = [
    {
      id: 1,
      title: "Ice Cream",
      url: detailslogo,
      category: "Desserts",
      price: "120",
      desc: "soda,cream,milk,sugar",
    },
    {
      id: 2,
      title: "Ice Cream",
      url: detailslogo,
      category: "Desserts",
      price: "120",
      desc: "soda,cream,milk,sugar",
    },
    {
      id: 3,
      title: "Ice Cream",
      url: detailslogo,
      category: "Hot Drinks",
      price: "130",
      desc: "soda,cream,milk,sugar",
    },
    {
      id: 4,
      title: "Ice Cream",
      url: detailslogo,
      category: "Cold Drinks",
      price: "140",
      desc: "soda,cream,milk,sugar",
    },
    {
      id: 5,
      title: "Ice Cream",
      url: detailslogo,
      category: "Fast foods",
      price: "150",
      desc: "soda,cream,milk,sugar",
    },
  ];

  const categories = [
    "Desserts",
    "Hot Drinks",
    "Cold Drinks",
    "National Foods",
    "Eastern cuisine",
    "Fast foods",
  ];

  const filtered = product.filter((el) => el.category === similarName);

  return (
    <div id="similar">
      <div className="container">
        <div className="similar">
          <div className="similar--blocks">
            {categories.map((cat) => (
              <div className="similar--blocks__block" key={cat}>
                <NavLink to={`/similar/${cat}`}>{cat}</NavLink>
              </div>
            ))}
          </div>
          <div className="similar--nav">
            {filtered.length ? (
              filtered.map((el) => <Productcard el={el} key={el.id} />)
            ) : (
              <h2>No products found for "{similarName}"</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Similar;
