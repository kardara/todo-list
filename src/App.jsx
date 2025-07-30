import React from "react";
import { BiPlus, BiBasket } from "react-icons/bi";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
const App = () => {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(formData) {
    if (formData.get("todo").lenght == 0) alert("Please add something");
    let todo = formData.get("todo");
    setTodos([...todos, { text: todo, checked: false }]);
    console.log(todos);
  }

  function toggleCheck(index) {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i !== index ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }
  function deleteTodo(index) {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  }
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-9xl font-bold text-gray-100">todos</h1>
      <form action={handleAddTodo}>
        <input
          name="todo"
          type="text"
          placeholder="Add todo..."
          className="border border-gray-300 rounded-2xl p-2 w-96 h-12  placeholder:text-gray-800 "
        />
        <button
          type="submit"
          className="bg-[rgba(1,145,140,255)] cursor-pointer text-white rounded-full p-2 -ml-10"
        >
          <BiPlus size={15} />
        </button>
      </form>
      <ul className="flex flex-col justify-center items-center mt-5">
        {todos.map((todo, index) => (
          <li
            className="flex items-center border-b-1 border-gray-200  w-96 justify-between p-2"
            key={index}
          >
            <div>
              <input
                checked={todo.checked}
                onChange={() => toggleCheck(index)}
                className="w-3 mr-2"
                type="checkbox"
              />
              <span
                className={todo.checked ? "line-through text-gray-300" : ""}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(index)}
              className="bg-gray-300 rounded-full p-1 text-red-500 cursor-pointer"
            >
              <MdDelete size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
