import React from "react";
import { NavLink, Link } from "react-router-dom";
import s from "./Navbar.module.css";

export const Navbar = () => {
  const isAuth =true;

  const activeStyles = {
    color: "gold",
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
        {isAuth ? <button className={s.button}>Выйти</button> : <Link to={"/login"}>Войти</Link>}
      </div>
    </div>
  );
};
