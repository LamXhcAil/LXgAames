import React, { useContext, useState } from "react";
import AppContext from "../appContext";

const LoginPage = () => {
  const { onLogin, navigate } = useContext(AppContext);

  const [account, setAccount] = useState({});

  return (
    <div>
      <h1>LXgAmes</h1>
      <input
        type="text"
        placeholder="Account ID"
        onChange={(e) => {
          setAccount({ ...account, accountId: e.target.value });
        }}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setAccount({ ...account, password: e.target.value });
        }}
      />
      <button
        onClick={() => {
          onLogin(account);
        }}
      >
        Login
      </button>
      <a
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </a>
    </div>
  );
};

export default LoginPage;
