import React from "react";
import Button from "../common/Button";
import { Link, useLocation } from "react-router-dom";
import { NavLists } from "../../utils/data-arrays";
import { getAuth } from "firebase/auth";
import useAuthStatus from "../../hooks/useAuthStatus";

const Navbar = () => {

const {loggedIn} = useAuthStatus();

  const location = useLocation();

  return (
    <header className="flexing mt-6 mx-16 text-lg font-semibold">
      <h4>UrbanEdge</h4>

      <ul className="flexing space-x-12">
        {
          NavLists.map(({id,name,link})=>(
            <li key={id}>
              <Link to={link} className={`${location.pathname === link ? "text-primary" : ""}`}>{name}</Link>
            </li>
          ))
        }
        
      </ul>
{
  loggedIn ?   <Button text={"Profile"} link={"/profile"} id="full"/>
  : 
      <div className="space-x-10 flex">
        <Button text={"Login"} id="light" link={"/login"}/>
        <Button text={"Register"} link={"/register"} />
      </div>
}
    </header>
  );
};

export default Navbar;
