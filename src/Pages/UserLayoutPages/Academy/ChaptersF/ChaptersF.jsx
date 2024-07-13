import { Link, useParams } from "react-router-dom";
import { FaHive } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

import { useGetAcademyChaptersQuery } from "../../../../Redux/api/academy/chapterApi";
import {
  useGetAcademySubjectsQuery,
  useGetSingleAcademySubjectQuery,
} from "../../../../Redux/api/academy/subjectApi";
import SubjectMCQ from "../../../../Components/UserLayoutComponents/SubjectMCQ/SubjectMCQ";
import ChapterDropdown from "./ChapterDropdown";
import { useEffect, useState } from "react";

export default function ChaptersF() {
  const [dropdown, setDropdown] = useState(false);
  const [selectedChapter, setSelectetChapter] = useState("");

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        !e.target.closest(".chapter_dropdown_btn") &&
        !e.target.closest(".chapter_test") &&
        !e.target.closest(".modal_show")
      ) {
        setDropdown(false);
      }
    });
  }, []);

  const { subjectId } = useParams();
  const subject = subjectId?.split("-")[1];

  const { data: subjectData } = useGetSingleAcademySubjectQuery(subject);

  const clsId = subjectData?.data?.class?._id;
  const { data: allSubject } = useGetAcademySubjectsQuery(clsId);

  const { data } = useGetAcademyChaptersQuery(subject);
  const chapters = data?.data;

  return (
    <div>
      <section className="grid grid-cols-3 gap-6 items-start">
        <div className="col-span-2 bg-base-100 rounded shadow min-h-[85vh]">
          <div className="bg-secondary text-base-100 py-4 text-center rounded-t">
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

                <div className="relative">
                  <button
                    onClick={() => {
                      setDropdown(!dropdown);
                      setSelectetChapter(chapter?._id);
                    }}
                    className="chapter_dropdown_btn px-1.5 py-1 rounded bg-primary/10 hover:bg-primary duration-300 hover:text-base-100"
                  >
                    <HiDotsHorizontal />
                  </button>

                  <ChapterDropdown
                    selectedChapter={selectedChapter}
                    dropdown={dropdown}
                    chapter={chapter}
                  />
                </div>
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
