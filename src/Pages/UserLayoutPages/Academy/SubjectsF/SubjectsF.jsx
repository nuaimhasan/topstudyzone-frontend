import { useParams } from "react-router-dom";
import Subject from "./Subject";
import SubjectMCQ from "../../../../Components/UserLayoutComponents/SubjectMCQ/SubjectMCQ";
import { useGetAcademySubjectsQuery } from "../../../../Redux/api/academy/subjectApi";
import { useGetSingleAcademyClassQuery } from "../../../../Redux/api/academy/classApi";

export default function SubjectsF() {
  const { classId } = useParams();
  const cls = classId?.split("-")[1];

  const { data: clsData } = useGetSingleAcademyClassQuery(cls);

  const { data } = useGetAcademySubjectsQuery(cls);
  const subjects = data?.data;

  return (
    <div>
      <section className="grid grid-cols-3 items-start gap-6">
        <div className="col-span-2 rounded overflow-hidden shadow">
          <div className="bg-secondary text-base-100 text-center py-4 text-xl font-medium">
            {clsData?.data?.name} - All Subjects
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
              {subjects?.map((subject) => (
                <SubjectMCQ key={subject?._id} subject={subject} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
