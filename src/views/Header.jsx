import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/home"} style={{ textDecoration: "none" }} className="h-logo">
        <img src="/coin-logo.webp" alt="logo" />
        <h3 className="text-white">Coinmania</h3>
      </Link>

      <div className="links">
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          {" "}
          Giris Yap
        </NavLink>
        <NavLink to={"/home"} style={{ textDecoration: "none" }}>
          Anasayfa
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
