import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { IoMdArrowRoundForward } from "react-icons/io";

export default function CategoriesTab() {
  return (
    <section className="pb-5 sm:py-10">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center section_line">
          ক্যাটাগরি সমূহ
        </h2>

        <div className="mt-6 sm:mt-10">
          <Tabs>
            <TabList>
              <Tab>১ম-দ্বাদশ শ্রেণি</Tab>
              <Tab>ভর্তি পরীক্ষা</Tab>
              <Tab>চাকরি প্রস্তুতি</Tab>
              <Tab>স্কিল ডেভেলপমেন্ট</Tab>
            </TabList>

            <TabPanel className="py-4 sm:py-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
                <div className="flex items-center gap-3 border-l-2 border-secondary shadow px-3 py-1.5 rounded">
                  <img
                    src="/images/categories/catagory_academy.png"
                    alt=""
                    className="w-10 h-10"
                  />
                  <h3>এইচ এস সি</h3>
                </div>

                <div className="flex items-center gap-3 border-l-2 border-secondary shadow px-3 py-1.5 rounded">
                  <img
                    src="/images/categories/catagory_academy.png"
                    alt=""
                    className="w-10 h-10"
                  />
                  <h3>এইচ এস সি</h3>
                </div>

                <div className="flex items-center gap-3 border-l-2 border-secondary shadow px-3 py-1.5 rounded">
                  <img
                    src="/images/categories/catagory_academy.png"
                    alt=""
                    className="w-10 h-10"
                  />
                  <h3>এইচ এস সি</h3>
                </div>

                <div className="flex items-center gap-3 border-l-2 border-secondary shadow px-3 py-1.5 rounded">
                  <img
                    src="/images/categories/catagory_academy.png"
                    alt=""
                    className="w-10 h-10"
                  />
                  <h3>এইচ এস সি</h3>
                </div>

                <div className="flex items-center gap-3 border-l-2 border-secondary shadow px-3 py-1.5 rounded">
                  <img
                    src="/images/categories/catagory_academy.png"
                    alt=""
                    className="w-10 h-10"
                  />
                  <h3>এইচ এস সি</h3>
                </div>

                <div className="flex items-center gap-3 border-l-2 border-secondary shadow px-3 py-1.5 rounded">
                  <img
                    src="/images/categories/catagory_academy.png"
                    alt=""
                    className="w-10 h-10"
                  />
                  <h3>এইচ এস সি</h3>
                </div>

                <div className="flex items-center gap-3 border-l-2 border-secondary shadow px-3 py-1.5 rounded">
                  <img
                    src="/images/categories/catagory_academy.png"
                    alt=""
                    className="w-10 h-10"
                  />
                  <h3>এইচ এস সি</h3>
                </div>

                <div className="flex items-center gap-3 border-l-2 border-secondary shadow px-3 py-1.5 rounded">
                  <img
                    src="/images/categories/catagory_academy.png"
                    alt=""
                    className="w-10 h-10"
                  />
                  <h3>এইচ এস সি</h3>
                </div>
              </div>

              <div className="mt-5 sm:mt-10 flex justify-center">
                <Link className="login_btn flex items-center gap-2">
                  see more <IoMdArrowRoundForward />
                </Link>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 4</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
