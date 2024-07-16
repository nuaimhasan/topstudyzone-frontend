import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import Spinner from "../../../../../Components/Loader/Spinner/Spinner";
import {
  useDeleteAdmissionContentMutation,
  useGetAdmissionContentsQuery,
} from "../../../../../Redux/api/admission/contentApi";
import { useGetAdmissionSubjectsQuery } from "../../../../../Redux/api/admission/subjectApi";
import { useGetAdmissionChaptersQuery } from "../../../../../Redux/api/admission/chapterApi";

export default function AdmissionContent() {
  const { data: subject } = useGetAdmissionSubjectsQuery();
  const subjects = subject?.data;

  const [selectedSubject, setSelectedSubject] = useState("");
  useEffect(() => {
    if (subjects?.length > 0) setSelectedSubject(subjects[0]?._id);
  }, [subjects]);

  let chapterQuery = {};
  chapterQuery["subject"] = selectedSubject;

  const { data: chapter } = useGetAdmissionChaptersQuery({ ...chapterQuery });
  const chapters = chapter?.data;

  const [selectedChapter, setSelectedChapter] = useState("");
  useEffect(() => {
    if (chapters?.length > 0) setSelectedChapter(chapters[0]?._id);
  }, [chapters]);

  let query = {};
  query["chapter"] = selectedChapter;

  const { data, isLoading } = useGetAdmissionContentsQuery({ ...query });
  const contents = data?.data;

  const [deleteAdmissionContent] = useDeleteAdmissionContentMutation();

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("are you sure delete this content?");
    if (isConfirm) {
      const res = await deleteAdmissionContent(id);
      if (res?.data?.success) {
        toast.success("content delete success");
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
        <h2>Admission Content</h2>
        <Link to="/admin/admission/contents/add" className="secondary_btn">
          Add New
        </Link>
      </div>

      <div className="p-4 pt-0 flex items-start gap-4 text-[15px]">
        <div className="flex items-center gap-3">
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

        <div className="flex items-center gap-3">
          <p className="text-neutral-content">Filter Chapter:</p>
          <select
            name="subject"
            onChange={(e) => setSelectedChapter(e.target.value)}
            defaultValue={selectedSubject}
            className="w-max"
          >
            {chapters?.map((chapter) => (
              <option key={chapter?._id} value={chapter?._id}>
                {chapter?.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Content Name</th>
              <th>Subject Name</th>
              <th>Chapter Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contents?.length > 0 ? (
              contents?.map((content, i) => (
                <tr key={content?._id}>
                  <td>Content {i + 1}</td>
                  <td>{content?.subject?.name}</td>
                  <td>{content?.chapter?.name}</td>
                  <td>
                    <div className="flex items-center gap-2 text-lg">
                      <Link
                        to={`/admin/admission/contents/edit/${content?._id}`}
                        className="hover:text-primary"
                      >
                        <FaRegEdit />
                      </Link>

                      <button
                        onClick={() => handleDelete(content?._id)}
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
                <td className="text-red-500">No Content Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
