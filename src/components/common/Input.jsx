import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({
  text,
  type,
  placeholder,
  id,
  onchange,
  value,
  passwordVisibility,
  setPasswordVisibility,
}) => {
  return (
    <div className="flex flex-col relative ">
      <label htmlFor={id} className="">
        {text}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="bg-[#f1ecf8] placeholder:text-gray-500 outline-none mb-6 px-1 rounded-md py-2"
        onChange={onchange}
        value={value}
        required
    
      />

      {id === "password" && (
        <div
          className="absolute right-2 top-[36px] hover:cursor-pointer"
          onClick={() => setPasswordVisibility(!passwordVisibility)}
        >
          {passwordVisibility ? <FaEye /> : <FaEyeSlash />}
        </div>
      )}
    </div>
  );
};
export default Input;
