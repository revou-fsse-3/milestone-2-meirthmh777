import { FC, HTMLAttributes, PropsWithChildren } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  //   AccordionItemState,
} from "react-accessible-accordion";
import { GetForecastProps } from "../../libs/api/GetForecast";
// import "./index.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface indexProps extends HTMLAttributes<HTMLDivElement> {
  data: GetForecastProps;
}

type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ data }) => {
  const dayInAWeek = new Date().getDate();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <>
      <label className="text-2xl font-bold text-white py-2 my-5">Daily</label>
      <Accordion allowZeroExpanded className="bg-transparent gap-5">
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton className="bg-white m-2 p-3 rounded-xl text-xl">
                <div className="flex items-center flex-row gap-5">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="w-12 h-12"
                    alt="weather"
                  />
                  <label className="font-bold">{forecastDays[idx]}</label>
                  <label>{item.weather[0].description}</label>
                  <label className="min-max">
                    {Math.round(item.main.temp_max)}°C /
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mx-10">
              <div className="text-white text-xl text-left table w-full">
                <div className="table-row">
                  <label className="table-cell">Pressure:</label>
                  <label className="table-cell">{item.main.pressure}</label>
                </div>
                <div className="table-row">
                  <label className="table-cell">Humidity:</label>
                  <label className="table-cell">{item.main.humidity}</label>
                </div>
                <div className="table-row">
                  <label className="table-cell">Clouds:</label>
                  <label className="table-cell">{item.clouds.all}%</label>
                </div>
                <div className="table-row">
                  <label className="table-cell">Wind speed:</label>
                  <label className="table-cell">{item.wind.speed} m/s</label>
                </div>
                <div className="table-row">
                  <label className="table-cell">Sea level:</label>
                  <label className="table-cell">{item.main.sea_level} m</label>
                </div>
                <div className="table-row">
                  <label className="table-cell">Feels like:</label>
                  <label className="table-cell">{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default index;
