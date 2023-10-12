import PropTypes from "prop-types";

export default function TodoListCategory({ icon, text }) {
  return (
    <div>
      <img src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
}

TodoListCategory.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};
