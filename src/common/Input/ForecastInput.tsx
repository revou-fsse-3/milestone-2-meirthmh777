// import { FC, HTMLAttributes, useState } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import SearchForecast from "./SearchCurrentWeather";

// interface ForecastInputProps extends HTMLAttributes<HTMLDivElement> {}
// interface WeatherData {
//   city: string;
//   temperature: number;
//   weatherCondition: string;
//   windSpeed: number;
//   humidity: number;
//   pressure: number;
//   feelsLike: number;
//   seaLevel: number;
// }
// type ForecastInputComponents = FC<ForecastInputProps>;

// const ForecastInput: ForecastInputComponents = ({ ...resProps }) => {
//   const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

//   const handleSearchChange = async (weatherData: WeatherData) => {
//     setWeatherData(weatherData);
//   };
//   // const WEEK_DAYS = [
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   //   "Saturday",
//   //   "Sunday",
//   // ];
//   // const dayInAWeek = new Date().getDay();
//   // const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
//   //   WEEK_DAYS.slice(0, dayInAWeek)
//   // );
//   return (
//     <div
//       {...resProps}
//       className={`${resProps.className ? resProps.className : ""}`}
//     >
//       <SearchForecast onSearchChange={handleSearchChange} />
//       <Accordion>
//         {/* {data.slice.splice(0,7).map((item, idx) => ())} */}
//         <AccordionSummary
//           expandIcon={<ArrowDownwardIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//         >
//           <Typography>
//             {weatherData && (
//               <div className="text-center flex gap-3">
//                 <p>{weatherData.city}</p>
//                 <p>{weatherData.temperature}°C</p>
//                 <p>{weatherData.weatherCondition}</p>
//               </div>
//             )}
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             <div className="items-center">
//               {weatherData && (
//                 <>
//                   <div>
//                     <span className="text-left">Wind</span>
//                     <span className="ml-3">{weatherData.windSpeed} m/s</span>
//                   </div>
//                   <div>
//                     <span>Humidity</span>
//                     <span className="ml-3">{weatherData.humidity}%</span>
//                   </div>
//                   <div>
//                     <span>Pressure</span>
//                     <span className="ml-3">{weatherData.pressure} hPa</span>
//                   </div>
//                   <div>
//                     <span>Feels like</span>
//                     <span className="ml-3">{weatherData.feelsLike} hPa</span>
//                   </div>
//                   <div>
//                     <span>Sea Level</span>
//                     <span className="ml-3">{weatherData.seaLevel} hPa</span>
//                   </div>
//                 </>
//               )}
//             </div>
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// };

// export default ForecastInput;
