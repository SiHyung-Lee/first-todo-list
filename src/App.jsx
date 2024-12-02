import Layout from "./components/Layout.jsx";
import Title from "./components/Title.jsx";
import Controls from "./components/Controls.jsx";
import TodoList from "./components/TodoList.jsx";
import { useState, useRef } from "react";

function App() {
  const idRef = useRef(0);
  console.log(idRef);
  const [list, setList] = useState([]);
  const handleSubmit = (value) => {
    setList((prevList) =>
      prevList.concat({
        id: (idRef.current += 1),
        text: value,
        completed: false,
      }),
    );
  };
  const handleToggle = (id) => {
    setList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    );
  };
  const handleToggleAll = (flag) => {
    setList((prevList) =>
      prevList.map((item) => {
        return { ...item, completed: flag };
      }),
    );
  };
  const handleDelete = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };
  return (
    <div>
      <Layout>
        <Title />
        <Controls onSubmit={handleSubmit} />
        <TodoList
          data={list}
          onToggle={handleToggle}
          onToggleAll={handleToggleAll}
          onDelete={handleDelete}
        />
      </Layout>
    </div>
  );
}

export default App;
