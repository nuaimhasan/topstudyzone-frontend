import { Link } from "react-router-dom";
import { FaQuoteRight } from "react-icons/fa";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function FounderSpeech() {
  return (
    <section className="py-5 sm:py-10">
      <div className="container bg-base-100 rounded px-4 py-8 shadow">
        <div className="grid md:grid-cols-3 gap-3">
          <div>
            <div className="w-40 sm:w-56 h-40 sm:h-56 mx-auto relative border-4 border-gray-200 rounded-full">
              <img
                src="/images/tc1.png"
                alt=""
                className="w-full h-full rounded-full"
              />
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary absolute top-0 right-0 sm:top-1 sm:right-2 text-base-100 flex justify-center items-center">
                <FaQuoteRight />
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-neutral text-sm sm:text-base">
              আস্‌সালামু আলাইকুম, স্যাট একাডেমিতে আপনাকে স্বাগতম । আমার সুদীর্ঘ
              ৮ বছরের অক্লান্ত পরিশ্রমের উপহার সম্পূর্ণ ওপেন প্লাটফর্ম, আজকের
              স্যাট একাডেমি । আমার মিশন একটাই স্যাট একাডেমির হাত ধরে “শিক্ষা হবে
              উন্মুক্ত, বাণিজ্যমুক্ত” | এই প্লাটফর্মে রয়েছে একাডেমিক প্রস্তুতি,
              ভর্তি প্রস্তুতি, চাকরি প্রস্তুতি, স্পেশাল স্কিল এবং ধর্মীয়
              শিক্ষাসহ নানাবিধ বিষয়ে জ্ঞান অর্জনের সুবর্ণ সুযোগ। এটি একটি
              ইন্টারেক্টিভ প্লাটফর্ম যার মাধ্যমে শুধু জ্ঞান অর্জনই নয়, আপনার
              নিজের প্রতিভা/জ্ঞান শেয়ারের মাধ্যমে লক্ষ ইউজারকে নতুন কিছু জানানোর
              সুযোগ করে দিয়ে আপনিও হতে পারেন একজন গর্বিত স্যাটিয়ান। আপনাদের
              মূল্যবান মতামতকে অতি গুরুত্বের সাথে বিবেচনা করে স্যাটকে আরও ইউজার
              ফ্রেন্ডলি এবং তথ্যসমৃদ্ধ করতে স্যাটিয়ানদের নিরলস প্রচেষ্টা
              অব্যাহত।
            </p>
            <div className="mt-4">
              <h2 className="text-lg font-medium">Mohammad Saifur Islam</h2>
              <div className="flex gap-3 items-center">
                <Link
                  to=""
                  target="_blank"
                  className="w-7 h-7 rounded-full bg-primary flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
                >
                  <BiLogoFacebook className="text-lg" />
                </Link>
                <Link
                  to=""
                  target="_blank"
                  className="w-7 h-7 rounded-full bg-primary flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
                >
                  <BiLogoLinkedin className="text-lg" />
                </Link>
                <Link
                  to=""
                  target="_blank"
                  className="w-7 h-7 rounded-full bg-primary flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
                >
                  <FaTwitter className="text-lg" />
                </Link>
                <Link
                  to=""
                  target="_blank"
                  className="w-7 h-7 rounded-full bg-primary flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
                >
                  <FaInstagram className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
