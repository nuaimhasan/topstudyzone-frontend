import { useState } from "react";
import {
  useGetAcademyCategoriesQuery,
  useGetSingleAcademyCategoryQuery,
} from "../../../../Redux/api/academy/categoryApi";
import { useGetSingleAcademyClassQuery } from "../../../../Redux/api/academy/classApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useAddAcademyChapterMutation,
  useGetAcademyChaptersQuery,
} from "../../../../Redux/api/academy/chapterApi";

export default function AddChapter() {
  const navigate = useNavigate();
  const { data: chapters } = useGetAcademyChaptersQuery();

  const { data: category } = useGetAcademyCategoriesQuery();
  const categories = category?.data;

  const [selectedCategory, setSelectedCategory] = useState("");

  const { data: c } = useGetSingleAcademyCategoryQuery(selectedCategory);
  const classes = c?.data?.classes;

  const [selectedClass, setSelectedClass] = useState("");

  const { data: clas } = useGetSingleAcademyClassQuery(selectedClass);
  const subjects = clas?.data?.subjects;

  const [addAcademyChapter, { isLoading }] = useAddAcademyChapterMutation();

  const handleAdd = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const order = e.target.order.value;
    const category = e.target.category.value;
    const clas = e.target.class.value;
    const subject = e.target.subject.value;

    const info = {
      name,
      order,
      category,
      class: clas,
      subject,
    };

    const res = await addAcademyChapter(info);

    if (res?.data?.success) {
      Swal.fire("", "Chapter add success", "success");
      navigate("/admin/academy/chapters");
    } else {
      Swal.fire("", "Something went wront!", "error");
    }
  };

  return (
    <section>
      <div className="bg-base-100 rounded shadow">
        <h2 className="p-2 border-b text-lg font-medium">Add Chapter</h2>

        <form onSubmit={handleAdd} className="p-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <p className="mb-1">Chapter Name</p>
              <input type="text" name="name" required />
            </div>
            <div>
              <p className="mb-1">Order</p>
              <input
                type="number"
                name="order"
                required
                defaultValue={
                  chapters?.data?.length ? chapters?.data?.length + 1 : 1
                }
              />
            </div>
          </div>

          <div className="mt-4 grid sm:grid-cols-3 gap-4">
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

            <div>
              <p className="mb-1">Subject Name</p>
              <select name="subject" required>
                {subjects?.map((subject) => (
                  <option key={subject?._id} value={subject?._id}>
                    {subject?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <button className="primary_btn">
              {isLoading ? "Loading..." : "Add Chapter"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
