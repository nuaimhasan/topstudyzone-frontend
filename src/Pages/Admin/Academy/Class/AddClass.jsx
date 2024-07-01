import Swal from "sweetalert2";
import {
  useAddAcademyClassMutation,
  useGetAcademyClassesQuery,
} from "../../../../Redux/api/academy/classApi";
import { useNavigate } from "react-router-dom";
import { useGetAcademyCategoriesQuery } from "../../../../Redux/api/academy/categoryApi";

export default function AddClass() {
  const navigate = useNavigate();
  const { data } = useGetAcademyClassesQuery();
  const classes = data?.data;

  const { data: categoryData } = useGetAcademyCategoriesQuery();
  const categories = categoryData?.data;

  const [addAcademyClass, { isLoading }] = useAddAcademyClassMutation();

  const handleAdd = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const order = e.target.order.value;
    const category = e.target.category.value;

    const info = {
      name,
      order,
      category,
    };

    const res = await addAcademyClass(info);

    if (res?.data?.success) {
      Swal.fire("", "Class add success", "success");
      navigate("/admin/academy/classes");
    } else {
      Swal.fire("", "Something went wront!", "error");
    }
  };

  return (
    <section>
      <div className="bg-base-100 rounded shadow">
        <h2 className="p-2 border-b text-lg font-medium">Add Class</h2>

        <form onSubmit={handleAdd} className="p-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <p className="mb-1">Class Name</p>
              <input type="text" name="name" required />
            </div>
            <div>
              <p className="mb-1">Order</p>
              <input
                type="number"
                name="order"
                required
                defaultValue={classes?.length ? classes?.length + 1 : 1}
              />
            </div>
            <div>
              <p className="mb-1">Category Name</p>
              <select name="category" required>
                {categories?.map((category) => (
                  <option key={category?._id} value={category?._id}>
                    {category?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-2">
            <button disabled={isLoading && "disabled"} className="primary_btn">
              {isLoading ? "Loading" : "Add Class"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
