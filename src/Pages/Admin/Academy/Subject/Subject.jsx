import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteAcademySubjectMutation,
  useGetAcademySubjectsQuery,
} from "../../../../Redux/api/academy/subjectApi";

export default function Subject() {
  const { data, isLoading } = useGetAcademySubjectsQuery();
  const subjects = data?.data;

  const [deleteAcademySubject] = useDeleteAcademySubjectMutation();

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this category?");
    if (isConfirm) {
      const res = await deleteAcademySubject(id);
      if (res?.data?.success) {
        Swal.fire("", "Subject delete success", "success");
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
        <h2>Academy Subject</h2>
        <Link to="/admin/academy/subject/add" className="primary_btn">
          Add New Subject
        </Link>
      </div>

      <div className="relative overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Subject Name</th>
              <th>Class Name</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subjects?.map((subject) => (
              <tr key={subject?._id}>
                <td>{subject?.order}</td>
                <td>{subject?.name}</td>
                <td>{subject?.class?.name}</td>
                <td>{subject?.category?.name}</td>
                <td>
                  <div className="flex items-center gap-2 text-lg">
                    <Link to={`/admin/academy/subject/edit/${subject?._id}`}>
                      <FaEdit />
                    </Link>
                    <button onClick={() => handleDelete(subject?._id)}>
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
