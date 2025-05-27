import React, { useState, useRef, useEffect } from "react";
import redrow from "../../../../assets/icons/redrow.svg";
import dish1 from "../../../../assets/images/dish1.png";
import dish2 from "../../../../assets/images/dish2.png";
import sliderow from "../../../../assets/icons/slaiddish.svg";

const BestSellers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const bestSellers = [
    {
      id: 1,
      title: "Best Sellers",
      subtitle: "You Only Reserve Exception",
      description:
        "Each location has a menu that's curated just for them. See what's new at your Cafesio and You'll find Cafesio Covent Carden moments.",
      images: [dish1, dish2],
    },
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 769); // Изменено на 769px
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isMobile || !sliderRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === bestSellers[0].images.length - 1 ? 0 : prev + 1
    );
  };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) =>
  //     prev === 0 ? bestSellers[0].images.length - 1 : prev - 1
  //   );
  // };

  useEffect(() => {
    if (isMobile) return;

    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.children[0]?.offsetWidth;
    if (slideWidth) {
      slider.scrollTo({
        left: currentSlide * (slideWidth + 15),
        behavior: "smooth",
      });
    }
  }, [currentSlide, isMobile]);

  return (
    <section id="bestSellers" className="best-sellers-section">
      <div className="container">
        <div className="best-sellers">
          {bestSellers.map((item) => (
            <div key={item.id} className="best-sellers__content">
              <div className="best-sellers__info">
                <div className="title-wrapper">
                  <img
                    src={redrow}
                    alt="Decoration arrow"
                    className="arrow-icon"
                  />
                  <h1 className="title">{item.title}</h1>
                </div>
                <h2 className="subtitle">{item.subtitle}</h2>
                <p className="description">{item.description}</p>
              </div>

              <div className="best-sellers__gallery-container">
                <div
                  className="gallery-wrapper"
                  ref={sliderRef}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                >
                  {item.images.map((image, index) => (
                    <div key={index} className="gallery-item">
                      <img
                        src={image}
                        alt={`Best seller dish ${index + 1}`}
                        className="dish-image"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                <button
                  className="slider-arrow"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <img src={sliderow} alt="slider arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
