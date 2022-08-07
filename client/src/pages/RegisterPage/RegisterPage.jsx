import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, checkIsAuth } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";

export const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status){ toast(status)};
    if (isAuth) navigate("/");
  }, [status,isAuth,navigate]);

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password }));
      console.log(username, password);
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
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <div>
        <button type="submit" onClick={handleSubmit}>
          Подтвердить
        </button>
        <Link to="/login">Уже зарегестрирован?</Link>
      </div>
    </form>
  );
};
