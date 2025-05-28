import React, { useState, useEffect } from "react";
import axios from "axios";
import redrow from "../../../../assets/icons/redrow.svg";
import sliderow from "../../../../assets/icons/slaiddish.svg";
import { useContext } from "react";
import { Restaurat } from "../../../../context";

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useContext(Restaurat);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await axios.get(`http://13.53.173.252/${language}/seller/`);
        if (response.data && Array.isArray(response.data)) {
          setBestSellers(response.data);
        } else {
          throw new Error("Данные не найдены или неправильный формат");
        }
      } catch (err) {
        setError(err.message + " Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    };
    fetchBestSellers();
  }, [language]);

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">Ошибка: {error}</div>;
  if (!bestSellers.length) return <div>Нет популярных блюд</div>;

  return (
    <section id="bestSellers" className="best-sellers-section">
      <div className="container">
        <div className="best-sellers">
          {bestSellers.map((item) => (
            <BestSellerCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BestSellerCard = ({ item }) => {
  const images = item?.seller_images?.map((img) => img.seller_image) || [];
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [modalImage, setModalImage] = useState(null); // для модалки

  const handleNext = () => {
    if (startIndex + 2 < images.length) {
      setFade(true);
      setTimeout(() => {
        setStartIndex(startIndex + 2);
        setFade(false);
      }, 250);
    } else {
      alert(
        "Бекенд добавил только 4 фотографии. Если хотите еще фото - скажите бекенду добавить."
      );
    }
  };

  const handlePrev = () => {
    if (startIndex - 2 >= 0) {
      setFade(true);
      setTimeout(() => {
        setStartIndex(startIndex - 2);

        setFade(false);
      }, 250);
    }
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const visibleImages = images.slice(startIndex, startIndex + 2);

  return (
    <>
      <div className="best-sellers__content">
        <div className="best-sellers__info">
          <div className="title-wrapper">
            <img src={redrow} alt="Украшение" className="arrow-icon" />
            <h1 className="title">{item.headline}</h1>
          </div>
          <h2 className="subtitle">{item.title}</h2>
          <p className="description">{item.description}</p>
        </div>
        <div
          className="best-sellers__gallery-container"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <div
            className="gallery-wrapper"
            style={{ display: "flex", gap: "10px" }}
          >
            {visibleImages.length ? (
              visibleImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  style={{ width: "150px", cursor: "pointer" }}
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image}
                    alt={`Блюдо №${startIndex + index + 1}`}
                    className={`dish-image ${fade ? "fade-out" : "fade-in"}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              ))
            ) : (
              <p>Изображения отсутствуют</p>
            )}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {startIndex > 0 && (
              <button
                className="slider-arrow"
                aria-label="Предыдущий слайд"
                onClick={handlePrev}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img
                  src={sliderow}
                  alt="Стрелка назад"
                  style={{
                    transform: "rotate(180deg)",
                    width: "30px",
                    height: "30px",
                  }}
                />
              </button>
            )}
            {startIndex + 2 < images.length && (
              <button
                className="slider-arrow"
                aria-label="Следующий слайд"
                onClick={handleNext}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img
                  src={sliderow}
                  alt="Стрелка вперед"
                  style={{ width: "30px", height: "30px" }}
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {modalImage && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            cursor: "pointer",
          }}
        >
          <img
            src={modalImage}
            alt="Увеличенное изображение"
            style={{ maxHeight: "90%", maxWidth: "90%", borderRadius: "8px" }}
            onClick={(e) => e.stopPropagation()} // чтобы клик по картинке не закрывал модалку
          />
        </div>
      )}
    </>
  );
};

export default BestSellers;
