import edit from "../../assets/edit.png";
import remove from "../../assets/remove.png";

function ContentBody({ todo, setTodo, filtered, tab }) {
  if (tab === "inProgress") {
    filtered = todo.filter((todo) => todo.completed === false);
  } else if (tab === "completed") {
    filtered = todo.filter((todo) => todo.completed === true);
  } else {
    filtered = todo;
  }

  const editTask = (index, e) => {
    const temp = [...todo];
    const item = todo[index];
    item.task = e.target.value;
    setTodo(temp);
  };
  const deleteBtn = (index) => {
    const temp = [...todo];
    temp.splice(index, 1);
    setTodo(temp);
  };
  const swapCheck = (index) => {
    const temp = [...todo];
    const item = todo[index];
    item.completed = !item.completed;
    setTodo(temp);
  };
  const editBtn = (index) => {
    const temp = [...todo];
    const item = todo[index];
    item.editable = !item.editable;
    setTodo(temp);
  };

  return (
    <div className="content-body">
      {filtered.map((data, i) => (
        <div className="task-line" key={i}>
          <div className="task-line-left">
            <input
              className="checkbox"
              type="checkbox"
              checked={data.completed}
              onChange={() => swapCheck(i)}
            />
            {data.editable && (
              <input
                className="task-edit"
                value={data.task}
                onChange={(e) => editTask(i, e)}
              />
            )}
            {!data.editable && (
              <div
                className={data.completed ? "task task-completed " : "task"}
                onClick={() => editBtn(i)}
              >
                {data.task}
              </div>
            )}
          </div>
          <div className="task-line-right">
            <img
              className="edit"
              src={edit}
              alt="edit"
              onClick={() => editBtn(i)}
            />
            <img
              className="remove"
              src={remove}
              alt="remove"
              onClick={() => deleteBtn(i)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentBody;
