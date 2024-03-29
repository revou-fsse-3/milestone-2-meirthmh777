import { FC, HTMLAttributes } from "react";
import { Outlet } from "react-router-dom";
import NavLink from "../common/NavLink";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}
type LayoutComponents = FC<LayoutProps>;
const Layout: LayoutComponents = () => {
  return (
    <header>
      <Navigations />
      <main className="px-4 py-5">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg p-5">
          <h1 className="text-5xl font-bold p-8">Weather App 🌤️</h1>
          <Outlet />
        </div>
      </main>
    </header>
  );
};

export default Layout;

const Navigations: FC = () => {
  return (
    <nav className="w-full h-[2re] max-w-[30rem] top-0 m-auto px-8 py-4 ">
      <ul className="flex gap-6 text-2xl font-bold text-black justify-center">
        <NavLink to="/" label="Home" />
        <NavLink to="/weather" label="Weather" />
      </ul>
    </nav>
  );
};
