import Mcq from "../../Academy/McqF/Mcq";

export default function Subject({ subject }) {
  let mcqs = subject?.mcqs;

  return (
    <div>
      <div className="bg-secondary/90 text-base-100 p-2 text-center font-medium text-lg">
        {subject?.subject?.name}
      </div>

      <div className="flex flex-col gap-3">
        {mcqs?.length > 0 &&
          mcqs?.map((mcq, i) => <Mcq key={mcq?._id} mcq={mcq} i={i} />)}
      </div>
    </div>
  );
}
