import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AdmissionSubjects() {
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
            <tr>
              <td>Bangla</td>
              <td>
                <div className="flex items-center gap-2 text-lg">
                  <Link
                    to={`/admin/admission/subjects/edit/${1}`}
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
