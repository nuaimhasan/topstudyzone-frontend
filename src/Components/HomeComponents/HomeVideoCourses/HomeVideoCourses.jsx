import { Link } from "react-router-dom";
import VideoCourses from "../../VideoCourses/VideoCourses";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function HomeVideoCourses() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center italic section_line">
          ভিডিও কোর্স
        </h2>
        <p className="text-center text-xs sm:text-sm text-neutral mt-3">
          আপনার পছন্দের কোর্সটিতে এনরোল করুন
        </p>

        <div className="mt-6 sm:mt-10">
          <VideoCourses />
        </div>

        <div className="mt-8 flex justify-center">
          <Link className="login_btn flex items-center gap-2">
            see more <IoMdArrowRoundForward />
          </Link>
        </div>
      </div>
    </section>
  );
}
