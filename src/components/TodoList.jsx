import "./TodoList.css";
import TodoItem from "./TodoItem.jsx";

function TodoList({
  data,
  onToggle,
  onToggleAll,
  onDelete,
  onDeleteCompleted,
  onUpdate,
}) {
  const isAllCompleted =
    data.length > 0 && data.every((item) => item.completed);
  const completedCount = data.filter((item) => item.completed).length;
  console.log(data);
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
          <button className="todo-header-button" onClick={onDeleteCompleted}>
            {completedCount}개 선택 삭제
          </button>
        )}
      </div>
      <div>
        {data.map((item) => (
          <TodoItem
            id={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={() => onToggle(item.id)}
            onDelete={() => onDelete(item.id)}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
