import React, { useState } from "react";
import Button from "../common/Button";
import { Link, useLocation } from "react-router-dom";
import { NavLists } from "../../utils/data-arrays";
import useAuthStatus from "../../hooks/useAuthStatus";
import { AiOutlineMenuFold } from "react-icons/ai";
import { ROUTES } from "../../utils/routes";

const Navbar = () => {
const {loggedIn} = useAuthStatus();
const location = useLocation();
const [isShown, setIsShown] = useState(false);

  return (
    <header className="flex justify-between items-center mt-6 mx-16 text-lg font-semibold ">
      
      <h4>UrbanEdge</h4>

      <ul className="hidden md:flex flex-row space-x-12">
        {NavLists.map(({ id, name, link }) => (
          <li key={id}>
            <Link
              to={link}
              className={`${location.pathname === link ? "text-primary" : ""}`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
        {loggedIn ? (
          <Button text={"Profile"} link={ROUTES.PROFILE} id="full" />
        ) : (
          <div className="space-x-10 flex">
            <Button text={"Login"} id="light" link={ROUTES.LOGIN} />
            <Button text={"Register"} link={ROUTES.REGISTER} />
          </div>
        )}
      </div>
      <AiOutlineMenuFold
        className="block md:hidden"
        onClick={() => setIsShown(!isShown)}
      />
      {isShown && (
        <ul className="  bg-red-600  top-0 w-full">
          {NavLists.map(({ id, name, link }) => (
            <li key={id}>
              <Link
                to={link}
                className={`${
                  location.pathname === link ? "text-primary" : ""
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
