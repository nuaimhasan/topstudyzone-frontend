import { Link, useParams } from "react-router-dom";
import { FaHive } from "react-icons/fa";

export default function ChaptersF() {
  const { subjectId } = useParams();
  console.log(subjectId);

  return (
    <div>
      <section className="grid grid-cols-3 gap-6 items-start">
        <div className="col-span-2 bg-base-100 rounded overflow-hidden shadow">
          <div className="bg-secondary text-base-100 py-4 text-center">
            <h2 className="text-lg font-medium">আমার বাংলা বই</h2>
          </div>

          <ul className="p-4 text-[15px]">
            <li className="flex items-center justify-between border-t border-dashed">
              <Link
                to={`/academy/chapter-1/content`}
                className="flex gap-4 items-center py-2.5 text-secondary"
              >
                <FaHive />
                <p>আমার পরিচয়</p>
              </Link>
            </li>

            <li className="flex items-center justify-between border-t border-dashed">
              <Link
                to={`/academy/chapter-2/content`}
                className="flex gap-4 items-center py-2.5 text-secondary"
              >
                <FaHive />
                <p>এসো রং করি ও আঁকি</p>
              </Link>
            </li>

            <li className="flex items-center justify-between border-t border-dashed">
              <Link
                to=""
                className="flex gap-4 items-center py-2.5 text-secondary"
              >
                <FaHive />
                <p>আমি ও আমার বিদ্যালয়</p>
              </Link>
            </li>

            <li className="flex items-center justify-between border-t border-dashed">
              <Link
                to=""
                className="flex gap-4 items-center py-2.5 text-secondary"
              >
                <FaHive />
                <p>আমি ও আমার সহপাঠীরা</p>
              </Link>
            </li>

            <li className="flex items-center justify-between border-t border-dashed">
              <Link
                to=""
                className="flex gap-4 items-center py-2.5 text-secondary"
              >
                <FaHive />
                <p>আঁকাআঁকি</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-base-100 rounded overflow-hidden shadow">
          <div className="bg-primary text-base-100 py-4 text-center">
            <h2 className="text-lg font-medium">প্রথম শ্রেণি (প্রাথমিক)</h2>
          </div>

          <div className="p-6">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to=""
                  className="flex justify-between items-center text-sm bg-secondary/10 p-2 rounded"
                >
                  <p>আমার বাংলা বই</p>
                  <p className="bg-primary text-base-100 px-1 py-px rounded-xl text-xs">
                    0
                  </p>
                </Link>
              </li>

              <li>
                <Link
                  to=""
                  className="flex justify-between items-center text-sm bg-secondary/10 p-2 rounded"
                >
                  <p>প্রাথমিক গণিত</p>
                  <p className="bg-primary text-base-100 px-1 py-px rounded-xl text-xs">
                    0
                  </p>
                </Link>
              </li>

              <li>
                <Link
                  to=""
                  className="flex justify-between items-center text-sm bg-secondary/10 p-2 rounded"
                >
                  <p>English For Today</p>
                  <p className="bg-primary text-base-100 px-1 py-px rounded-xl text-xs">
                    0
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
