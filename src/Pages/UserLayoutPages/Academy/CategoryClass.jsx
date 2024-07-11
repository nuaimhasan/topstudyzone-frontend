import { Link } from "react-router-dom";
import { useGetAcademyClassesQuery } from "../../../Redux/api/academy/classApi";

export default function CategoryClass({ category }) {
  const { data } = useGetAcademyClassesQuery(category);

  return (
    <>
      {data?.data?.map((cls) => (
        <li key={cls?._id}>
          <Link
            to={`/academy/class-${cls?._id}/subjects`}
            className="flex items-center gap-4 py-2 shadow px-4 hover:bg-primary/10 duration:300"
          >
            <img
              src="/src/assets/images/catagory_academy.png"
              alt=""
              className="w-8 h-8"
            />
            <h2>{cls?.name}</h2>
          </Link>
        </li>
      ))}
    </>
  );
}
