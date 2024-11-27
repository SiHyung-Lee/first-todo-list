import Layout from "./components/Layout.jsx";
import Title from "./components/Title.jsx";
import Controls from "./components/Controls.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <div>
      <Layout>
        <Title />
        <Controls />
        <TodoList />
      </Layout>
    </div>
  );
}

export default App;
