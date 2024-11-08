import { Link } from "react-router-dom";

const Button = ({ text, bg, link, onclick }) => {
  return (
    <Link to={link} onClick={onclick}>
      <button
        className={`${bg} px-5 py-2 rounded-md border-primary border-2 text-lg`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
