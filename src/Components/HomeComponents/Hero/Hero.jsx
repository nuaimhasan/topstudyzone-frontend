export default function Hero() {
  return (
    <div className="hero_wrap h-[90vh] md:h-[98vh] overflow-hidden">
      <div className="relative h-full">
        {/* bg */}
        <img
          src="/src/assets/images/banner/banner_bg.webp"
          alt=""
          className="absolute w-full"
        />

        {/* Content */}
        <div className="w-full h-full flex flex-col justify-center items-center relative z-30 bg-[#0000006f]">
          <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="text-3xl md:text-5xl font-bold text-base-100">
              টপ স্টাডি জোন
            </h2>
            <h3 className="text-2xl md:text-4xl font-medium text-primary">
              শিক্ষামূলক উন্মুক্ত প্ল্যাটফর্ম
            </h3>
          </div>

          {/* Counter */}
          <div className="mt-20 w-[90%] lg:w-2/3 bg-primary/5 rounded-lg mx-auto py-6 md:py-10 px-2 md:px-4 grid grid-cols-3 gap-6">
            <div className="border-r border-primary/20 flex items-center justify-center gap-1 md:gap-3">
              <img
                src="/images/hero/question_countdown.png"
                alt=""
                className="w-8 h-8 md:w-14 md:h-12 rounded-full"
              />
              <div>
                <h2 className="md:text-3xl font-bold text-base-100">500K+</h2>
                <h3 className="text-xs md:text-base text-secondary font-semibold">
                  প্রশ্ন
                </h3>
              </div>
            </div>
            <div className="border-r border-primary/20 flex items-center justify-center gap-1 md:gap-3">
              <img
                src="/images/hero/student_countdown.png"
                alt=""
                className="w-8 h-8 md:w-14 md:h-12 rounded-full"
              />
              <div>
                <h2 className="md:text-3xl font-bold text-base-100">900K+</h2>
                <h3 className="text-xs md:text-base text-secondary font-semibold">
                  শিক্ষার্থী
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-3">
              <img
                src="/images/hero/exam_countdown.png"
                alt=""
                className="w-8 h-8 md:w-14 md:h-12 rounded-full"
              />
              <div>
                <h2 className="md:text-3xl font-bold text-base-100">150+</h2>
                <h3 className="text-xs md:text-base text-secondary font-semibold">
                  মডেল
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* svg */}
        <div className="absolute bottom-[-7px] xl:bottom-[-33px] left-0 w-full z-40">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,288L80,272C160,256,320,224,480,213.3C640,203,800,213,960,197.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
