import { TodoListCategory } from "./components";
import { categories } from "./core/category";

export default function App() {
  return (
    <>
      <h1>Manage your time well</h1>
      <div>
        <div>
          {categories.map((category) => (
            <TodoListCategory icon={category.icon} text={category.text} />
          ))}
        </div>
      </div>
    </>
  );
}
