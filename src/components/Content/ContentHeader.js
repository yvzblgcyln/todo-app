import React, { useState } from "react";
import plus from "../../assets/plus.png";

function ContentHeader({ todo, setTodo }) {
  const [input, setInput] = useState("");

  const Add = () => {
    input &&
      setTodo([...todo, { task: input, completed: false, editable: false }]);
    setInput("");
  };

  return (
    <div className="content-header">
      <input
        className="todo-input"
        placeholder="What do you do?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <img className="plus" src={plus} alt="plus" onClick={Add} />
    </div>
  );
}

export default ContentHeader;
