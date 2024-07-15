import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AdmissionMCQ() {
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
            <tr>
              <td>1</td>
              <td>Mcq Question?</td>
              <td>subject</td>
              <td>Chapter</td>
              <td>
                <div className="flex items-center gap-2 text-lg">
                  <Link
                    to={`/admin/admission/mcq/edit/${1}`}
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
