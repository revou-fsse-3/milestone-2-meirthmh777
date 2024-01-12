import { FC, HTMLAttributes, PropsWithChildren } from "react";
import FieldSet from "../../common/FieldSet";
import Clock from "@components/Clock";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <div className="bg-gray-600 bg-opacity-30 py-4 px-8 w-5/12 text-2xl text-white font-bold mx-auto rounded-lg">
        <Clock timezone={0} />
      </div>
      <FieldSet legend="Home Page">
        <h1 className="text-lg">
          Explore current weather by navigating to the Weather page.
        </h1>
      </FieldSet>
    </div>
  );
};

export default index;
