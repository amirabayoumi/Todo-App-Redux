import Layout from "./components/ui/Layout.tsx";
import { ThemeProvider } from "./components/theme.tsx";
import TodoList from "./components/TodoList.tsx";
const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <TodoList />
        </Layout>
      </ThemeProvider>
    </>
  );
};
export default App;
