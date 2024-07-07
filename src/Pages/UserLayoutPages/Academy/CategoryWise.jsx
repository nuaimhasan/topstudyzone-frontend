import { useGetAcademyCategoriesQuery } from "../../../Redux/api/academy/categoryApi";
import CategoryClass from "./CategoryClass";

export default function CategoryWise() {
  const { data } = useGetAcademyCategoriesQuery();
  const categories = data?.data;

  return (
    <section className="py-5">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center section_line italic">
        ক্যাটাগরি ভিত্তিক
      </h2>

      <div className="mt-8 grid grid-cols-3 gap-6 items-start">
        {categories?.map((category) => (
          <div key={category?._id} className="rounded overflow-hidden shadow">
            <div className="bg-primary text-base-100 p-3">
              <h2 className="text-lg font-medium">{category?.name}</h2>
            </div>
            <div className="bg-base-100">
              <ul className="flex flex-col gap-2">
                <CategoryClass category={category?._id} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
