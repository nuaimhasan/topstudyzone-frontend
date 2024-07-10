import { Link, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useGetAcademyMCQQuery } from "../../../../Redux/api/academy/mcqApi";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

import { FaQuestion } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

export default function ModelTest() {
  const { subjectId: id } = useParams();
  const subjectId = id?.split("-")[1];

  let query = {};
  query["subject"] = subjectId;
  const { data: mcq } = useGetAcademyMCQQuery({ ...query });
  const mcqs = mcq?.data;

  const [totalQuestion, setTotalQuestion] = useState("");
  const [totalMark, setTotalMark] = useState("");
  const [passMark, setPassMark] = useState("");
  const [examDuration, setExamDuration] = useState("");
  const [negativeMark, setNegativeMark] = useState("");

  const formatDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-indexed
    let year = date.getFullYear();

    // Add leading zero to day and month if needed
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return `${day}-${month}-${year}`;
  };

  const date = new Date();
  const today = formatDate(date);

  const [isExamStart, setIsExamStart] = useState(false);
  const [randomMcq, setRandomMcq] = useState([]);

  const [examQuetion, setExamQuestion] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSetAns = (mcqId, point, ans) => {
    setExamQuestion([
      ...examQuetion,
      { mcqId, selectedAns: point?.name, rightAns: ans },
    ]);

    setSelectedAnswers({
      ...selectedAnswers,
      [mcqId]: point?.name,
    });
  };

  useEffect(() => {
    if (mcqs?.length) {
      let copiedArray = [...mcqs];
      for (let i = copiedArray?.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
      }

      const randomElements = copiedArray.slice(0, totalQuestion);
      setRandomMcq(randomElements);
    }
  }, [mcqs, totalQuestion]);

  const handleStartExam = (e) => {
    e.preventDefault();

    if (totalQuestion > mcqs?.length)
      return Swal.fire("", `${totalQuestion} MCQ not found`, "warning");

    if (!negativeMark)
      return Swal.fire("", `please select negetive mark`, "warning");

    if (examDuration) {
      const initialTime = examDuration * 60;
      setTime(initialTime);
    }
  };

  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
        setIsExamStart(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const completed = (100 / totalQuestion) * examQuetion?.length;

  const handleExamSubmit = () => {
    const examInfo = {
      totalQuestion,
      totalMark,
      passMark,
      examDuration,
      negativeMark,
      date: today,
      mcqs: examQuetion,
    };

    setTime(0);

    console.log(examInfo);
  };

  return (
    <div>
      {isExamStart ? (
        <section>
          <div className="shadow rounded overflow-hidden bg-base-100">
            <div className="bg-primary text-base-100 p-4 flex justify-between items-center">
              <h2 className="text-lg font-medium">On Demand Test</h2>

              <div className="text-base-100">{formatTime(time)}</div>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4 text-[13px] lg:w-1/2 mx-auto">
              <div className="flex items-center gap-2">
                <div className="bg-primary text-base-100 p-2 rounded">
                  <FaQuestion />
                </div>
                <div>
                  <p>{totalQuestion}</p>
                  <p className="text-neutral-content">TOTAL QUESTION</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>{totalMark}</p>
                  <p className="text-neutral-content">TOTAL MARK</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>{passMark}</p>
                  <p className="text-neutral-content">PASS MARK</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>{examDuration} min.</p>
                  <p className="text-neutral-content">DURATION</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>{negativeMark}</p>
                  <p className="text-neutral-content">NEGATIVE MARK</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>{today}</p>
                  <p className="text-neutral-content">EXAM DATE</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>
                    {examQuetion?.length}/{totalQuestion}
                  </p>
                  <p className="text-neutral-content">SELECTED QUESTION</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 p-2 rounded">
                  <FaBookmark />
                </div>
                <div>
                  <p>{completed}%</p>
                  <p className="text-neutral-content">COMPLETED</p>
                </div>
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="mt-4 grid grid-cols-2 gap-6">
            {randomMcq?.map((mcq, i) => (
              <div
                className="shadow bg-base-100 rounded overflow-hidden"
                key={mcq?._id}
              >
                <h2 className="bg-secondary/20 font-medium p-3">
                  {i + 1}. {mcq?.question}
                </h2>

                <div className="p-3 grid grid-cols-2 gap-2 text-[15px]">
                  {mcq?.points?.map((point, i) => (
                    <button
                      onClick={() => handleSetAns(mcq?._id, point, mcq?.ans)}
                      key={i}
                      className="flex items-center gap-2 w-max"
                      disabled={selectedAnswers[mcq?._id] !== undefined}
                    >
                      {selectedAnswers[mcq?._id] === point?.name ? (
                        <MdRadioButtonChecked />
                      ) : (
                        <MdRadioButtonUnchecked />
                      )}

                      <span>{point?.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <button onClick={handleExamSubmit} className="secondary_btn">
              Submit
            </button>
          </div>
        </section>
      ) : (
        <section className="border rounded p-3 bg-base-100 shadow">
          <div className="text-center mb-5">
            <h2 className="text-xl">Self Test</h2>
            <p className="text-neutral-content text-sm">
              Fill up the form and submit
            </p>
          </div>

          <form onSubmit={handleStartExam}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
              <div>
                <p className="text-neutral-content text-[15px] mb-1">
                  Subject Total Question
                </p>
                <input
                  type="number"
                  disabled
                  className="bg-secondary text-base-100 border-secondary"
                  value={mcqs?.length}
                />
              </div>

              <div>
                <p className="text-neutral-content text-[15px] mb-1">
                  Number of Question *
                </p>
                <input
                  type="number"
                  onChange={(e) => setTotalQuestion(e.target.value)}
                />
              </div>

              <div>
                <p className="text-neutral-content text-[15px] mb-1">
                  Total Mark *
                </p>
                <input
                  type="number"
                  onChange={(e) => setTotalMark(e.target.value)}
                />
              </div>

              <div>
                <p className="text-neutral-content text-[15px] mb-1">
                  Pass Mark *
                </p>
                <input
                  type="number"
                  onChange={(e) => setPassMark(e.target.value)}
                />
              </div>

              <div>
                <p className="text-neutral-content text-[15px] mb-1">
                  Exam Duration *
                </p>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="rounded-r-none"
                    onChange={(e) => setExamDuration(e.target.value)}
                  />
                  <p className="bg-gray-200 px-2 py-1.5 rounded-r">min</p>
                </div>
              </div>

              <div>
                <p className="text-neutral-content text-[15px] mb-1">
                  Negative Mark *
                </p>
                <select onChange={(e) => setNegativeMark(e.target.value)}>
                  <option>select mark</option>
                  <option value="0">0.00</option>
                  <option value="0.25">0.25</option>
                  <option value="0.50">0.50</option>
                  <option value="1">1.00</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 text-base-100">
              <Link
                to={`/academy/subject-${subjectId}/mcq`}
                className="bg-red-500 px-4 py-2 rounded-md flex items-center gap-1"
              >
                <IoArrowBack className="text-lg" /> Go Back
              </Link>
              <div>
                <button className="secondary_btn">Start Exam</button>
              </div>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}
