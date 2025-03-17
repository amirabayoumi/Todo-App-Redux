import Layout from "./components/ui/Layout.tsx";
import { ThemeProvider } from "./components/theme.tsx";
import TodoList from "./components/TodoList.tsx";
import AddTodo from "./components/AddTodo.tsx";
import Filter from "./components/Filter.tsx";
const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <AddTodo />
          <Filter />
          <TodoList />
        </Layout>
      </ThemeProvider>
    </>
  );
};
export default App;
