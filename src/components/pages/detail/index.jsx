import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import detailslogo from "../../../assets/image/detaillogo.png";
import { NavLink, useParams } from "react-router-dom";
import Productcard from "../../ui/productcard/Productcard";

const Detail = () => {
  const { detailId } = useParams();
  console.log(detailId);

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
      price: "130",
    },
    {
      id: 4,
      title: "sasha",
      url: detailslogo,
      category: "Cold Drinks",
      price: "140",
    },
    {
      id: 5,
      title: "sasha",
      url: detailslogo,
      category: "Fast foods",
      price: "150",
    },
  ];
  const [filtered, setFiltered] = useState(null);
  const categories = [
    "Desserts",
    "Hot Drinks",
    "Cold Drinks",
    "National Foods",
    "Eastern cuisine",
    "Fast foods",
  ];

  useEffect(() => {
    const find = product.find((el) => el.id.toString() === detailId);
    setFiltered(find);
  }, [detailId]);
  return (
    <div id="detail">
      <div className="container">
        <div className="detail">
          <div className="detail--blocks">
            {categories.map((cat, index) => (
              <div className="detail--blocks__block" key={index}>
                <NavLink to={`/similar/${cat}`}>{cat}</NavLink>
              </div>
            ))}
          </div>

          <div className="detail--right">
            <div className="detail--right__extras">
              <div className="detail--right__extras--content">
                <img src={detailslogo} alt="img" />
                <div className="detail--right__extras--content__cream">
                  <h2>
                    Ice Cream <br />
                    <span>soda, cream, milk, sugar</span>
                  </h2>
                  <h3>$9.11</h3>
                </div>
              </div>

              <div className="detail--right__extras--cherry">
                <div>
                  <h1>Extras</h1>
                  <div className="detail--right__extras--cherry__h2">
                    <h2>
                      Cherry
                      <br /> <span>Cherry</span>
                    </h2>
                    <h3>
                      $0.90 <br />
                      <span>$0.90</span>
                    </h3>
                  </div>
                </div>

                <div>
                  <h1>Drinks</h1>
                  <div className="detail--right__extras--cherry__h2">
                    <h2>
                      Coca Cola
                      <br /> <span>Coca Cola</span>
                    </h2>
                    <h3>
                      $0.90 <br />
                      <span>$0.90</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail--right__gueries">
              <h1>Similar queries</h1>
              <div className="detail--right__gueries--content">
                {product.map((el) => {
                  return el.category == filtered?.category ? (
                    <Productcard el={el} key={el._id} />
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
