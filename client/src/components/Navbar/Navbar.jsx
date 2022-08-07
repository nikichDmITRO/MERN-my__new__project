import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import s from "./Navbar.module.css";

export const Navbar = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const activeStyles = {
    color: "gold",
  };
  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Вы вышли из системы");
  };
  return (
    <div className={s.body}>
      {isAuth && (
        <div className={s.bodyFlex}>
          <div>
            <NavLink
              to={"/"}
              className={s.bodyLink}
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Главная
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/:id"}
              className={s.bodyLink}
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Мои посты
            </NavLink>
          </div>
          <div>
            <NavLink
              to={"/new"}
              className={s.bodyLink}
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Создать пост
            </NavLink>
          </div>
        </div>
      )}
      <div>
        {isAuth ? (
          <button onClick={logoutHandler} className={s.button}>
            Выйти
          </button>
        ) : (
          <Link to={"/login"}>Войти</Link>
        )}
      </div>
    </div>
  );
};
