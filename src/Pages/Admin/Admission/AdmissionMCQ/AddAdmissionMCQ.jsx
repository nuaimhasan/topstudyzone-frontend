import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import Select from "react-dropdown-select";
import { useGetAdmissionSubjectsQuery } from "../../../../Redux/api/admission/subjectApi";
import { useGetAdmissionChaptersQuery } from "../../../../Redux/api/admission/chapterApi";
import { useGetAdmissionUniversitiesQuery } from "../../../../Redux/api/admission/universityApi";
import { useAddAdmissionMCQMutation } from "../../../../Redux/api/admission/mcqApi";

export default function AddAdmissionMCQ() {
  const editor = useRef(null);
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [pointA, setPointA] = useState("");
  const [pointB, setPointB] = useState("");
  const [pointC, setPointC] = useState("");
  const [pointD, setPointD] = useState("");
  const [explain, setExplain] = useState("");

  const { data: university } = useGetAdmissionUniversitiesQuery();
  const universities = university?.data;

  //---------------------Subject
  const { data: subject } = useGetAdmissionSubjectsQuery();
  const subjects = subject?.data;
  const [selectedSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    setSelectedSubject(subject?.data[0]?._id);
  }, [subject?.data]);

  let query = {};
  query["subject"] = selectedSubject;

  //---------------------Chapter
  const { data: chapter } = useGetAdmissionChaptersQuery({ ...query });
  const chapters = chapter?.data;

  const [addAdmissionMCQ, { isLoading }] = useAddAdmissionMCQMutation();

  const [allTags, setAllTags] = useState([]);
  useEffect(() => {
    if (
      subjects?.length > 0 &&
      chapters?.length > 0 &&
      universities?.length > 0
    ) {
      setAllTags([...subjects, ...chapters, ...universities]);
    }
  }, [subjects, chapters, universities]);

  const [tags, setTags] = useState([]);

  const handleAdd = async (e) => {
    e.preventDefault();

    const form = e.target;
    const subject = form.subject.value;
    const chapter = form.chapter.value;
    const ans = form.ans.value;
    const videoLink = form.videoLink.value;

    const info = {
      subject,
      chapter,
      question,
      points: [
        { name: "A", title: pointA },
        { name: "B", title: pointB },
        { name: "C", title: pointC },
        { name: "D", title: pointD },
      ],
      ans,
      videoLink,
      explain,
      tags: tags?.map((item) => ({ name: item.name })),
    };

    const res = await addAdmissionMCQ(info);
    if (res?.data?.success) {
      Swal.fire("", "MCQ add success", "success");
      navigate("/admin/academy/mcq");
    } else {
      Swal.fire("", "something went wront!", "error");
      console.log(res);
    }
  };

  return (
    <section>
      <div className="bg-base-100 rounded shadow">
        <h2 className="p-2 border-b text-lg font-medium">Add MCQ</h2>

        <form onSubmit={handleAdd} className="p-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="mb-1">Subject Name</p>
              <select
                name="subject"
                onChange={(e) => setSelectedSubject(e.target.value)}
                required
              >
                {subjects?.map((subject) => (
                  <option key={subject?._id} value={subject?._id}>
                    {subject?.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-1">Chapter Name</p>
              <select name="chapter" required>
                {chapters?.map((chapter) => (
                  <option key={chapter?._id} value={chapter?._id}>
                    {chapter?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-1">Question</p>
            <JoditEditor
              ref={editor}
              value=""
              onBlur={(text) => setQuestion(text)}
            />
          </div>

          {/* points */}
          <div className="mt-4 border rounded p-3">
            <p className="mb-4">Points</p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div>
                <p className="mb-1">A</p>
                <JoditEditor
                  ref={editor}
                  value=""
                  onBlur={(text) => setPointA(text)}
                />
              </div>
              <div>
                <p className="mb-1">B</p>
                <JoditEditor
                  ref={editor}
                  value=""
                  onBlur={(text) => setPointB(text)}
                />
              </div>
              <div>
                <p className="mb-1">C</p>
                <JoditEditor
                  ref={editor}
                  value=""
                  onBlur={(text) => setPointC(text)}
                />
              </div>
              <div>
                <p className="mb-1">D</p>
                <JoditEditor
                  ref={editor}
                  value=""
                  onBlur={(text) => setPointD(text)}
                />
              </div>
              <div>
                <p className="mb-1">Ans</p>
                <select name="ans">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-1">
              Video Link{" "}
              <span className="text-neutral-content">(optional)</span>
            </p>
            <input type="text" name="videoLink" />
          </div>

          <div className="mt-4">
            <p className="mb-1">Tags</p>
            <Select
              multi
              options={allTags}
              labelField="name"
              valueField="name"
              onChange={(values) => setTags(values)}
            />
          </div>

          <div className=" mt-4">
            <p className="mb-1">ব্যাখ্যা</p>
            <JoditEditor
              ref={editor}
              value=""
              onBlur={(text) => setExplain(text)}
            />
          </div>

          <div className="mt-2">
            <button disabled={isLoading && "disabled"} className="primary_btn">
              {isLoading ? "Loading..." : "Add MCQ"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
