import { FC, HTMLAttributes, PropsWithChildren } from "react";
import FieldSet from "../../common/FieldSet";

interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <FieldSet legend="Home Page">
        <h1>Explore current weather by navigating to the Weather page.</h1>
      </FieldSet>
    </div>
  );
};

export default index;
