import todo from "../../assets/todo.png";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img className="logo" src={todo} alt="todo" />
    </div>
  );
}

export default Header;
