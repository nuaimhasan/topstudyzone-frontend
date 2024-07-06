import "/src/assets/css/Home.css";
import Hero from "../../Components/HomeComponents/Hero/Hero";
import Feature from "../../Components/HomeComponents/Feature/Feature";
import Packages from "../../Components/HomeComponents/Packages/Packages";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Packages />
    </>
  );
}
