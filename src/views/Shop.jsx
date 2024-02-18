import React, { useContext } from "react";
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import AppContext from "../appContext";

const Shop = () => {
  const { games, onBuy } = useContext(AppContext);
  return (
    <div>
      <ResponsiveNavBar />
      {games.map((game, index) => (
        <p key={index}>
          {game.name} - Price: {game.price}
          <button
            onClick={() => {
              onBuy(game);
            }}
          >
            Buy
          </button>
        </p>
      ))}
    </div>
  );
};

export default Shop;
