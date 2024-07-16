import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useGetAdmissionSubjectsQuery } from "../../../../../Redux/api/admission/subjectApi";
import Spinner from "../../../../../Components/Loader/Spinner/Spinner";
import {
  useGetSingleAdmissionContentQuery,
  useUpdateAdmissionContentMutation,
} from "../../../../../Redux/api/admission/contentApi";
import { useGetAdmissionChaptersQuery } from "../../../../../Redux/api/admission/chapterApi";

export default function AdmissionEditContent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetSingleAdmissionContentQuery(id);

  const { data: subjects } = useGetAdmissionSubjectsQuery();
  const [selectedSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    if (data?.data?.length > 0) setSelectedSubject(data?.data?.subject?._id);
  }, [data]);

  let query = {};
  query["subject"] = selectedSubject
    ? selectedSubject
    : data?.data?.subject?._id;
  const { data: chapters } = useGetAdmissionChaptersQuery({ ...query });

  console.log(query);

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    uploader: {
      insertImageAsBase64URI: true,
      imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
    },
  };

  const [updateAdmissionContent, { isLoading: editLoading }] =
    useUpdateAdmissionContentMutation();

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (content == "") {
      return Swal.fire("", "content is required!", "warning");
    }

    const subject = e.target.subject.value;
    const chapter = e.target.chapter.value;

    const info = { content, subject, chapter };

    const res = await updateAdmissionContent({ id, info });

    if (res?.data?.success) {
      toast.success("content update success");
      navigate("/admin/admission/contents");
    } else {
      toast.error("something went wrong!");
      console.log(res);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h2>Edit Admission Content</h2>
      </div>
      <div className="p-4">
        <form onSubmit={handleUpdate}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-1.5">Subject</p>
              <select
                name="subject"
                onChange={(e) => setSelectedSubject(e.target.value)}
                required
                defaultValue={data?.data?.subject?._id}
              >
                {subjects?.data?.map((subject) => (
                  <option key={subject?._id} value={subject?._id}>
                    {subject?.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="mb-1.5">Chapter</p>
              <select
                name="chapter"
                required
                defaultValue={data?.data?.chapter?._id}
              >
                {chapters?.data?.map((chapter) => (
                  <option key={chapter?._id} value={chapter?._id}>
                    {chapter?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-1.5">Content</p>
            <JoditEditor
              ref={editor}
              onBlur={(text) => setContent(text)}
              config={config}
              value={data?.data?.content}
            />
          </div>

          <div className="mt-4">
            <button
              disabled={editLoading && "disabled"}
              className="secondary_btn"
            >
              {editLoading ? "Loading..." : "Edit Content"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
