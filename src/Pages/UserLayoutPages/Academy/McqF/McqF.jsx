import { Link, useParams } from "react-router-dom";

import { useGetSingleAcademySubjectQuery } from "../../../../Redux/api/academy/subjectApi";
import { useGetAcademyMCQQuery } from "../../../../Redux/api/academy/mcqApi";

import Mcq from "./Mcq";

export default function McqF() {
  const { subjectId } = useParams();

  const { data } = useGetSingleAcademySubjectQuery(subjectId?.split("-")[1]);
  const subejct = data?.data;

  const { data: mcq } = useGetAcademyMCQQuery(subjectId?.split("-")[1]);
  const mcqs = mcq?.data;

  return (
    <div>
      <section className="grid grid-cols-3 items-start gap-6">
        <div className="col-span-2 rounded overflow-hidden">
          <div className="bg-secondary text-base-100 text-center py-4">
            <h2 className="text-2xl font-medium">{subejct?.name}</h2>
            <p>All Question - ({mcqs?.length})</p>
          </div>

          <div className="p-4 bg-base-100">
            <ul className="flex items-center justify-center gap-2 text-xs text-base-100">
              <li>
                <Link to="" className="bg-primary px-4 py-2 rounded">
                  Read
                </Link>
              </li>
              <li>
                <Link to="" className="bg-rose-700 px-4 py-2 rounded">
                  Test
                </Link>
              </li>
              <li>
                <Link to="" className="bg-secondary px-4 py-2 rounded">
                  Written
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            {mcqs?.map((mcq, i) => (
              <Mcq key={mcq?._id} mcq={mcq} i={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="h-40 bg-primary/10 rounded"></div>
          <br />
          <div className="h-40 bg-secondary/10 rounded"></div>
        </div>
      </section>
    </div>
  );
}
