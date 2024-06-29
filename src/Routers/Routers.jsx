import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import MainLayout from "../Layout/MainLayout";

//--------------------------------------Admin Routes
const AdminLayout = lazy(() => import("../Layout/AdminLayout"));
const Dashboard = lazy(() => import("../Pages/Admin/Dashboard/Dashboard"));

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* ---------Admin Routes----------- */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
