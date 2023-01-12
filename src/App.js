import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/subcomponent/About";
import { MENUS, users } from "./util/data";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Profile from "./components/subcomponent/Profile";

function App() {
  function check(userName, password) {
    users.map((user) => {
      if (user.userName === userName && user.password === password) {
        console.log("logged in");
        <Profile />;
      } else {
        console.error("error");
      }
    });
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
        <Route path={MENUS[1].url} element={<About />} />
        <Route path={MENUS[2].url} element={<Login check={check} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
