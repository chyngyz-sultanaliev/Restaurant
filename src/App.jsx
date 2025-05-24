import React from "react";
import "./App.scss";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { routes } from "./components/routes/Index";
import { Route, Routes } from "react-router-dom";
import Scroll from "./components/ui/Scroll";

function App() {
  return (
    <div className="App">
      <Header />
      <Scroll/>
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
