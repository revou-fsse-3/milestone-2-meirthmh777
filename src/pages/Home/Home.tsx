import { FC, HTMLAttributes, PropsWithChildren } from "react";
import Clock from "@components/Clock";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = () => {
  return (
    <div>
      <div className="bg-gray-500 bg-opacity-30 py-4 px-8 w-5/12 text-xl text-white font-bold mx-auto rounded-lg">
        <Clock timezone={0} />
      </div>
      <h2>Home Page</h2>
      <h3>Explore current weather by navigating to the Weather page.</h3>
    </div>
  );
};

export default index;
