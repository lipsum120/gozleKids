import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const TestPage = lazy(() => import("./test"));
const MainPage = lazy(() => import("./main"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/test/" element={<TestPage />} />
    </Routes>
  );
};
