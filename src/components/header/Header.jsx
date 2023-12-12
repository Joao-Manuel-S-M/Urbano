import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./Style.js";
import Hospedagens from "../../pages/hospedagens/Hospedagens.jsx";

const Header = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const handlePageChange = () => {
      const path = window.location.pathname;
      if (path === "/") {
        setActivePage("home");
      } else if (path === "/sobre") {
        setActivePage("sobre");
      } else if (path === "/hospedagens") {
        setActivePage("hospedagens");
      } else if (path === "/contato") {
        setActivePage("contato");
      }
    };

    handlePageChange();
    window.addEventListener("popstate", handlePageChange);

    return () => {
      window.removeEventListener("popstate", handlePageChange);
    };
  }, []);

  const isActive = (pathname) => {
    return location.pathname === pathname ? "active" : "";
  };

  const menu = () => {
    document.getElementById('line1').classList.toggle('line1') 
    document.getElementById('line2').classList.toggle('line2') 
    document.getElementById('line3').classList.toggle('line3') 
    document.querySelector('.btn-menu').classList.toggle('btn-fixed') 
    document.querySelector('.background').classList.toggle('show-background') 
  }

  return (
    <S.Header>
      <span className="title">Urbano</span>

      <nav>
        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="/sobre" className={isActive("/sobre")}>
          Sobre
        </Link>
        <Link to="/hospedagens" className={isActive("/hospedagens")}>
          Hospedagens
        </Link>
        <Link to="/contato" className={isActive("/contato")}>
          Contato
        </Link>
      </nav>

      <div className="btn-menu" onClick={menu}>
        <div className="lines" id="line1"></div>
        <div className="lines" id="line2"></div>
        <div className="lines" id="line3"></div>
      </div>

      <nav className="background">
        <span className="title">Urbano</span>

        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="/sobre" className={isActive("/sobre")}>
          Sobre
        </Link>
        <Link to="/hospedagens" className={isActive("/hospedagens")}>
          Hospedagens
        </Link>
        <Link to="/contato" className={isActive("/contato")}>
          Contato
        </Link>
      </nav>
    </S.Header>
  );
};

export default Header;
