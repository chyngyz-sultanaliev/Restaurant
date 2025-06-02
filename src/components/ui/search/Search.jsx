import React, { useState, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { Restaurat } from "../../../context";
import axios from "axios";
import API_BASE_URL from "../../../config/api";
import { NavLink } from "react-router-dom";

const Search = () => {
  const { language } = useContext(Restaurat);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const res = await axios(
      `${API_BASE_URL}${language}/product/?search=${value}`
    );
    setResults(res.data);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Deserts"
        value={query}
        onChange={handleSearch}
        className="search__input"
      />

      <div className="search__results">
        {results.map((item) => (
          <div key={item.id} className="search__card">
            <NavLink to={`/detail/${item.id}`}>
            <img src={item.product_image} alt={item.name} />
            </NavLink>
            <div>
              <h3>{item.product_name}</h3>
              {item.product_ingradient?.slice(0, 3).map((ing, idx) => (
                <p key={idx}>
                  {ing.ingradient_name.length > 40
                    ? ing.ingradient_name.slice(0, 40) + "..."
                    : ing.ingradient_name}
                  {idx !== item.product_ingradient.length - 1 ? " ," : " "}
                </p>
              ))}
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
