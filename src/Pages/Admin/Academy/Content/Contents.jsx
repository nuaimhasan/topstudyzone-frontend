import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  useDeleteAcademyContentMutation,
  useGetAcademyContentsQuery,
} from "../../../../Redux/api/academy/contentApi";
import Swal from "sweetalert2";

export default function Contents() {
  const { data, isLoading } = useGetAcademyContentsQuery();
  const contents = data?.data;

  const [deleteAcademyClass] = useDeleteAcademyContentMutation();

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
              <th>Category Name</th>
              <th>Class Name</th>
              <th>Subject Name</th>
              <th>Chapter Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contents?.map((content, i) => (
              <tr key={content?._id}>
                <td>{i + 1}</td>
                <td>Content 1</td>
                <td>{content?.category?.name}</td>
                <td>{content?.class?.name}</td>
                <td>{content?.subject?.name}</td>
                <td>{content?.chapter?.name}</td>
                <td>
                  <div className="flex items-center gap-2 text-lg">
                    <Link to={`/admin/academy/content/edit/${content?._id}`}>
                      <FaEdit />
                    </Link>
                    <button onClick={() => handleDelete(content?._id)}>
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
