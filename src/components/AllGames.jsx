import React, { useContext } from "react";
import AppContext from "../appContext";

const AllGames = () => {
  const { games, navigate } = useContext(AppContext);
  return (
    <div>
      {games.map((game, index) => (
        <div key={index}>
          <button
            onClick={() => {
              navigate(`/${game.name}`);
            }}
          >
            {game.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllGames;
