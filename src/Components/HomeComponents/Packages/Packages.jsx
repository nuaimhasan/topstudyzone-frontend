import PackageCards from "../../PackageCards/PackageCards";

export default function Packages() {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="tetx-2xl sm:text-3xl font-bold text-primary text-center italic section_line">
          OUR PACKAGE LIST
        </h2>

        <div className="mt-10">
          <PackageCards />
        </div>
      </div>
    </section>
  );
}
