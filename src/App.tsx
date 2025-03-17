import Layout from "./components/ui/Layout.tsx";
import { ThemeProvider } from "./components/theme.tsx";
import TodoList from "./components/TodoList.tsx";
import AddTodo from "./components/AddTodo.tsx";
const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <AddTodo />
          <TodoList />
        </Layout>
      </ThemeProvider>
    </>
  );
};
export default App;
