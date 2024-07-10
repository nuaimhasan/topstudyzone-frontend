import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetAcademyCategoriesQuery,
  useGetSingleAcademyCategoryQuery,
} from "../../../../Redux/api/academy/categoryApi";
import { useGetSingleAcademyClassQuery } from "../../../../Redux/api/academy/classApi";
import { useGetSingleAcademySubjectQuery } from "../../../../Redux/api/academy/subjectApi";
import Swal from "sweetalert2";
import { useAddAcademyContentMutation } from "../../../../Redux/api/academy/contentApi";

export default function AddContent() {
  const editor = useRef(null);
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  const config = {
    uploader: {
      insertImageAsBase64URI: true,
      imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
    },
  };

  const { data: category } = useGetAcademyCategoriesQuery();
  const categories = category?.data;

  const [selectedCategory, setSelectedCategory] = useState("");

  const { data: c } = useGetSingleAcademyCategoryQuery(selectedCategory);
  const classes = c?.data?.classes;

  const [selectedClass, setSelectedClass] = useState("");

  const { data: clas } = useGetSingleAcademyClassQuery(selectedClass);
  const subjects = clas?.data?.subjects;

  const [selectedSubject, setSelectedSubject] = useState("");

  const { data: sbj } = useGetSingleAcademySubjectQuery(selectedSubject);
  const chapters = sbj?.data?.chapters;

  const [addAcademyContent, { isLoading }] = useAddAcademyContentMutation();

  const handleAdd = async (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    const clas = e.target.class.value;
    const subject = e.target.subject.value;
    const chapter = e.target.chapter.value;

    const info = {
      content,
      category,
      class: clas,
      subject,
      chapter,
    };

    const res = await addAcademyContent(info);

    if (res?.data?.success) {
      Swal.fire("", "content add success", "success");
      navigate("/admin/academy/contents");
    } else {
      Swal.fire("", "Something went wront!", "error");
    }
  };

  return (
    <section>
      <div className="bg-base-100 rounded shadow">
        <h2 className="p-2 border-b text-lg font-medium">Add Content</h2>

        <form onSubmit={handleAdd} className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div>
              <p className="mb-1">Category Name</p>
              <select
                name="category"
                required
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select Category</option>
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
                required
                onChange={(e) => setSelectedSubject(e.target.value)}
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

          <div className=" mt-3 content">
            <p className="mb-1">Content</p>
            <JoditEditor
              ref={editor}
              value=""
              onBlur={(text) => setContent(text)}
              config={config}
            />
          </div>

          <div className="mt-2">
            <button className="primary_btn">
              {isLoading ? "Loading..." : "Add Content"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
