import { FC, HTMLAttributes, PropsWithChildren } from "react";
import Fieldset from "../../common/FieldSet";
import ForecastInput from "../../common/Input/ForecastInput";

interface ForecastProps extends HTMLAttributes<HTMLDivElement> {}
type ForecastComponents = FC<ForecastProps> & PropsWithChildren;
const Forecast: ForecastComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {children}
      <ForecastInput></ForecastInput>
      <Fieldset legend="Detailed Forecast">
        <h1>This page serves you with detailed forcast for a week.</h1>
      </Fieldset>
    </div>
  );
};

export default Forecast;
