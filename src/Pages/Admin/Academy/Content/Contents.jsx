import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contents() {
  return (
    <section className="bg-base-100 shadow rounded">
      <div className="border-b p-3 flex justify-between items-center">
        <h2>Academy Contents</h2>
        <Link to="/admin/academy/content/add" className="primary_btn">
          Add New Contents
        </Link>
      </div>

      <div className="relative overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Content</th>
              <th>Chapter Name</th>
              <th>Subject Name</th>
              <th>Class Name</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Contents 1</td>
              <td>Chapter 1</td>
              <td>Subject 1</td>
              <td>Class 1</td>
              <td>Category 1</td>
              <td>
                <div className="flex items-center gap-2 text-lg">
                  <button>
                    <FaEdit />
                  </button>
                  <button>
                    <MdDeleteForever className="text-xl hover:text-red-500 duration-200" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
