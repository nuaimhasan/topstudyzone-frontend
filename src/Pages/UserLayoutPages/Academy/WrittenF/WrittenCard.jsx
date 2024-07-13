import { FaEye, FaHeart, FaShareAlt, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function WrittenCard() {
  return (
    <div className="bg-base-100 shadow rounded p-4">
      <div className="border-b p-3">
        <Link
          to=""
          className="hover:text-secondary duration-300 font-semibold text-[15px] flex items-start gap-1"
        >
          1. question
        </Link>
        <p className="text-[11px] text-neutral-content mt-1">
          Created: timeAgoCreatedAt | Updated: timeAgoUpdatedAt
        </p>
      </div>

      <div className="p-4 border-b">ans</div>

      <div className="flex justify-end items-center p-3 text-sm">
        <div className="flex items-center gap-6 text-neutral-content">
          <button>
            <FaVideo className="text-lg" />
          </button>
          {/* <VideoModal modal={modal} setModal={setModal} /> */}
          <button className="flex items-center gap-1">
            <FaHeart /> <span className="text-sm">00</span>
          </button>
          <div className="flex items-center gap-1">
            <FaEye className="text-lg" />
            <span className="text-sm">00</span>
          </div>
          <button className="flex items-center gap-1 text-secondary">
            <FaShareAlt />
          </button>
        </div>
      </div>
    </div>
  );
}
