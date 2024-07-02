import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  useDeleteAcademyChapterMutation,
  useGetAcademyChaptersQuery,
} from "../../../../Redux/api/academy/chapterApi";
import Swal from "sweetalert2";

export default function Chapters() {
  const { data, isLoading } = useGetAcademyChaptersQuery();
  const chapters = data?.data;

  const [deleteAcademyChapter] = useDeleteAcademyChapterMutation();

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this chapter?");
    if (isConfirm) {
      const res = await deleteAcademyChapter(id);
      if (res?.data?.success) {
        Swal.fire("", "chapter delete success", "success");
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
        <h2>Academy Chapter</h2>
        <Link to="/admin/academy/chapter/add" className="primary_btn">
          Add New Chapter
        </Link>
      </div>

      <div className="relative overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Chapter Name</th>
              <th>Category Name</th>
              <th>Class Name</th>
              <th>Subject Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {chapters?.map((chapter) => (
              <tr key={chapter?._id}>
                <td>{chapter?.order}</td>
                <td>{chapter?.name}</td>
                <td>{chapter?.category?.name}</td>
                <td>{chapter?.class?.name}</td>
                <td>{chapter?.subject?.name}</td>
                <td>
                  <div className="flex items-center gap-2 text-lg">
                    <Link to={`/admin/academy/chapter/edit/${chapter?._id}`}>
                      <FaEdit />
                    </Link>
                    <button onClick={() => handleDelete(chapter?._id)}>
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
