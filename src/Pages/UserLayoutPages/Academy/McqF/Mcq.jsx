import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import perser from "html-react-parser";

import { FaShareAlt } from "react-icons/fa";
import { FaCircleCheck, FaEye, FaHeart, FaVideo } from "react-icons/fa6";
import { MdArrowRight } from "react-icons/md";
import { CgEditBlackPoint } from "react-icons/cg";
import VideoModal from "./VideoModal";

export default function Mcq({ mcq, i }) {
  const [explan, setExplan] = useState();
  const [modal, setModal] = useState(false);

  const createdAt = mcq?.createdAt;
  const updatedAt = mcq?.updatedAt;
  const timeAgoCreatedAt = moment(createdAt).fromNow();
  const timeAgoUpdatedAt = moment(updatedAt).fromNow();

  return (
    <div className="bg-base-100 shadow rounded">
      <div className="border-b p-3">
        <Link
          to=""
          className="hover:text-secondary duration-300 font-semibold text-[15px] flex items-start gap-1"
        >
          {i + 1}. {mcq?.question && perser(mcq?.question)}
        </Link>
        <p className="text-[11px] text-neutral-content mt-1">
          Created: {timeAgoCreatedAt} | Updated: {timeAgoUpdatedAt}
        </p>
      </div>

      <div className="p-4 border-b">
        <div className="grid grid-cols-2 gap-2 text-[15px]">
          {mcq?.points?.map((point, i) => (
            <p key={i} className="flex items-center gap-2">
              {point?.name == mcq?.ans ? (
                <FaCircleCheck className="text-sm text-primary" />
              ) : (
                <CgEditBlackPoint className="text-base" />
              )}
              <span className={`${point?.name == mcq?.ans && "text-primary"}`}>
                {point?.title && perser(point?.title)}
              </span>
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center p-3 text-sm">
        <div>
          <button
            onClick={() => setExplan(!explan)}
            className="text-secondary flex items-center"
          >
            ব্যাখ্যা <MdArrowRight className="text-2xl" />
          </button>
        </div>
        <div className="flex items-center gap-6 text-neutral-content">
          <button onClick={() => setModal(true)}>
            <FaVideo className="text-lg" />
          </button>
          <VideoModal modal={modal} setModal={setModal} />
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

      <div
        className={`bg-primary/20 w-full text-xs h-0 overflow-hidden duration-300 ${
          explan && "h-auto p-4"
        }`}
      >
        {perser(mcq?.explain)}
      </div>
    </div>
  );
}
