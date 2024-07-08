import { Link, useParams } from "react-router-dom";
import { FaBook, FaPrint } from "react-icons/fa";
import { useGetAcademySubjectsQuery } from "../../../../Redux/api/academy/subjectApi";
import Subject from "./Subject";

export default function SubjectsF() {
  const { classId } = useParams();
  const cls = classId?.split("-")[1];
  const { data } = useGetAcademySubjectsQuery(cls);
  const subjects = data?.data;

  return (
    <div>
      <section className="grid grid-cols-3 items-start gap-6">
        <div className="col-span-2 rounded overflow-hidden shadow">
          <div className="bg-secondary text-base-100 text-center py-4 text-xl font-medium">
            প্রথম শ্রেণি (প্রাথমিক) - All Subjects
          </div>

          <div className="p-2 bg-base-100">
            <div>
              <input
                type="text"
                name=""
                className="w-full px-2 py-2 text-sm bg-gray-100 outline-none rounded"
                placeholder="search"
              />
            </div>

            <ul className="mt-4 p-2 flex flex-col gap-6">
              {subjects?.map((subject) => (
                <Subject key={subject?._id} subject={subject} />
                // <li
                //   key={subject?._id}
                //   className="flex justify-between items-center border-b pb-6"
                // >
                //   <div className="flex items-center gap-5">
                //     <FaBook className="text-neutral-content text-4xl" />
                //     <div>
                //       <Link
                //         to={`/academy/subject-${subject?._id}/chapters`}
                //         className="hover:text-secondary duration-200"
                //       >
                //         {subject?.name}
                //       </Link>
                //       <div className="mt-1 flex items-center gap-16 text-xs">
                //         <Link
                //           to=""
                //           className="bg-gray-100 p-1 rounded text-neutral-content"
                //         >
                //           MCQ
                //         </Link>
                //         <Link
                //           to=""
                //           className="bg-gray-100 p-1 rounded text-neutral-content"
                //         >
                //           Written (0)
                //         </Link>
                //       </div>
                //     </div>
                //   </div>

                //   <div>
                //     <button className="flex items-center gap-2 text-sm text-neutral">
                //       <FaPrint /> Print
                //     </button>
                //   </div>
                // </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow bg-base-100">
          <div className="bg-primary text-base-100 text-center py-4 text-xl font-medium">
            Subject MCQ
          </div>

          <div className="p-6">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to=""
                  className="flex justify-between items-center text-sm bg-secondary/10 p-2 rounded"
                >
                  <p>আমার বাংলা বই</p>
                  <p className="bg-primary text-base-100 px-1 py-px rounded-xl text-xs">
                    0
                  </p>
                </Link>
              </li>

              <li>
                <Link
                  to=""
                  className="flex justify-between items-center text-sm bg-secondary/10 p-2 rounded"
                >
                  <p>প্রাথমিক গণিত</p>
                  <p className="bg-primary text-base-100 px-1 py-px rounded-xl text-xs">
                    0
                  </p>
                </Link>
              </li>

              <li>
                <Link
                  to=""
                  className="flex justify-between items-center text-sm bg-secondary/10 p-2 rounded"
                >
                  <p>English For Today</p>
                  <p className="bg-primary text-base-100 px-1 py-px rounded-xl text-xs">
                    0
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
