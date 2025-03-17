const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <button className="text-2xl font-bold"> ⁕</button>
      </header>
      <hr />
      <main>{children}</main>
      <hr />
      <footer>Footer</footer>
    </>
  );
};
export default Layout;
