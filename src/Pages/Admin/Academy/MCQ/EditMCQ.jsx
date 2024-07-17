import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import { useGetAcademyCategoriesQuery } from "../../../../Redux/api/academy/categoryApi";
import { useGetAcademyClassesQuery } from "../../../../Redux/api/academy/classApi";
import { useGetAcademySubjectsQuery } from "../../../../Redux/api/academy/subjectApi";
import {
  useGetSingleAcademyMCQQuery,
  useUpdateAcademyMCQMutation,
} from "../../../../Redux/api/academy/mcqApi";
import Swal from "sweetalert2";
import { useGetAcademyChaptersQuery } from "../../../../Redux/api/academy/chapterApi";
import { useGetAcademySubChaptersQuery } from "../../../../Redux/api/academy/subChapterApi";
import { useGetAcademySubSubChaptersQuery } from "../../../../Redux/api/academy/subSubChapterApi";

export default function EditMCQ() {
  const { id } = useParams();
  const { data } = useGetSingleAcademyMCQQuery(id);
  const mcq = data?.data;

  const editor = useRef(null);
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [pointA, setPointA] = useState("");
  const [pointB, setPointB] = useState("");
  const [pointC, setPointC] = useState("");
  const [pointD, setPointD] = useState("");
  const [ans, setAns] = useState("");
  const [explain, setExplain] = useState("");

  //------------------------Category
  const { data: category } = useGetAcademyCategoriesQuery();
  const categories = category?.data;
  const [selectedCategory, setSelectedCategory] = useState("");

  //------------------------Classes
  let query = {};
  query["category"] = selectedCategory;
  const { data: cls } = useGetAcademyClassesQuery({ ...query });
  const classes = cls?.data;
  const [selectedClass, setSelectedClass] = useState("");

  //---------------------Subject
  let subjectQuery = {};
  subjectQuery["cls"] = selectedClass;
  const { data: subject } = useGetAcademySubjectsQuery({ ...subjectQuery });
  const subjects = subject?.data;
  const [selectedSubject, setSelectedSubject] = useState("");

  //---------------------Chapter
  let chapterQuery = {};
  chapterQuery["category"] = selectedCategory;
  chapterQuery["cls"] = selectedClass;
  chapterQuery["subject"] = selectedSubject;
  const { data: chapter } = useGetAcademyChaptersQuery({ ...chapterQuery });
  const chapters = chapter?.data;
  const [selectedChapter, setSelectedChapter] = useState("");

  //---------------------Sub Chapter
  let subChapterQuery = {};
  subChapterQuery["category"] = selectedCategory;
  subChapterQuery["cls"] = selectedClass;
  subChapterQuery["subject"] = selectedSubject;
  subChapterQuery["chapter"] = selectedChapter;
  const { data: subChapter } = useGetAcademySubChaptersQuery({
    ...subChapterQuery,
  });
  const subChapters = subChapter?.data;
  const [selectedSubChapter, setSelectedSubChapter] = useState("");

  //---------------------Sub Sub Chapter
  let subSubChapterQuery = {};
  subSubChapterQuery["category"] = selectedCategory;
  subSubChapterQuery["cls"] = selectedClass;
  subSubChapterQuery["subject"] = selectedSubject;
  subSubChapterQuery["chapter"] = selectedChapter;
  subSubChapterQuery["subChapter"] = selectedSubChapter;
  const { data: subSubChapter } = useGetAcademySubSubChaptersQuery({
    ...subSubChapterQuery,
  });
  const subSubChapters = subSubChapter?.data;

  const [selectedSubSubChapter, setSelectedSubSubChapter] = useState("");

  useEffect(() => {
    setSelectedCategory(mcq?.category);
    setSelectedClass(mcq?.class);
    setSelectedSubject(mcq?.subject);
    setSelectedChapter(mcq?.chapter);
    setSelectedSubChapter(mcq?.subChapter);
    setSelectedSubSubChapter(mcq?.subSubChapter);

    setQuestion(mcq?.question);
    setPointA(mcq?.points[0]?.title);
    setPointB(mcq?.points[1]?.title);
    setPointC(mcq?.points[2]?.title);
    setPointD(mcq?.points[3]?.title);

    setAns(mcq?.ans);
    setExplain(mcq?.explain);
  }, [mcq]);

  const [updateAcademyMCQ, { isLoading }] = useUpdateAcademyMCQMutation();

  const handleEdit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const category = form.category.value;
    const cls = form.class.value;
    const subject = form.subject.value;
    const chapter = form.chapter.value;
    const subChapter = form.subChapter.value;
    const subSubChapter = form.subSubChapter.value;
    const videoLink = form.videoLink.value;

    const info = {
      category,
      class: cls,
      subject,
      chapter,
      subChapter: subChapter ? subChapter : undefined,
      subSubChapter: subSubChapter ? subSubChapter : undefined,
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

    const res = await updateAcademyMCQ({ id, info });

    if (res?.data?.success) {
      Swal.fire("", "MCQ edit success", "success");
      navigate("/admin/mcq/all");
    } else {
      Swal.fire("", "something went wront!", "error");
      console.log(res);
    }
  };

  return (
    <section>
      <div className="bg-base-100 rounded shadow">
        <h2 className="p-2 border-b text-lg font-medium">Edit MCQ</h2>

        <form onSubmit={handleEdit} className="p-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="mb-1">Category Name</p>
              <select
                name="category"
                required
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
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
                value={selectedClass}
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
                value={selectedSubject}
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
              <select
                name="chapter"
                required
                onChange={(e) => setSelectedChapter(e.target.value)}
              >
                {chapters?.map((chapter) => (
                  <option key={chapter?._id} value={chapter?._id}>
                    {chapter?.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-1">Sub Chapter</p>
              <select
                name="subChapter"
                onChange={(e) => setSelectedSubChapter(e.target.value)}
                value={selectedSubChapter}
              >
                <option value="">Selected Sub Chapter</option>
                {subChapters?.map((chapter) => (
                  <option key={chapter?._id} value={chapter?._id}>
                    {chapter?.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-1">Sub Sub Chapter</p>
              <select name="subSubChapter" value={selectedSubSubChapter}>
                <option value="">Selected Sub Sub Chapter</option>
                {subSubChapters?.map((chapter) => (
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
              value={question}
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
                  value={pointA}
                  onBlur={(text) => setPointA(text)}
                />
              </div>
              <div>
                <p className="mb-1">B</p>
                <JoditEditor
                  ref={editor}
                  value={pointB}
                  onBlur={(text) => setPointB(text)}
                />
              </div>
              <div>
                <p className="mb-1">C</p>
                <JoditEditor
                  ref={editor}
                  value={pointC}
                  onBlur={(text) => setPointC(text)}
                />
              </div>
              <div>
                <p className="mb-1">D</p>
                <JoditEditor
                  ref={editor}
                  value={pointD}
                  onBlur={(text) => setPointD(text)}
                />
              </div>
              <div>
                <p className="mb-1">Ans</p>
                <select
                  name="ans"
                  value={ans}
                  onChange={(e) => setAns(e.target.value)}
                >
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
              Video Link
              <span className="text-neutral-content">(optional)</span>
            </p>
            <input type="text" name="videoLink" defaultValue={mcq?.videoLink} />
          </div>

          <div className=" mt-4">
            <p className="mb-1">ব্যাখ্যা</p>
            <JoditEditor
              ref={editor}
              value={explain}
              onBlur={(text) => setExplain(text)}
            />
          </div>

          <div className="mt-2">
            <button disabled={isLoading && "disabled"} className="primary_btn">
              {isLoading ? "Loading..." : "Update MCQ"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
