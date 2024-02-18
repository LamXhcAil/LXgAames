import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

const ResponsiveNavBar = () => {
  const [burger, setBurger] = useState(false);
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
    <div>
      {isMobile ? (
        <>
          <button onClick={() => setBurger((prevState) => !prevState)}>
            =
          </button>
          {burger ? <NavBar /> : ""}
        </>
      ) : (
        <NavBar />
      )}
    </div>
  );
};

export default ResponsiveNavBar;
