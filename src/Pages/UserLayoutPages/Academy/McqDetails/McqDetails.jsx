import { FaEye, FaHeart, FaShareAlt, FaVideo } from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";
import VideoModal from "../McqF/VideoModal";
import { useState } from "react";
import moment from "moment";
import perser from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import { useGetSingleAcademyMCQQuery } from "../../../../Redux/api/academy/mcqApi";
import { FaCircleCheck } from "react-icons/fa6";
import { CgEditBlackPoint } from "react-icons/cg";
import Spinner from "../../../../Components/Loader/Spinner/Spinner";
import Mcq from "../McqF/Mcq";

export default function McqDetails() {
  const { id } = useParams();
  const [modal, setModal] = useState(false);

  const { data, isLoading } = useGetSingleAcademyMCQQuery(id);
  const mcq = data?.data;

  const createdAt = mcq?.createdAt;
  const updatedAt = mcq?.updatedAt;
  const timeAgoCreatedAt = moment(createdAt).fromNow();
  const timeAgoUpdatedAt = moment(updatedAt).fromNow();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <div className="bg-base-100 shadow rounded">
          <div className="border-b p-3">
            <h2 className="text-secondary font-semibold text-[15px] flex items-start gap-1">
              {mcq?.question && perser(mcq?.question)}
            </h2>
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
                  <span
                    className={`${point?.name == mcq?.ans && "text-primary"}`}
                  >
                    {point?.title && perser(point?.title)}
                  </span>
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center p-3 text-sm">
            <div>
              <button className="text-secondary flex items-center">
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

          <div className={`border-t text-xs p-4`}>
            {mcq?.explain && perser(mcq?.explain)}
          </div>
        </div>

        <div className="mt-4">
          <div className="bg-secondary text-base-100 p-4 rounded-t">
            <div className="flex justify-between items-center">
              <h2 className="text-lg">Related Question</h2>
              <Link className="bg-gray-200 px-4 py-2 text-xs text-neutral">
                View More
              </Link>
            </div>
          </div>

          <div className="mt-4">
            <Mcq mcq={mcq} i={0} />
          </div>
        </div>
      </div>
    </div>
  );
}
