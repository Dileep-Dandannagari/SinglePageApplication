import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container d-flex justify-content-between align-items-center text-white bg-dark">
      <div className="logo-container">
        <Link to={"/"}>
          <img src="https://png.pngtree.com/png-clipart/20221008/original/pngtree-green-letter-d-logo-with-leaf-inside-png-image_8666159.png" />
        </Link>
      </div>
      <div>
        <h2>Dileep's Online Store</h2>
      </div>
      <div className="w-25">
        <ul className="nav-bar d-flex justify-content-around list-unstyled">
          <li>
            <Link to={"/products"} className="text-decoration-none text-white">
              Products
            </Link>
          </li>
          <li>
            <Link to={"/login"} className="text-decoration-none text-white">
              Login
            </Link>
          </li>
          <li>
            <Link to={"/signUp"} className="text-decoration-none text-white">
              signUp
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
