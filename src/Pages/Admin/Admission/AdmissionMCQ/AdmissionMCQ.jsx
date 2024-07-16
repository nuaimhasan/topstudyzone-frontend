import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetAdmissionMCQQuery } from "../../../../Redux/api/admission/mcqApi";
import Spinner from "../../../../Components/Loader/Spinner/Spinner";

export default function AdmissionMCQ() {
  const { data, isLoading } = useGetAdmissionMCQQuery();
  const mcqs = data?.data;

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="bg-base-100 shadow rounded">
      <div className="flex justify-between items-center p-3">
        <h2>All MCQ</h2>
        <Link to="/admin/admission/mcq/add" className="secondary_btn">
          Add New
        </Link>
      </div>

      <div className="relative overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Question</th>
              <th>Subject</th>
              <th>Chapter</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mcqs?.map((mcq, i) => (
              <tr key={mcq?._id}>
                <td>{i + 1}</td>
                <td>{mcq?.question}</td>
                <td>{mcq?.subject?.name}</td>
                <td>{mcq?.chapter?.name}</td>
                <td>
                  <div className="flex items-center gap-2 text-lg">
                    <Link
                      to={`/admin/admission/mcq/edit/${mcq?._id}`}
                      className="hover:text-primary"
                    >
                      <FaRegEdit />
                    </Link>

                    <button className="hover:text-red-500">
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
