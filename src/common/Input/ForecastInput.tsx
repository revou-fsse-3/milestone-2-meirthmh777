import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface ForecastInputProps extends HTMLAttributes<HTMLDivElement> {}
type ForecastInputComponents = FC<ForecastInputProps> & PropsWithChildren;
const ForecastInput: ForecastInputComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {children}
      <h1>Hello World!</h1>
    </div>
  );
};

export default ForecastInput;
