import "./TodoList.css";
import TodoItem from "./TodoItem.jsx";

function TodoList({ data, onToggle, onToggleAll, onDelete }) {
  const isAllCompleted =
    data.length > 0 && data.every((item) => item.completed);
  const completedCount = data.filter((item) => item.completed).length;
  return (
    <div className="todo-list">
      <div className="todo-header">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={isAllCompleted}
          onChange={(e) => onToggleAll(e.target.checked)}
        />
        <p className="todo-header-text">할일</p>
        {completedCount > 0 && (
          <button className="todo-header-button">
            {completedCount}개 선택 삭제
          </button>
        )}
      </div>
      <div>
        {data.map((item) => (
          <TodoItem
            text={item.text}
            completed={item.completed}
            onToggle={() => onToggle(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
