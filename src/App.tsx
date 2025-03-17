import Layout from "./components/ui/Layout.tsx";
import { ThemeProvider } from "./components/Theme-provider.tsx";
import TodoList from "./components/TodoList.tsx";
import AddTodo from "./components/AddTodo.tsx";
import Filter from "./components/Filter.tsx";
import Pagination from "./components/Pagination.tsx";
import { Toaster } from "@/components/ui/sonner";
const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <AddTodo />
          <Filter />
          <TodoList />
          <Pagination />
          <Toaster />
        </Layout>
      </ThemeProvider>
    </>
  );
};
export default App;
