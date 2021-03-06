import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavItem,
} from "./styles";
import { useParams } from "react-router-dom";
import logo from "../../assets/imgs/IRlogo.png";

function NavBar({ params }) {
  const { email } = useParams();
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "170px", height: "50px" }}
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavItem>
            <a
              href="https://impactrooms.com/"
              style={{ textDecoration: "none", color: "#3c4050" }}
            >
              Home
            </a>
          </NavItem>
          <NavItem>
            <a
              href="https://impactrooms.com/companies/"
              style={{ textDecoration: "none", color: "#3c4050" }}
            >
              Companies
            </a>
          </NavItem>
          <NavItem>
            <a
              href="https://impactrooms.com/investors/"
              style={{ textDecoration: "none", color: "#3c4050" }}
            >
              Investors
            </a>
          </NavItem>
          <NavItem>
            <a
              href="https://impactrooms.com/about-us/"
              style={{ textDecoration: "none", color: "#3c4050" }}
            >
              About Us
            </a>
          </NavItem>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">" "</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
}

export default NavBar;
