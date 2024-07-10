import { useGetAcademyContentsQuery } from "../../../../Redux/api/academy/contentApi";
import perser from "html-react-parser";

export default function Content() {
  const { data } = useGetAcademyContentsQuery();
  console.log(data?.data[0]?.content);
  return (
    <div>
      <section className="grid grid-cols-3 gap-6 items-start">
        <div className="col-span-2 bg-base-100 shadow rounded overflow-hidden">
          <div className="bg-secondary text-base-100 text-center text-lg font-medium py-3">
            আমার পরিচয়
          </div>

          <div className="p-3">{perser(data?.data[0]?.content)}</div>
        </div>
        <div className="bg-base-100 shadow rounded overflow-hidden"></div>
      </section>
    </div>
  );
}
