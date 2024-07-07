import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useGetAcademyCategoriesQuery } from "../../../../Redux/api/academy/categoryApi";
import {
  useAddAcademySubjectMutation,
  useGetAcademySubjectsQuery,
} from "../../../../Redux/api/academy/subjectApi";
import { useGetAcademyClassesQuery } from "../../../../Redux/api/academy/classApi";

export default function AddSubject() {
  const navigate = useNavigate();

  const { data: category } = useGetAcademyCategoriesQuery();
  const categories = category?.data;

  const [selectedCategory, setSelectedCategory] = useState(
    category?.data[0]?._id
  );

  useEffect(() => {
    setSelectedCategory(category?.data[0]?._id);
  }, [category?.data]);

  const { data: cls } = useGetAcademyClassesQuery(selectedCategory);
  const classes = cls?.data;

  const [selectedClass, setSelectedClass] = useState(cls?.data[0]?._id);

  useEffect(() => {
    setSelectedClass(cls?.data[0]?._id);
  }, [cls?.data]);

  const { data: subject, isLoading: subjectLoading } =
    useGetAcademySubjectsQuery(selectedClass);
  const subjects = subject?.data;

  const [order, setOrder] = useState(1);

  useEffect(() => {
    if (!subjectLoading) setOrder(subjects?.length + 1);
  }, [selectedClass, subjects?.length, subjectLoading]);

  console.log(order);

  const [addAcademySubject, { isLoading }] = useAddAcademySubjectMutation();

  const handleAdd = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const order = e.target.order.value;
    const category = e.target.category.value;
    const clas = e.target.class.value;

    const info = {
      name,
      order,
      category,
      class: clas,
    };

    const res = await addAcademySubject(info);

    if (res?.data?.success) {
      Swal.fire("", "Subject add success", "success");
      navigate("/admin/academy/subjects");
    } else {
      Swal.fire("", "Something went wront!", "error");
      console.log(res?.error?.data?.error);
    }
  };

  return (
    <section>
      <div className="bg-base-100 rounded shadow">
        <h2 className="p-2 border-b text-lg font-medium">Add Subject</h2>

        <form onSubmit={handleAdd} className="p-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <p className="mb-1">Category Name</p>
              <select
                name="category"
                required
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories?.map((category) => (
                  <option key={category?._id} value={category?._id}>
                    {category?.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-1">Class Name</p>
              <select
                name="class"
                required
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                {classes?.map((clas) => (
                  <option key={clas?._id} value={clas?._id}>
                    {clas?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            <div>
              <p className="mb-1">Subject Name</p>
              <input type="text" name="name" required />
            </div>
            <div>
              <p className="mb-1">Order</p>
              <input type="number" name="order" required value={order} />
            </div>
          </div>

          <div className="mt-4">
            <button className="primary_btn">
              {isLoading ? "Loading..." : "Add Subject"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
