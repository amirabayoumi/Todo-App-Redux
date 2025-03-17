const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="m-10 flex justify-between">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <button className="text-2xl font-bold"> ⁕</button>
      </header>

      <main className="m-10">{children}</main>

      <footer className="m-10">Footer</footer>
    </>
  );
};
export default Layout;
