import { useState } from "react";
import {
  useGetAcademyCategoriesQuery,
  useGetSingleAcademyCategoryQuery,
} from "../../../../Redux/api/academy/categoryApi";
import {
  useAddAcademySubjectMutation,
  useGetAcademySubjectsQuery,
} from "../../../../Redux/api/academy/subjectApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddSubject() {
  const navigate = useNavigate();
  const { data: subjects } = useGetAcademySubjectsQuery();
  const { data: category } = useGetAcademyCategoriesQuery();
  const categories = category?.data;

  const [selectedCategory, setSelectedCategory] = useState("");

  const { data: c } = useGetSingleAcademyCategoryQuery(selectedCategory);
  const classes = c?.data?.classes;

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
    }
  };

  return (
    <section>
      <div className="bg-base-100 rounded shadow">
        <h2 className="p-2 border-b text-lg font-medium">Add Subject</h2>

        <form onSubmit={handleAdd} className="p-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <p className="mb-1">Subject Name</p>
              <input type="text" name="name" required />
            </div>
            <div>
              <p className="mb-1">Order</p>
              <input
                type="number"
                name="order"
                required
                defaultValue={
                  subjects?.data?.length ? subjects?.data?.length + 1 : 1
                }
              />
            </div>

            <div>
              <p className="mb-1">Category Name</p>
              <select
                name="category"
                required
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {categories?.map((category) => (
                  <option key={category?._id} value={category?._id}>
                    {category?.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-1">Class Name</p>
              <select name="class" required>
                {classes?.map((clas) => (
                  <option key={clas?._id} value={clas?._id}>
                    {clas?.name}
                  </option>
                ))}
              </select>
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
