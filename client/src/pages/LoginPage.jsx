import React from "react";
import {Link} from "react-router-dom"

export const LoginPage = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Авторизация</h1>
      <label>
        Username:
        <input />
      </label>
      <label>
        Password:
        <input />
      </label>

      <div>
        <button type="submit" className="mr-20">Войти</button>
        <Link to='/register'>зарегистрироваться</Link>

      </div>
    </form>
  );
};
