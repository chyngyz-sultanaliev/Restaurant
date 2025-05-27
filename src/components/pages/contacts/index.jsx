import axios from "axios";
import React from "react";
import { useState } from "react";
import { FaPhone, FaUserEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contacts = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
  });

  const { name, phone } = userData;

  const Submit = async () => {
    const my_id = "-1002597947748";
    const token = "7931060770:AAEdgGi4MAjnFVqMltVdmXXg4WjloZAsNqA";
    const api_key = `https://api.telegram.org/bot${token}/sendMessage`;

    if (!name.trim() || !phone.trim()) {
      toast.error("Заполните поля!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (
      !/^\+?[0-9]{10,15}$/.test(phone.trim()) ||
      !/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(name.trim())
    ) {
      toast.error("Некорректный ввод данных!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else {
      const userNameData = {
        chat_id: my_id,
        parse_mode: "HTML",
        text: `
🛒 <b>Жаңы буйрутма!</b>
👤 <b>Аты:</b> ${name}
📧 <b>Email:</b> ${phone}`,
      };
      await axios.post(api_key, userNameData);
      toast.success("Заказ подтвержден !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setUserData({
        name: "",
        phone: "",
      });
    }
  };
  return (
    <div id="contact">
      <div className="contact">
        <div className="contact__card">
          <div className="contact__card--group">
            <div className="icon">
              <FaUserEdit />
            </div>
            <div className="contact__card--group__wrapper">
              <label htmlFor="name">NAME</label>
              <input
                value={name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                onKeyDown={(e) => e.key === "Enter" && Submit()}
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="contact__card--group">
            <div className="icon">
              <FaPhone />
            </div>
            <div className="contact__card--group__wrapper">
              <label htmlFor="phone">PHONE</label>
              <input
                value={phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
                onKeyDown={(e) => e.key === "Enter" && Submit()}
                type="text"
                id="phone"
                placeholder="Enter your phone"
              />
            </div>
          </div>
          <button onClick={Submit} className="contact__card--button">
            Contact
          </button>
          <NavLink to={"/"} className="contact__card--close">
            <IoClose />
          </NavLink>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contacts;
