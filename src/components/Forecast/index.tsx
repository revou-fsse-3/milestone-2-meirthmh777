import { FC, HTMLAttributes, PropsWithChildren } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  //   AccordionItemState,
} from "react-accessible-accordion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { GetForecastProps } from "../../libs/api/GetForecast";

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
      <label className="text-3xl font-bold text-white my-10">Daily</label>
      <Accordion allowZeroExpanded className="bg-transparent gap-5">
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton className="bg-white m-2 p-3 rounded-xl bg-opacity-70 hover:bg-opacity-100">
                <div className="flex items-center flex-row gap-5 justify-between">
                  <div className="flex gap-3 items-center">
                    <img
                      src={`/icons/${item.weather[0].icon}.png`}
                      className="w-12 h-12"
                      alt="weather"
                    />
                    <label className="font-bold text-xl text-black">
                      {forecastDays[idx]}
                    </label>
                  </div>
                  <div className="flex gap-4 items-center ">
                    <label className="text-xl">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max text-xl">
                      {Math.round(item.main.temp_max)}°C /
                      {Math.round(item.main.temp_min)}°C
                    </label>
                    <div className="p-2 border-2 rounded-xl bg-indigo-500 text-white shadow-2xl">
                      <ArrowDownwardIcon />
                    </div>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mx-4">
              <div className="text-white text-xl text-left table w-full bg-gray-700 bg-opacity-70 rounded-lg px-8 py-4">
                <div className="w-7/12">
                  <p className="flex justify-between">
                    <span className="">Pressure:</span>
                    <span className="">{item.main.pressure}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="">Humidity:</span>
                    <span className="">{item.main.humidity}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="">Clouds:</span>
                    <span className="">{item.clouds.all}%</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="">Wind speed:</span>
                    <span className="">{item.wind.speed} m/s</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="">Sea level:</span>
                    <span className="">{item.main.sea_level} m</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="">Feels like:</span>
                    <span className="">{item.main.feels_like}°C</span>
                  </p>
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
