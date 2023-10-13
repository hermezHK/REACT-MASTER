import PropTypes from "prop-types";

export default function TodoListCategory({ icon, text, setCurrentCategory }) {
  return (
    <button
      className="grid place-items-center cursor-pointer"
      onClick={() => setCurrentCategory(text)}
    >
      <img
        src={icon}
        alt=""
        className="w-[51px] h-[51px] p-2 shadow rounded-md bg-white"
      />
      <p className="mt-2 text-gray-400">{text}</p>
    </button>
  );
}

TodoListCategory.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  setCurrentCategory: PropTypes.func,
};
