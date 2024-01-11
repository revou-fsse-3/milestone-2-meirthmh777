import { FC, HTMLAttributes } from "react";
import { Outlet } from "react-router-dom";
import NavLink from "../common/NavLink";

interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <nav className={"w-full h-[2re] max-w-[30rem] top-0 m-auto px-8 py-4 "}>
        <ul
          className={
            "flex gap-4" + " text-2xl font-bold text-black justify-center"
          }
        >
          <NavLink to="/" label="Home" />
          <NavLink to="/weather" label="Weather" />
          {/* <NavLink to="/forecast" label="Forecast" /> */}
        </ul>
      </nav>
      <main className="px-4 py-5">
        <Outlet />
      </main>
    </div>
  );
};

export default index;
