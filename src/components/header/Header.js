import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div>
      <div>
        <Link to="/">Главная</Link>
      </div>

      <div>
        <Link to="/photo_studio_catalog">Фотостудии</Link>
      </div>

      {isAuthenticated ? (
        <div>
          <Link to="/profile">Профиль</Link>
        </div>
      ) : (
        <>
          <div>
            <Link to="/login">Войти</Link>
          </div>

          <div>
            <Link to="/signup">Регистрация</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
