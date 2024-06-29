import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import MainLayout from "../Layout/MainLayout";

//--------------------------------------Admin Routes
const AdminLayout = lazy(() => import("../Layout/AdminLayout"));
const Dashboard = lazy(() => import("../Pages/Admin/Dashboard/Dashboard"));
const Packsges = lazy(() => import("../Pages/Admin/Packages/Packages"));
const AddPackage = lazy(() => import("../Pages/Admin/Packages/AddPackage"));
const EditPackage = lazy(() => import("../Pages/Admin/Packages/EditPackage"));

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* ---------Admin Routes----------- */}
        <Route
          path="/admin"
          element={
            <Suspense fallback="Loading...">
              <AdminLayout />
            </Suspense>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="packages" element={<Packsges />} />
          <Route path="packages/add" element={<AddPackage />} />
          <Route path="packages/edit/:id" element={<EditPackage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
