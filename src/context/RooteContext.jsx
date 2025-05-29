import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Restaurat } from ".";
import { useState } from "react";
import API_BASE_URL from "../config/api";

const RooteContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [mainMenu, setMainMenu] = useState([]);
  const [language, setLanguage] = useState("en");

  async function getProduct() {
    let res = await axios(`${API_BASE_URL}${language}/product/`);
    const { data } = res;
    setProduct(data);
  }
  async function getCategory() {
    let res = await axios(`${API_BASE_URL}${language}/categories/`);
    const { data } = res;
    setCategory(data);
  }

  async function getMainMenu() {
    let res = await axios(`${API_BASE_URL}${language}/menu/`);
    setMainMenu(res.data);
  }

  async function getCategorys() {
    let res = await axios(` ${API_BASE_URL}${language}/category/`);
    const { data } = res;
    console.log(data, "logo");
    setCategorys(data);
  }
  useEffect(() => {
    getCategorys();
    getMainMenu();
    getProduct();
    getCategory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <Restaurat.Provider
      value={{
        product,
        category,
        mainMenu,
        categorys,
        language,
        setLanguage,
        setCategorys,
        setMainMenu,
        setCategory,
        setProduct,
      }}
    >
      {children}
    </Restaurat.Provider>
  );
};

export default RooteContext;
