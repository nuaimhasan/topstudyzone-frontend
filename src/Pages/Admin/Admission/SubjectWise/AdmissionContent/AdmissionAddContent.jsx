import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useGetAdmissionChaptersQuery } from "../../../../../Redux/api/admission/chapterApi";
import { useGetAdmissionSubjectsQuery } from "../../../../../Redux/api/admission/subjectApi";
import { useAddAdmissionContentMutation } from "../../../../../Redux/api/admission/contentApi";

export default function AdmissionAddContent() {
  const navigate = useNavigate();
  const { data: subjects } = useGetAdmissionSubjectsQuery();

  const [selectedSubject, setSelectedSubject] = useState("");
  useEffect(() => {
    if (subjects?.data?.length > 0) setSelectedSubject(subjects?.data[0]?._id);
  }, [subjects]);

  let query = {};
  query["subject"] = selectedSubject;
  const { data: chapters } = useGetAdmissionChaptersQuery({ ...query });

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    uploader: {
      insertImageAsBase64URI: true,
      imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
    },
  };

  const [addAdmissionContent, { isLoading }] = useAddAdmissionContentMutation();

  const handleAdd = async (e) => {
    e.preventDefault();

    if (content == "") {
      return Swal.fire("", "content is required!", "warning");
    }

    const subject = e.target.subject.value;
    const chapter = e.target.chapter.value;

    const info = { content, subject, chapter };

    const res = await addAdmissionContent(info);
    if (res?.data?.success) {
      toast.success("content add success");
      navigate("/admin/admission/contents");
    } else {
      toast.error("something went wrong!");
    }
  };

  return (
    <div className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h2>Add Admission Content</h2>
      </div>
      <div className="p-4">
        <form onSubmit={handleAdd}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-1.5">Subject</p>
              <select
                name="subject"
                onChange={(e) => setSelectedSubject(e.target.value)}
                required
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
              <select name="chapter" required>
                {chapters?.data?.map((chapter) => (
                  <option key={chapter?._id} value={chapter?._id}>
                    {chapter?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-1.5">Content Name</p>
            <JoditEditor
              ref={editor}
              value=""
              onBlur={(text) => setContent(text)}
              config={config}
            />
          </div>

          <div className="mt-4">
            <button
              className="secondary_btn"
              disabled={isLoading && "disabled"}
            >
              {isLoading ? "Loading..." : "Add Content"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
