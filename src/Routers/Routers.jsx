import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import MainLayout from "../Layout/MainLayout";

//--------------------------------------Admin Routes
const AdminLayout = lazy(() => import("../Layout/AdminLayout"));
const Dashboard = lazy(() => import("../Pages/Admin/Dashboard/Dashboard"));

const Categories = lazy(() =>
  import("../Pages/Admin/Academy/Category/Categories")
);
const AddCategory = lazy(() =>
  import("../Pages/Admin/Academy/Category/AddCategory")
);
const EditCategory = lazy(() =>
  import("../Pages/Admin/Academy/Category/EditCategory")
);

const Packsges = lazy(() => import("../Pages/Admin/Packages/Packages"));
const AddPackage = lazy(() => import("../Pages/Admin/Packages/AddPackage"));
const EditPackage = lazy(() => import("../Pages/Admin/Packages/EditPackage"));

const Features = lazy(() => import("../Pages/Admin/Features/Features"));
const AddFeature = lazy(() => import("../Pages/Admin/Features/AddFeature"));
const EditFeature = lazy(() => import("../Pages/Admin/Features/EditFeature"));

const Admins = lazy(() => import("../Pages/Admin/Admins/Admins"));
const AddAdmin = lazy(() => import("../Pages/Admin/Admins/AddAdmin"));

const Logo = lazy(() => import("../Pages/Admin/FrontEndSetting/Logo/Logo"));
const Banner = lazy(() =>
  import("../Pages/Admin/FrontEndSetting/Banner/Banner")
);
const About = lazy(() => import("../Pages/Admin/FrontEndSetting/About/About"));
const ContactUs = lazy(() =>
  import("../Pages/Admin/FrontEndSetting/ContactUs/ContactUs")
);

const Profile = lazy(() =>
  import("../Pages/Admin/GeneralSetting/Profile/Profile")
);

const SEO = lazy(() => import("../Pages/Admin/SEO/SEO"));

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

          <Route path="academy/categories" element={<Categories />} />
          <Route path="academy/category/add" element={<AddCategory />} />
          <Route path="academy/category/edit/:id" element={<EditCategory />} />

          <Route path="packages" element={<Packsges />} />
          <Route path="packages/add" element={<AddPackage />} />
          <Route path="packages/edit/:id" element={<EditPackage />} />

          <Route path="features" element={<Features />} />
          <Route path="features/add" element={<AddFeature />} />
          <Route path="features/edit/:id" element={<EditFeature />} />

          <Route path="admins" element={<Admins />} />
          <Route path="admins/add" element={<AddAdmin />} />

          <Route path="front-end/logo" element={<Logo />} />
          <Route path="front-end/banner" element={<Banner />} />
          <Route path="front-end/about" element={<About />} />
          <Route path="front-end/contact" element={<ContactUs />} />

          <Route path="general-setting/profile" element={<Profile />} />

          <Route path="seo" element={<SEO />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
