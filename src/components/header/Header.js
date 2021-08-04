import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isAuthenticated = true;

  return (
    <div>
      <div>
        <NavLink to="/">Главная</NavLink>
      </div>

      <div>
        <NavLink to="/photo_studio">Фотостудия</NavLink>
      </div>

      {isAuthenticated ? (
        <div>
          <NavLink to="/profile">Профиль</NavLink>
        </div>
      ) : (
        <>
          <div>
            <NavLink to="/login">Войти</NavLink>
          </div>

          <div>
            <NavLink to="/signup">Регистрация</NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
