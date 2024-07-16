import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  useDeleteAdmissionChapterMutation,
  useGetAdmissionChaptersQuery,
} from "../../../../../Redux/api/admission/chapterApi";
import { toast } from "react-toastify";
import Spinner from "../../../../../Components/Loader/Spinner/Spinner";
import { useGetAdmissionSubjectsQuery } from "../../../../../Redux/api/admission/subjectApi";
import { useEffect, useState } from "react";

export default function AdmissionChapters() {
  const { data: subject } = useGetAdmissionSubjectsQuery();
  const subjects = subject?.data;

  const [selectedSubject, setSelectedSubject] = useState("");
  useEffect(() => {
    if (subjects?.length > 0) setSelectedSubject(subjects[0]?._id);
  }, [subjects]);

  let query = {};
  query["subject"] = selectedSubject;

  const { data, isLoading } = useGetAdmissionChaptersQuery({ ...query });
  const chapters = data?.data;

  const [deleteAdmissionChapter] = useDeleteAdmissionChapterMutation();

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("are you sure delete is chapter?");
    if (isConfirm) {
      const res = await deleteAdmissionChapter(id);
      if (res?.data?.success) {
        toast.success("chapter delete success");
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
        <h2>Admission Chapter</h2>
        <Link to="/admin/admission/chapters/add" className="secondary_btn">
          Add New
        </Link>
      </div>

      <div className="p-4 pt-0 flex items-center gap-3 text-[15px]">
        <p className="text-neutral-content">Filter Subject:</p>
        <select
          name="subject"
          onChange={(e) => setSelectedSubject(e.target.value)}
          defaultValue={selectedSubject}
          className="w-max"
        >
          {subjects?.map((subject) => (
            <option key={subject?._id} value={subject?._id}>
              {subject?.name}
            </option>
          ))}
        </select>
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
            {chapters?.length > 0 ? (
              chapters?.map((chapter) => (
                <tr key={chapter?._id}>
                  <td>{chapter?.name}</td>
                  <td>{chapter?.subject?.name}</td>
                  <td>
                    <div className="flex items-center gap-2 text-lg">
                      <Link
                        to={`/admin/admission/chapters/edit/${chapter?._id}`}
                        className="hover:text-primary"
                      >
                        <FaRegEdit />
                      </Link>

                      <button
                        onClick={() => handleDelete(chapter?._id)}
                        className="hover:text-red-500"
                      >
                        <MdDelete className="text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-red-500">No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
