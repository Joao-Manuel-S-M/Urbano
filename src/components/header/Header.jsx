import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./Style";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const location = useLocation();

	const menu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const isActive = (path) => {
		// Função para determinar se o link está ativo
		return location.pathname === path ? "active" : "";
	};

	return (
		<S.Header>
			<span className="title">Urbano</span>
			<nav>
				<Link to="/Urbano" className={isActive("/Urbano")}>
					Home
				</Link>
				<Link to="/Urbano/sobre" className={isActive("/Urbano/sobre")}>
					Sobre
				</Link>
				<Link
					to="/Urbano/hospedagens"
					className={isActive("/Urbano/hospedagens")}
				>
					Hospedagens
				</Link>
				<Link to="/Urbano/contato" className={isActive("/Urbano/contato")}>
					Contato
				</Link>
			</nav>

			<div className="btn-menu" onClick={menu}>
				<div className={`lines ${menuOpen ? "line1" : ""}`} id="line1"></div>
				<div className={`lines ${menuOpen ? "line2" : ""}`} id="line2"></div>
				<div className={`lines ${menuOpen ? "line3" : ""}`} id="line3"></div>
			</div>

			{/* Nav Mobile */}
			<nav className={`background ${menuOpen ? "show-background" : ""}`}>
				<span className="title">Urbano</span>

				<Link to="/Urbano" className={isActive("/Urbano")} onClick={closeMenu}>
					Home
				</Link>
				<Link
					to="/Urbano/sobre"
					className={isActive("/Urbano/sobre")}
					onClick={closeMenu}
				>
					Sobre
				</Link>
				<Link
					to="/Urbano/hospedagens"
					className={isActive("/Urbano/hospedagens")}
					onClick={closeMenu}
				>
					Hospedagens
				</Link>
				<Link
					to="/Urbano/contato"
					className={isActive("/Urbano/contato")}
					onClick={closeMenu}
				>
					Contato
				</Link>
			</nav>
		</S.Header>
	);
};

export default Header;
