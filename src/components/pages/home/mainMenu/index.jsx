import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import mainlogo from "../../../../assets/image/mainmenulogo.svg";
import mainlogo2 from "../../../../assets/image/mainmenulogol.svg";
import { Restaurat } from "../../../../context";

const MainMenu = () => {
  const { similarName } = useParams();
  const navigate = useNavigate();
  const {  category, mainMenu, language } = useContext(Restaurat);

  console.log(mainMenu, "main");

  const [selectedCategory, setSelectedCategory] = useState(similarName || null);

  useEffect(() => {
    setSelectedCategory(similarName || null);
  }, [similarName]);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filteredProducts = category
    ?.filter((el) =>
      selectedCategory ? el.category_name === selectedCategory : true
    )
    .flatMap((el) => el.menu_product || []);

  return (
    <div id="mainmenu">
      <div className="container">
        <div className="mainmenu">
          {mainMenu.map((el) => (
            <div className="title" key={el.id}>
              <div className="mainmenu--img">
                <img src={mainlogo2} alt="logo left" />
                <h2>{el.headline}</h2>
                <img src={mainlogo} alt="logo right" />
              </div>
              <h1 >
               {language ==="en" ? el.title.slice(10,100) :el.title.slice(12,100) }
              </h1 >
            </div>
          ))}

          <div className="mainmenu--nav">
            <div className="mainmenu--nav__left">
              {category.map((el) => (
                <div className="mainmenu--nav__left--h3" key={el.category_name}>
                  <a
                    onClick={() => handleCategoryClick(el.category_name)}
                    className={
                      selectedCategory === el.category_name ? "active" : ""
                    }
                  >
                    {el.category_name}
                  </a>
                  <hr />
                </div>
              ))}
            </div>

            <div className="mainmenu--nav__right">
              {filteredProducts.length > 0 ? (
                filteredProducts.slice(0,2).map((product, idx) => (
                  <div className="mainmenu--nav__right--block" key={idx}>
                    <div className="mainmenu--nav__right--block__h1">
                      <h1>{product.product_name}</h1>
                      <h5>
                        . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                      </h5>
                      <h3>${product.price}</h3>
                    </div>
                    <div className="mainmenu--nav__right--block__text">
                      <p>{product.description}</p>
                      <a href="#">Order Now</a>
                    </div>
                  </div>
                ))
              ) : (
                <h3>No products found for "{selectedCategory}"</h3>
              )}
            </div>
          </div>

          <div className="mainmenu--btn">
            <hr />
            <button
              onClick={() =>
                navigate("/similar/" + (selectedCategory || "all"))
              }
            >
              View Full menu <FaArrowRight />
            </button>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
