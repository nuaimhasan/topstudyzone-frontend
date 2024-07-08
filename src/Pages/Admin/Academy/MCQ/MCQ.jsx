import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  useDeleteAcademyMCQMutation,
  useGetAcademyMCQQuery,
} from "../../../../Redux/api/academy/mcqApi";
import Swal from "sweetalert2";

export default function MCQ() {
  const { data } = useGetAcademyMCQQuery();
  const mcqs = data?.data;

  const [deleteAcademyMCQ] = useDeleteAcademyMCQMutation();

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this category?");
    if (isConfirm) {
      const res = await deleteAcademyMCQ(id);
      if (res?.data?.success) {
        Swal.fire("", "MCQ delete success", "success");
      } else {
        Swal.fire("", "something went wront!", "error");
        console.log(res);
      }
    }
  };

  return (
    <section className="bg-base-100 shadow rounded">
      <div className="border-b p-3 flex justify-between items-center">
        <h2>Academy MCQ</h2>
        <Link to="/admin/academy/mcq/add" className="primary_btn">
          Add New MCQ
        </Link>
      </div>

      <div className="relative overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>MCQ</th>
              <th>Category Name</th>
              <th>Class Name</th>
              <th>Subject Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mcqs?.map((mcq, i) => (
              <tr key={mcq?._id}>
                <td>{i + 1}</td>
                <td>{mcq?.question}</td>
                <td>{mcq?.category?.name}</td>
                <td>{mcq?.class?.name}</td>
                <td>{mcq?.subject?.name}</td>
                <td>
                  <div className="flex items-center gap-2 text-lg">
                    <button>
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(mcq?._id)}>
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
