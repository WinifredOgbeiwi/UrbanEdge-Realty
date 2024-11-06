import { Link } from "react-router-dom";

const Button = ({ text,bg,link }) => {
  return (
    <button className={`${bg} px-5 py-2 rounded-md border-primary border-2 text-lg`}>
      <Link to={link}>
        {text}
      </Link>
    
    </button>
  );
};

export default Button;
