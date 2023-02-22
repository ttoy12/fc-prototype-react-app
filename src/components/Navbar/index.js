import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            WhizCard
          </NavLink>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/sets" activeStyle>
            Sets
          </NavLink>
          <NavLink to="/create" activeStyle>
            Create+
          </NavLink>
          {/*testing what to do if in folder*/}
          <NavLink to="/test" activeStyle>Testing</NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up 
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;