import React from "react";
import Button from "../common/Button";
import { Link, useLocation } from "react-router-dom";
import { NavLists } from "../../utils/data-arrays";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="flexing mt-6 mx-16  font-semibold">
      <h4>UrbanEdge</h4>

      <ul className="flexing space-x-10">
        {
          NavLists.map(({id,name,link})=>(
            <li key={id}>
              <Link to={link} className={`${location.pathname === link ? "text-primary" : ""}`}>{name}</Link>
            </li>
          ))
        }
        
      </ul>

      <div className="space-x-10">
        <Button text={"Login"} link={"/login"}/>
        <Button text={"Register"} bg={"bg-primary text-white"} login={"/register"} />
      </div>
    </header>
  );
};

export default Navbar;
