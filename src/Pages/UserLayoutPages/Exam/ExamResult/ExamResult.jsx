import { FaBookmark, FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetAcademyModelTestQuery } from "../../../../Redux/api/academy/modeltestApi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import moment from "moment";
import { MdInfo } from "react-icons/md";

export default function ExamResult() {
  const { data } = useGetAcademyModelTestQuery();
  const mcqs = data?.data;

  const totalMark = mcqs?.reduce((total, item) => total + item.totalMark, 0);

  const totalQuestion = mcqs?.reduce(
    (total, item) => total + item.totalQuestion,
    0
  );
  const totalObtainMark = mcqs?.reduce(
    (total, item) => total + item.result.obtainMark,
    0
  );

  const totalRightAns = mcqs?.reduce(
    (total, item) => total + item.result.totalRightAns,
    0
  );
  const totalWrongAns = mcqs?.reduce(
    (total, item) => total + item.result.totalWrongAns,
    0
  );
  const totalNoAns = mcqs?.reduce(
    (total, item) => total + item.result.totalNoAns,
    0
  );
  const totalNegativeMark = mcqs?.reduce(
    (total, item) => total + item.result.totalNegativeMark,
    0
  );
  const totalPass = mcqs?.filter(
    (item) => item?.result?.resultType == "PASS"
  )?.length;
  const totalFail = mcqs?.filter(
    (item) => item?.result?.resultType == "FAIL"
  )?.length;

  return (
    <div>
      <section className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-base-100 rounded overflow-hidden shadow">
            <div className="bg-primary text-base-100 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-medium">Result Summary</h2>
              <Link
                to="/exam"
                className="bg-red-700 text-base-100 px-4 py-1.5 rounded text-sm"
              >
                Exam List
              </Link>
            </div>

            <div className="p-4 grid grid-cols-2 gap-3 text-[13px] lg:w-4/5 mx-auto">
              <div className="flex items-center gap-2">
                <div className="bg-primary text-base-100 p-2 rounded">
                  <FaQuestion />
                </div>
                <div>
                  <p>{mcqs?.length}</p>
                  <p className="text-neutral-content text-xs">TOTAL EXAM</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-primary text-base-100 p-2 rounded">
                  <FaQuestion />
                </div>
                <div>
                  <p>{totalQuestion}</p>
                  <p className="text-neutral-content text-xs">TOTAL QUESTION</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-primary text-base-100 p-2 rounded">
                  <FaQuestion />
                </div>
                <div>
                  <p>{totalMark}</p>
                  <p className="text-neutral-content text-xs">TOTAL MARK</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>{totalObtainMark}</p>
                  <p className="text-neutral-content text-xs">
                    TOTAL OBTAIN MARK
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>{totalRightAns}</p>
                  <p className="text-neutral-content text-xs">
                    TOTAL RIGHT ANSWERED
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>{totalWrongAns}</p>
                  <p className="text-neutral-content text-xs">
                    TOTAL WRONG ANSWERED
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>{totalNoAns}</p>
                  <p className="text-neutral-content text-xs">
                    TOTAL NOT ANSWERED
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>- {totalNegativeMark}</p>
                  <p className="text-neutral-content text-xs">
                    TOTAL NEGATIVE MARK
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>{totalPass}</p>
                  <p className="text-neutral-content text-xs">PASSED EXAMS</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>{totalFail}</p>
                  <p className="text-neutral-content text-xs">FAILED EXAMS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {mcqs?.map((mcq) => (
              <div
                key={mcq?._id}
                className="bg-base-100 rounded overflow-hidden shadow border border-primary"
              >
                <div className="bg-gray-100 text-neutral p-4 py-3 flex justify-between items-center">
                  <div>
                    <h2 className="font-medium">On Demand Test</h2>
                    <p className="text-xs text-neutral-content">
                      Time: {moment(mcq?.createdAt).fromNow()}
                    </p>
                  </div>
                  <button>
                    <MdOutlineKeyboardArrowDown />
                  </button>
                </div>

                <div className="p-4 grid grid-cols-2 gap-3 text-[13px]">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-base-100 p-2 rounded">
                      <FaQuestion />
                    </div>
                    <div>
                      <p>{mcq?.totalQuestion}</p>
                      <p className="text-neutral-content text-xs">
                        TOTAL QUESTION
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-secondary text-base-100 p-2 rounded">
                      <FaBookmark />
                    </div>
                    <div>
                      <p>{mcq?.totalMark}</p>
                      <p className="text-neutral-content text-xs">TOTAL MARK</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-base-100 p-2 rounded">
                      <FaQuestion />
                    </div>
                    <div>
                      <p>
                        {mcq?.result?.totalRightAns +
                          mcq?.result?.totalWrongAns}
                      </p>
                      <p className="text-neutral-content text-xs">ANSWERED</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-base-100 p-2 rounded">
                      <FaQuestion />
                    </div>
                    <div>
                      <p>{mcq?.result?.totalRightAns}</p>
                      <p className="text-neutral-content text-xs">
                        RIGHT ANSWER
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-secondary text-base-100 p-2 rounded">
                      <FaBookmark />
                    </div>
                    <div>
                      <p>{mcq?.result?.totalWrongAns}</p>
                      <p className="text-neutral-content text-xs">
                        WRONG ANSWER
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-secondary text-base-100 p-2 rounded">
                      <FaBookmark />
                    </div>
                    <div>
                      <p>{mcq?.result?.obtainMark}</p>
                      <p className="text-neutral-content text-xs">
                        OBTAIN MARK
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-secondary text-base-100 p-2 rounded">
                      <FaBookmark />
                    </div>
                    <div>
                      <p>{mcq?.passMark}</p>
                      <p className="text-neutral-content text-xs">PASS MARK</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-secondary text-base-100 p-2 rounded">
                      <FaBookmark />
                    </div>
                    <div>
                      <p>- {mcq?.result?.totalNegativeMark}</p>
                      <p className="text-neutral-content text-xs">
                        NEGATIVE MARK
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t px-3 py-2 flex justify-between items-center text-xs uppercase text-base-100">
                  <div>
                    {mcq?.result?.resultType == "PASS" ? (
                      <span className="bg-primary px-2 py-1 rounded">
                        Passes
                      </span>
                    ) : (
                      <span className="bg-red-600 px-2 py-1 rounded">
                        Failed
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/exam-result/${mcq?._id}`}
                    className="bg-secondary px-2 py-1 rounded flex items-center gap-1"
                  >
                    <MdInfo className="text-[15px]" /> Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}
