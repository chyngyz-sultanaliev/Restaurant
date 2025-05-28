import React, { useEffect, useState, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Restaurat } from "../../../context";
import Productcard from "../../ui/productcard/Productcard";
import axios from "axios";

const Detail = () => {
  const { detailId } = useParams();
  const [detail, setDetail] = useState(null);
  const { product, categorys, language, } = useContext(Restaurat);

  async function getDetail() {
    const res = await axios(
      `http://13.53.173.252/${language}/product/${detailId}/`
    );
    setDetail(res.data);
  }

  useEffect(() => {
    getDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailId]);
  console.log(detail);

  const similarProducts = product?.filter(
    (el) =>
      el.category_name === detail?.category_name &&
      el.id.toString() !== detailId
  );

  if (!detail) return <h2>Loading...</h2>;

  return (
    <div id="detail">
      <div className="container">
        <div className="detail">
          <div className="detail--blocks">
            {categorys.map((cat, index) => (
              <div className="detail--blocks__block" key={index}>
                <NavLink to={`/similar/${cat.category_name}`}>
                  {cat.category_name}
                </NavLink>
              </div>
            ))}
          </div>

          <div className="detail--right">
            <div className="detail--right__extras">
              <div className="detail--right__extras--content">
                <img src={detail.product_image} alt="img" />
                <div className="detail--right__extras--content__cream">
                  <h2>
                    {detail.product_name}
                    <br />
                    {detail.product_ingradient?.map((ing, idx) => (
                      <span key={idx}>
                        {ing.ingradient_name}
                        {idx !== detail.product_ingradient.length - 1
                          ? ", "
                          : ""}
                      </span>
                    ))}
                  </h2>
                  <h3>${detail.price}</h3>
                </div>
              </div>

              <div className="detail--right__extras--cherry">
                {detail.product_extras?.length > 0 && (
                  <div>
                    <h1>Extras</h1>
                    {detail.product_extras.map((extra) => (
                      <div
                        className="detail--right__extras--cherry__h2"
                        key={extra.id}
                      >
                        <h2>
                          {extra.extras_name} <br />
                        </h2>
                        <h3>
                          ${extra.price} <br />
                        </h3>
                      </div>
                    ))}
                  </div>
                )}

                {detail.product_drinks?.length > 0 && (
                  <div>
                    <h1>Drinks</h1>
                    {detail.product_drinks.map((drink) => (
                      <div
                        className="detail--right__extras--cherry__h2"
                        key={drink.id}
                      >
                        <h2>
                          {drink.drink_name} <br />
                        </h2>
                        <h3>
                          <span>${drink.price}</span>
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="detail--right__gueries">
              <h1>Similar Queries</h1>
              <div className="detail--right__gueries--content">
                {similarProducts?.length > 0 ? (
                  similarProducts.map((el) => (
                    <Productcard el={el} key={el.id} />
                  ))
                ) : (
                  <h4>No similar products found.</h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
