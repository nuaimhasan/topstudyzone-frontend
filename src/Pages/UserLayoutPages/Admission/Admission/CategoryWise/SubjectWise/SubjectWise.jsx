import { useGetAcademySubjectsQuery } from "../../../../../../Redux/api/academy/subjectApi";
import Subject from "./Subject";

export default function SubjectWise() {
  let query = {};
  query["classuuid"] = 200;
  const { data } = useGetAcademySubjectsQuery({ ...query });
  const subjects = data?.data;

  console.log(subjects);

  return (
    <div className="mt-6 grid grid-cols-3 gap-4">
      {subjects?.map((subject) => (
        <Subject key={subject?._id} subject={subject} />
      ))}
    </div>
  );
}
