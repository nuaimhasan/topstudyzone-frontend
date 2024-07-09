import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  useDeleteAcademyMCQMutation,
  useGetAcademyMCQQuery,
} from "../../../../Redux/api/academy/mcqApi";
import Swal from "sweetalert2";
import Pagination from "../../../../Components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useGetAcademyCategoriesQuery } from "../../../../Redux/api/academy/categoryApi";
import { useGetAcademyClassesQuery } from "../../../../Redux/api/academy/classApi";
import { useGetAcademySubjectsQuery } from "../../../../Redux/api/academy/subjectApi";

export default function MCQ() {
  const [currentPage, setCurrentPage] = useState(1);
  const query = {};
  query["page"] = currentPage;
  query["limit"] = 7;

  //----------Category
  const { data: category } = useGetAcademyCategoriesQuery();
  const categories = category?.data;
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setSelectedCategory(category?.data[0]?._id);
  }, [category?.data]);

  //----------Class
  const { data: cls } = useGetAcademyClassesQuery(selectedCategory);
  const classes = cls?.data;
  const [selectedClass, setSelectedClass] = useState("");

  useEffect(() => {
    setSelectedClass(cls?.data[0]?._id);
  }, [cls?.data]);

  //------------Subject
  const { data: subject } = useGetAcademySubjectsQuery(selectedClass);
  const subjects = subject?.data;
  const [selectedSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    setSelectedSubject(subject?.data[0]?._id);
  }, [subject?.data]);

  query["subject"] = selectedSubject;

  useEffect(() => {
    if (query?.subject) setCurrentPage(1);
  }, [query?.subject]);

  const { data } = useGetAcademyMCQQuery({ ...query });
  const mcqs = data?.data;

  //-------------Delete
  const [deleteAcademyMCQ] = useDeleteAcademyMCQMutation();
  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this category?");
    if (isConfirm) {
      const res = await deleteAcademyMCQ(id);
      if (res?.data?.success) {
        Swal.fire("", "MCQ delete success", "success");
      } else {
        Swal.fire("", "something went wront!", "error");
        console.log(res);
      }
    }
  };

  return (
    <section className="bg-base-100 shadow rounded pb-4">
      <div className="md:w-2/3 grid sm:grid-cols-3 gap-4 p-4">
        <select
          name="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories?.map((category) => (
            <option key={category?._id} value={category?._id}>
              {category?.name}
            </option>
          ))}
        </select>

        <select name="cls" onChange={(e) => setSelectedClass(e.target.value)}>
          {classes?.map((cls) => (
            <option key={cls?._id} value={cls?._id}>
              {cls?.name}
            </option>
          ))}
        </select>

        <select
          name="subject"
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          {subjects?.map((subject) => (
            <option key={subject?._id} value={subject?._id}>
              {subject?.name}
            </option>
          ))}
        </select>
      </div>

      <div className="border-b p-3 flex justify-between items-center">
        <h2>Academy MCQ</h2>
        <Link to="/admin/academy/mcq/add" className="primary_btn">
          Add New MCQ
        </Link>
      </div>

      <div className="relative overflow-x-auto min-h-[55vh]">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>MCQ</th>
              <th>Category Name</th>
              <th>Class Name</th>
              <th>Subject Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mcqs?.map((mcq, i) => (
              <tr key={mcq?._id}>
                <td>{i + 1}</td>
                <td>{mcq?.question}</td>
                <td>{mcq?.category?.name}</td>
                <td>{mcq?.class?.name}</td>
                <td>{mcq?.subject?.name}</td>
                <td>
                  <div className="flex items-center gap-2 text-lg">
                    <button>
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(mcq?._id)}>
                      <MdDeleteForever className="text-xl hover:text-red-500 duration-200" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        pages={data?.meta?.pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}
