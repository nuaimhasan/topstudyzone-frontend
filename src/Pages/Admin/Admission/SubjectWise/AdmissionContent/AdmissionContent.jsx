import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AdmissionContent() {
  return (
    <div className="bg-base-100 shadow rounded">
      <div className="flex justify-between items-center p-3">
        <h2>Admission Content</h2>
        <Link to="/admin/admission/contents/add" className="secondary_btn">
          Add New
        </Link>
      </div>

      <div className="relative overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Chapter Name</th>
              <th>Subject Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>chapter 1</td>
              <td>Bangla</td>
              <td>
                <div className="flex items-center gap-2 text-lg">
                  <Link
                    to={`/admin/admission/contents/edit/${1}`}
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
