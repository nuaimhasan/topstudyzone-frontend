import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  useDeleteAcademyClassMutation,
  useGetAcademyClassesQuery,
} from "../../../../Redux/api/academy/classApi";
import Swal from "sweetalert2";

export default function Classes() {
  const { data, isLoading } = useGetAcademyClassesQuery();
  const classes = data?.data;

  const [deleteAcademyClass] = useDeleteAcademyClassMutation();

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this category?");
    if (isConfirm) {
      const res = await deleteAcademyClass(id);
      if (res?.data?.success) {
        Swal.fire("", "Class delete success", "success");
      } else {
        Swal.fire("", "something went wront!", "error");
      }
    }
  };

  if (isLoading) {
    return <div className="bg-base-100 shadow rounded h-[80vh]"></div>;
  }

  return (
    <section className="bg-base-100 shadow rounded">
      <div className="border-b p-3 flex justify-between items-center">
        <h2>Academy Classes</h2>
        <Link to="/admin/academy/class/add" className="primary_btn">
          Add New Class
        </Link>
      </div>

      <div className="relative overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Class Name</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((clas) => (
              <tr key={clas?._id}>
                <td>{clas?.order}</td>
                <td>{clas?.name}</td>
                <td>{clas?.category?.name}</td>
                <td>
                  <div className="flex items-center gap-2 text-lg">
                    <Link to={`/admin/academy/class/edit/${clas?._id}`}>
                      <FaEdit />
                    </Link>
                    <button onClick={() => handleDelete(clas?._id)}>
                      <MdDeleteForever className="text-xl hover:text-red-500 duration-200" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
