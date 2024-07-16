import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Spinner from "../../../../../Components/Loader/Spinner/Spinner";
import {
  useDeleteAdmissionSubjectMutation,
  useGetAdmissionSubjectsQuery,
} from "../../../../../Redux/api/admission/subjectApi";
import { toast } from "react-toastify";

export default function AdmissionSubjects() {
  const { data, isLoading } = useGetAdmissionSubjectsQuery();
  const subjects = data?.data;

  const [deleteAdmissionSubject] = useDeleteAdmissionSubjectMutation();

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("are you sure delete this subject?");
    if (isConfirm) {
      const res = await deleteAdmissionSubject(id);
      if (res?.data?.success) {
        toast.success("subject delete success");
      } else {
        toast.error("something went wrong!");
      }
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-base-100 shadow rounded">
      <div className="flex justify-between items-center p-3">
        <h2>Admission Subjects</h2>
        <Link to="/admin/admission/subjects/add" className="secondary_btn">
          Add New
        </Link>
      </div>

      <div className="relative overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Subject Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subjects?.map((subject) => (
              <tr key={subject?._id}>
                <td>{subject?.name}</td>
                <td>
                  <div className="flex items-center gap-2 text-lg">
                    <Link
                      to={`/admin/admission/subjects/edit/${subject?._id}`}
                      className="hover:text-primary"
                    >
                      <FaRegEdit />
                    </Link>

                    <button
                      onClick={() => handleDelete(subject?._id)}
                      className="hover:text-red-500"
                    >
                      <MdDelete className="text-xl" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
