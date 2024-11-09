import { Link } from "react-router-dom";

const Button = ({ text, link, onclick,id }) => {
  return (
    <Link to={link} onClick={onclick}>
      <button
        className={`${
          id !== "light" ? "bg-primary text-white" : ""
        } px-5 py-2 w-full rounded-md border-primary border-2 text-lg`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
