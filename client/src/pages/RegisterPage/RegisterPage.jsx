import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../redux/features/auth/authSlice";

export const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password}));
      console.log(username,password)
      setPassword("");
      setUserName("");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Регистрация</h1>
      <label>
        Username:
        <input value={username} onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        Password:
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>

      <div>
        <button type="submit"  onClick={handleSubmit} >

          Подтвердить
        </button>
        <Link to="/register">Уже зарегестрирован?</Link>
      </div>
    </form>
  );
};
