import ContentBody from "./ContentBody";
import ContentHeader from "./ContentHeader";
import "./Content.scss";
import { useState } from "react";
import ContentFooter from "./ContentFooter";

function Content() {
  const [todo, setTodo] = useState([
    { task: "read book", completed: false, editable: false },
    { task: "made a web app", completed: true, editable: false },
    { task: "do HW", completed: false, editable: false },
  ]);
  let filtered = todo;
  let [tab, setTab] = useState("all");
  return (
    <div className="content">
      <div className="content-elements">
        <ContentHeader todo={todo} setTodo={setTodo} />
        <ContentBody
          todo={todo}
          setTodo={setTodo}
          filtered={filtered}
          tab={tab}
        />
        <ContentFooter tab={tab} setTab={setTab} />
      </div>
    </div>
  );
}

export default Content;
