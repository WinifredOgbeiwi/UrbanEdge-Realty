import { Link } from "react-router-dom";

const Button = ({ text, link, onclick,id,w }) => {
  return (
    <Link to={link} onClick={onclick}>
      <button
        className={`${
          id !== "light" ? "bg-primary text-white" : ""
        } ${w} px-5 py-2 rounded-md border-primary border-2 text-lg`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
