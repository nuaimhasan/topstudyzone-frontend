import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { useGetAcademyCategoriesQuery } from "../../../../Redux/api/academy/categoryApi";
import { useGetAcademyClassesQuery } from "../../../../Redux/api/academy/classApi";
import { useGetAcademySubjectsQuery } from "../../../../Redux/api/academy/subjectApi";
import { useAddAcademyMCQMutation } from "../../../../Redux/api/academy/mcqApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useGetAcademyChaptersQuery } from "../../../../Redux/api/academy/chapterApi";

export default function AddMCQ() {
  const editor = useRef(null);
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [pointA, setPointA] = useState("");
  const [pointB, setPointB] = useState("");
  const [pointC, setPointC] = useState("");
  const [pointD, setPointD] = useState("");
  const [explain, setExplain] = useState("");

  //------------------------Category
  const { data: category } = useGetAcademyCategoriesQuery();
  const categories = category?.data;
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    setSelectedCategory(category?.data[0]?._id);
  }, [category?.data]);

  //------------------------Classes
  const { data: cls } = useGetAcademyClassesQuery(selectedCategory);
  const classes = cls?.data;
  const [selectedClass, setSelectedClass] = useState("");
  useEffect(() => {
    setSelectedClass(cls?.data[0]?._id);
  }, [cls?.data]);

  //---------------------Subject
  const { data: subject } = useGetAcademySubjectsQuery(selectedClass);
  const subjects = subject?.data;

  const [selectedSubject, setSelectedSubject] = useState("");
  useEffect(() => {
    setSelectedSubject(subject?.data[0]?._id);
  }, [subject?.data]);

  const { data: chapter } = useGetAcademyChaptersQuery(selectedSubject);
  const chapters = chapter?.data;

  const [addAcademyMCQ, { isLoading }] = useAddAcademyMCQMutation();

  const handleAdd = async (e) => {
    e.preventDefault();

    const form = e.target;
    const category = form.category.value;
    const cls = form.class.value;
    const subject = form.subject.value;
    const chapter = form.chapter.value;
    const ans = form.ans.value;
    const videoLink = form.videoLink.value;

    const info = {
      category,
      class: cls,
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
    };

    const res = await addAcademyMCQ(info);

    console.log(res);

    if (res?.data?.success) {
      Swal.fire("", "MCQ add success", "success");
      navigate("/admin/mcq/all");
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
              <p className="mb-1">Category Name</p>
              <select
                name="category"
                required
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories?.map((category) => (
                  <option key={category?._id} value={category?._id}>
                    {category?.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-1">Class Name</p>
              <select
                name="class"
                required
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                {classes?.map((clas) => (
                  <option key={clas?._id} value={clas?._id}>
                    {clas?.name}
                  </option>
                ))}
              </select>
            </div>

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
