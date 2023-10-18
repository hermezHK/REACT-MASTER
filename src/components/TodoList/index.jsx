import PropTypes from "prop-types";
import { checkCircle } from "../../assets/icons";

export default function TodoList({ tasks, category }) {
  const filterTask = category
    ? tasks?.filter((task) => task.category === category)
    : tasks;

  return (
    <div className="my-3 rounded-xl bg-gray-300 p-3">
      {filterTask && filterTask.length > 0 ? (
        filterTask.map((task) => (
          <div
            key={task.text}
            className="bg-white rounded-xl mb-3 px-2 py-3 flex gap-3"
          >
            <img src={checkCircle} alt="" /> <p>{task.text}</p>
          </div>
        ))
      ) : (
        <>
          <p>nothing to show</p>
        </>
      )}
    </div>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.array,
  category: PropTypes.string,
};
