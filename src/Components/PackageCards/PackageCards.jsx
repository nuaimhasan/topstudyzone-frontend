import PackageCard from "./PackageCard";

export default function PackageCards() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
      <PackageCard />
      <PackageCard />
      <PackageCard />
    </div>
  );
}
