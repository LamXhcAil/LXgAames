import React, { useContext } from "react";
import AppContext from "../appContext";
import ResponsiveNavBar from "../components/ResponsiveNavBar";

const HomePage = () => {
  const {} = useContext(AppContext);

  return (
    <div>
      <ResponsiveNavBar />
    </div>
  );
};

export default HomePage;
