import React, { useContext, useState } from "react";
import AppContext from "../appContext";

const Register = () => {
  const { onRegister } = useContext(AppContext);
  const [newAccount, setNewAccount] = useState({});

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Account ID"
        onChange={(e) => {
          setNewAccount({ ...newAccount, accountId: e.target.value });
        }}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setNewAccount({ ...newAccount, password: e.target.value });
        }}
      />
      <button
        onClick={() => {
          onRegister(newAccount);
        }}
      >
        Enter
      </button>
    </div>
  );
};

export default Register;
