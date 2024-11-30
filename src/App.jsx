import Layout from "./components/Layout.jsx";
import Title from "./components/Title.jsx";
import Controls from "./components/Controls.jsx";
import TodoList from "./components/TodoList.jsx";
import { useState } from "react";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      text: "hello",
      completed: false,
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Layout>
        <Title />
        <Controls />
        <TodoList data={list} />
      </Layout>
    </div>
  );
}

export default App;
