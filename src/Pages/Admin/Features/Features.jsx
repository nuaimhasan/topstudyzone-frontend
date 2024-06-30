import { Link } from "react-router-dom";
// import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export default function Features() {
  return (
    <section>
      <div className="bg-base-100 rounded shadow">
        <div className="flex justify-between items-center border-b p-2 ">
          <h2 className="text-lg font-medium">All Features</h2>
          <Link to="/admin/features/add" className="primary_btn text-sm">
            Add New
          </Link>
        </div>

        <div className="relative overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Color</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BASIC</td>
                <td>Silver</td>
                <td>Laptop</td>
                <td>$2999</td>
                <td>
                  <Link
                    to={`/admin/features/edit/1`}
                    className="font-medium text-blue-600"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Pro</td>
                <td>White</td>
                <td>Laptop PC</td>
                <td>$1999</td>
                <td>
                  <Link
                    to={`/admin/features/edit/2`}
                    className="font-medium text-blue-600"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
