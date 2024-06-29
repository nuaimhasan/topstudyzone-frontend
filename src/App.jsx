import Routers from "./Routers/Routers";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

export default function App() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (location?.pathname == "/admin") {
  //     navigate("/admin/dashboard");
  //   }
  // }, [navigate]);

  return (
    <>
      <Routers />
    </>
  );
}
