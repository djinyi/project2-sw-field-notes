src/NavBar.jsimport React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
            <NavLink to="/PostList">
                Notes
            </NavLink>
            <NavLink to="/submitpost">
                Submit a Post 
            </NavLink>

        </div>
    )
}

export default NavBar;