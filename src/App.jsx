import "./App.css";
import AppContext from "./appContext";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import Register from "./views/Register";
import HomePage from "./views/HomePage";
import About from "./views/About";
import Shop from "./views/Shop";
import Account from "./views/Account";
import GamePage from "./views/GamePage";

function App() {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [changeRoute, setChangeRoute] = useState(false);

  const games = [
    {
      name: "IntoTheDarkness",
      price: 85,
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, provident!",
      image: "../src/images/IntoTheDarknessImage.png",
    },
    {
      name: "Gothic Town",
      price: 140,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ullam sapiente? Tenetur nesciunt nemo odio!",
      image: "../src/images/GothicTownImage.png",
    },
  ];

  const onLogin = (accToLog) => {
    const existingAcc = accounts.find(
      (account) =>
        account.accountId === accToLog.accountId &&
        account.password === accToLog.password
    );

    if (existingAcc) {
      setCurrentAccount(existingAcc);
      navigate("/");
      return;
    } else {
      alert("Account not found");
    }
  };

  const onRegister = (newAccount) => {
    const existingAcc = accounts.find(
      (account) =>
        account.accountId === newAccount.accountId &&
        account.password === newAccount.password
    );
    if (!existingAcc) {
      setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
      setChangeRoute(true);
      navigate("/login");
      return;
    } else {
      alert("Account is already registered");
    }
  };

  const onAccount = () => {
    navigate(`/account/${currentAccount.accountId}`);
  };

  const gameByGameName = (gameName) => {
    const foundGame = games.find((game) => game.name === gameName);
    {
      return foundGame;
    }
  };

  const onBuy = (purchasedGame) => {
    const updatedAccount = structuredClone(currentAccount);
    if (!updatedAccount.purchasedGames) {
      updatedAccount.purchasedGames = [];
    }
    updatedAccount.purchasedGames.push(purchasedGame);
    setCurrentAccount(updatedAccount);
    navigate("/");
  };

  const currentAccountById = (accountId) => {
    if (accountId === currentAccount.accountId) {
      return currentAccount;
    }
    return null;
  };

  const onRemove = (indexToRemove) => {
    const updatedAccount = structuredClone(currentAccount);
    updatedAccount.purchasedGames.splice(indexToRemove, 1);
    setCurrentAccount(updatedAccount);
    navigate("/");
  };

  const contextValue = {
    currentAccountById,
    onLogin,
    onRegister,
    navigate,
    games,
    onAccount,
    gameByGameName,
    onBuy,
    onRemove,
  };
  return (
    <AppContext.Provider value={contextValue}>
      <>
        <Routes>
          <Route path={changeRoute ? "/login" : "/"} element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          {currentAccount && <Route path="/" element={<HomePage />} />}
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/account/:accountId" element={<Account />} />
          <Route path="/:gameName" element={<GamePage />} />
        </Routes>
      </>
    </AppContext.Provider>
  );
}

export default App;
