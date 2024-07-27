import { useState } from "react";
import SubjectWise from "./SubjectWise/SubjectWise";

export default function CategoryWise() {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <section className="py-5">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center section_line italic">
        ক্যাটাগরি ভিত্তিক
      </h2>

      <div className="mt-4 sm:mt-8 flex justify-center items-center gap-2 text-sm">
        <button
          onClick={() => setSelectedCategory(1)}
          className={`px-4 py-3 border rounded hover:bg-secondary hover:text-base-100 duration-300 ${
            selectedCategory == 1 && "bg-secondary text-base-100"
          }`}
        >
          বিষয়ভিত্তিক
        </button>
        <button
          onClick={() => setSelectedCategory(2)}
          className={`px-4 py-3 border rounded hover:bg-secondary hover:text-base-100 duration-300 ${
            selectedCategory == 2 && "bg-secondary text-base-100"
          }`}
        >
          সালভিত্তিক
        </button>
        <button
          onClick={() => setSelectedCategory(3)}
          className={`px-4 py-3 border rounded hover:bg-secondary hover:text-base-100 duration-300 ${
            selectedCategory == 3 && "bg-secondary text-base-100"
          }`}
        >
          গ্রুপভিত্তিক
        </button>
        <button
          onClick={() => setSelectedCategory(4)}
          className={`px-4 py-3 border rounded hover:bg-secondary hover:text-base-100 duration-300 ${
            selectedCategory == 4 && "bg-secondary text-base-100"
          }`}
        >
          সাম্প্রতিক বিষয়
        </button>
      </div>

      {selectedCategory == 1 && <SubjectWise />}
    </section>
  );
}
