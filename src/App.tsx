import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Fragment } from "react";
import Layout from "./Layout";
import WeatherComponent from "./pages/Weather/WeatherPage";
// import ForecastComponent from "./pages/Forecast/Forecast";
import Home from "./pages/Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="/weather" element={<WeatherComponent />}></Route>
      {/* <Route path="/forecast" element={<ForecastComponent />}></Route> */}
    </Route>
  )
);

function App() {
  return (
    <Fragment>
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg ">
        <h1 className="text-5xl font-bold p-8">Weather App 🌤️</h1>
        <RouterProvider router={router} />
      </div>
    </Fragment>
  );
}

export default App;
