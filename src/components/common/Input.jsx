import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({
  text,
  type,
  placeholder,
  id,
  passwordVisibility,
  setPasswordVisibility,
}) => {
  return (
    <div className="flex flex-col relative font-medium">
      <label htmlFor={id} className="text-lg">
        {text}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="border-2 border-secondary outline-none mb-5 px-1 rounded-md py-2 mt-1"
        required
      />

      {id === "password" && (
        <div
          className="absolute right-2 top-[45px] hover:cursor-pointer"
          onClick={() => setPasswordVisibility(!passwordVisibility)}
        >
                  {passwordVisibility ? <FaEye /> :  <FaEyeSlash />}
        </div>
      )}
    </div>
  );
};
export default Input;
