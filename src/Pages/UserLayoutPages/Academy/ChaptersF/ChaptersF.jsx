import { Link, useParams } from "react-router-dom";
import { FaHive } from "react-icons/fa";
import { useGetAcademyChaptersQuery } from "../../../../Redux/api/academy/chapterApi";
import {
  useGetAcademySubjectsQuery,
  useGetSingleAcademySubjectQuery,
} from "../../../../Redux/api/academy/subjectApi";
import SubjectMCQ from "../../../../Components/UserLayoutComponents/SubjectMCQ/SubjectMCQ";

export default function ChaptersF() {
  const { subjectId } = useParams();
  const subject = subjectId?.split("-")[1];

  const { data: subjectData } = useGetSingleAcademySubjectQuery(subject);

  console.log(subjectData?.data?.class);

  const clsId = subjectData?.data?.class?._id;
  const { data: allSubject } = useGetAcademySubjectsQuery(clsId);

  const { data } = useGetAcademyChaptersQuery(subject);
  const chapters = data?.data;

  return (
    <div>
      <section className="grid grid-cols-3 gap-6 items-start">
        <div className="col-span-2 bg-base-100 rounded overflow-hidden shadow">
          <div className="bg-secondary text-base-100 py-4 text-center">
            <h2 className="text-lg font-medium">{subjectData?.data?.name}</h2>
          </div>

          <ul className="p-4 text-[15px]">
            {chapters?.map((chapter) => (
              <li
                key={chapter?._id}
                className="flex items-center justify-between border-t border-dashed"
              >
                <Link
                  to={`/academy/chapter-${chapter?._id}/content`}
                  className="flex gap-4 items-center py-2.5 text-secondary"
                >
                  <FaHive />
                  <p>{chapter?.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-base-100 rounded overflow-hidden shadow">
          <div className="bg-primary text-base-100 py-4 text-center">
            <h2 className="text-lg font-medium">
              {subjectData?.data?.class?.name} - MCQ
            </h2>
          </div>

          <div className="p-6">
            <ul className="flex flex-col gap-2">
              {allSubject?.data?.map((subject) => (
                <SubjectMCQ key={subject?._id} subject={subject} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
