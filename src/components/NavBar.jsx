import React, { useState, useEffect, useContext } from "react";
import "../styles/navBar.css";
import AllGames from "./AllGames";
import AppContext from "../appContext";

const NavBar = () => {
  const { navigate, onAccount } = useContext(AppContext);

  const [showGames, setShowGames] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="navBar">
      <div style={{ position: "relative" }}>
        <button onClick={() => setShowGames((prevState) => !prevState)}>
          All Games
        </button>
        {showGames && (
          <div style={{ position: "absolute", width: "100%", top: "100%" }}>
            <AllGames />
          </div>
        )}
      </div>
      {!showGames || !isMobile ? (
        <>
          <button
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              navigate("/shop");
            }}
          >
            Shop
          </button>
          <button
            onClick={() => {
              onAccount();
            }}
          >
            Account
          </button>
          <button>Download LXgAmes Luncher</button>
        </>
      ) : null}
    </div>
  );
};

export default NavBar;
