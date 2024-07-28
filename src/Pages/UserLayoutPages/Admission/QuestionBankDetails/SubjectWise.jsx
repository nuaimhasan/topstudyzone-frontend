import Subject from "./Subject";

export default function SubjectWise({ subject }) {
  let subjects = subject?.subjects;

  return (
    <>
      {subjects?.map((subject) => (
        <Subject key={subject?._id} subject={subject} />
      ))}
    </>
  );
}
