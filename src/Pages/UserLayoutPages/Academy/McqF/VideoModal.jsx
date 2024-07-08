import { MdOutlineClose } from "react-icons/md";

export default function VideoModal({ modal, setModal }) {
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className={`overlay ${modal && "overlay_show"}`}
      ></div>

      <div
        className={`modal w-full md:w-[60%] h-80 md:h-[500px] mx-auto mt-20 md:mt-0 ${
          modal && "modal_show"
        }`}
      >
        <div className="flex justify-end p-4 ">
          <button onClick={() => setModal(false)} className="">
            <MdOutlineClose className="text-xl hover:text-red-500" />
          </button>
        </div>

        <div className="p-4">Video</div>
      </div>
    </>
  );
}
