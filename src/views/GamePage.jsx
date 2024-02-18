import React, { useContext } from "react";
import AppContext from "../appContext";
import { useParams } from "react-router-dom";
import ResponsiveNavBar from "../components/ResponsiveNavBar";
import "../styles/gamePage.css";

const GamePage = () => {
  const { gameByGameName, onBuy } = useContext(AppContext);
  const { gameName } = useParams();
  const game = gameByGameName(gameName);

  const bodyStyle = {
    backgroundImage: `url(${game.image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
  };

  return (
    <div style={bodyStyle}>
      <ResponsiveNavBar />
      <h1 className="glowText">{game.name}</h1>
      <p>{game.description}</p>
      <h3>Price: {game.price}$</h3>
      <button
        onClick={() => {
          onBuy(game);
        }}
      >
        Buy
      </button>
    </div>
  );
};

export default GamePage;
