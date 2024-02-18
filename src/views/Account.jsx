import React, { useContext } from "react";
import AppContext from "../appContext";
import { useParams } from "react-router-dom";
import ResponsiveNavBar from "../components/ResponsiveNavBar";

const Account = () => {
  const { currentAccountById, onRemove } = useContext(AppContext);
  const { accountId } = useParams();
  const account = currentAccountById(accountId);

  let totalPrice = 0;
  if (account && Array.isArray(account.purchasedGames)) {
    totalPrice = account.purchasedGames.reduce(
      (total, game) => total + game.price,
      0
    );
  }

  return (
    <div>
      <ResponsiveNavBar />
      <h1>Account Overview</h1>
      <h2>Id: {account.accountId}</h2>
      <h2>Purchased Games:</h2>
      {account &&
        account.purchasedGames &&
        account.purchasedGames.map((game, index) => (
          <p key={index}>
            {game.name} - Payed: {game.price}${" "}
            <button
              onClick={() => {
                onRemove(game);
              }}
            >
              X
            </button>
          </p>
        ))}

      {totalPrice > 0 ? `Total Payed: ${totalPrice}$` : ""}
    </div>
  );
};

export default Account;
