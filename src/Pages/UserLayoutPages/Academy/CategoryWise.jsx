import { Link } from "react-router-dom";
import { useGetAcademyCategoriesQuery } from "../../../Redux/api/academy/categoryApi";

export default function CategoryWise() {
  const { data } = useGetAcademyCategoriesQuery();
  const categories = data?.data;

  return (
    <section className="py-5">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center section_line italic">
        ক্যাটাগরি ভিত্তিক
      </h2>

      <div className="mt-8 grid grid-cols-3 gap-6">
        {categories?.map((category) => (
          <div key={category?._id} className="rounded overflow-hidden shadow">
            <div className="bg-primary text-base-100 p-3">
              <h2 className="text-xl">{category?.name}</h2>
            </div>
            <div className="bg-base-100">
              <ul className="flex flex-col gap-2">
                {category?.classes?.map((cls) => (
                  <li key={cls?._id}>
                    <Link
                      to={`/academy/class-${cls?._id}/subjects`}
                      className="flex items-center gap-4 py-2 shadow px-4 hover:bg-primary/10 duration:300"
                    >
                      <img
                        src="/src/assets/images/catagory_academy.png"
                        alt=""
                        className="w-9 h-9"
                      />
                      <hp>{cls?.name}</hp>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
