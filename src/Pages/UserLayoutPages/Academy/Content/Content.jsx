import { useParams } from "react-router-dom";
import { useGetAcademyContentsQuery } from "../../../../Redux/api/academy/contentApi";
import perser from "html-react-parser";
import { useGetSingleAcademyChapterQuery } from "../../../../Redux/api/academy/chapterApi";

export default function Content() {
  const { chapterId } = useParams();
  const chapter = chapterId.split("-")[1];

  const { data: chapterInfo } = useGetSingleAcademyChapterQuery(chapter);
  const { data } = useGetAcademyContentsQuery(chapter);

  return (
    <div>
      <section className="grid grid-cols-3 gap-6 items-start">
        <div className="col-span-2 bg-base-100 shadow rounded overflow-hidden">
          <div className="bg-secondary text-base-100 text-center text-lg font-medium py-3">
            {chapterInfo?.data?.name}
          </div>

          <div className="p-3">
            {data?.data?.length > 0 && perser(data?.data[0]?.content)}
          </div>
        </div>
        <div className="bg-base-100 shadow rounded overflow-hidden"></div>
      </section>
    </div>
  );
}
