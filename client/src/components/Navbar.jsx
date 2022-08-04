import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  const isAuth = false;

  const activeStyles = {
    color: "gold",
  };
  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-6 h-6 text-sx ">
        E
      </span>
      {isAuth && (
        <ul className="flex-gap-8">
          <li>
            <NavLink
              to={"/"}
              className="text-sx text-gray"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/:id"}
              className="text-sx text-gray"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Мои посты
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/new"}
              className="text-sx text-gray"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Создать пост
            </NavLink>
          </li>
        </ul>
      )}
      <div>
      {isAuth ?<button>Выйти</button>:<Link to= {'/login'}>Войти</Link>}
      </div>

    </div>
  );
};
