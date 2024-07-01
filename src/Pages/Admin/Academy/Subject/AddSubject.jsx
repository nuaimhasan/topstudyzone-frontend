import { useGetAcademyClassesQuery } from "../../../../Redux/api/academy/classApi";
import { useGetAcademyCategoriesQuery } from "../../../../Redux/api/academy/categoryApi";
import {
  useAddAcademySubjectMutation,
  useGetAcademySubjectsQuery,
} from "../../../../Redux/api/academy/subjectApi";

export default function AddSubject() {
  const { data: subjects } = useGetAcademySubjectsQuery();
  const { data: classes } = useGetAcademyClassesQuery();
  const { data: categories } = useGetAcademyCategoriesQuery();

  console.log(categories?.data);

  const [addAcademySubject, { isLoading }] = useAddAcademySubjectMutation();

  return (
    <section>
      <div className="bg-base-100 rounded shadow">
        <h2 className="p-2 border-b text-lg font-medium">Add Subject</h2>

        <form className="p-4">
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
              <select name="category" required>
                {categories?.data?.map((category) => (
                  <option key={category?._id} value={category?._id}>
                    {category?.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-1">Class Name</p>
              <select name="class" required>
                {classes?.data?.map((clas) => (
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
