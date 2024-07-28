import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import MainLayout from "../Layout/MainLayout";
import Spinner from "../Components/Loader/Spinner/Spinner";

import Universities from "../Pages/Admin/Admission/Universities/Universities";
import AddUniversity from "../Pages/Admin/Admission/Universities/AddUniversity";
import EditUniversity from "../Pages/Admin/Admission/Universities/EditUniversity";

import QuestionSet from "../Pages/Admin/Admission/QuestionSet/QuestionSet";
import AddQuestionSet from "../Pages/Admin/Admission/QuestionSet/AddQuestionSet/AddQuestionSet";
import EditQuestionSet from "../Pages/Admin/Admission/QuestionSet/EditQuestionSet/EditQuestionSet";

import SubChapters from "../Pages/Admin/Academy/Chapter/SubChapters/SubChapters";
import AddSubChapter from "../Pages/Admin/Academy/Chapter/SubChapters/AddSubChapter";
import EditSubChapter from "../Pages/Admin/Academy/Chapter/SubChapters/EditSubChapter";
import SubSubChapters from "../Pages/Admin/Academy/Chapter/SubSubChapters/SubSubChapters";
import AddSubSubChapter from "../Pages/Admin/Academy/Chapter/SubSubChapters/AddSubSubChapter";
import EditSubSubChapter from "../Pages/Admin/Academy/Chapter/SubSubChapters/EditSubSubChapter";
import ExamResultDetails from "../Pages/UserLayoutPages/Exam/ExamResultDetails/ExamResultDetails";
import QuestionBankPage from "../Pages/UserLayoutPages/Admission/QuestionBankPage/QuestionBankPage";
import AdmissionMCQ from "../Pages/Admin/Admission/AdmissionMCQ/AdmissionMCQ";
import AddAdmissionMCQ from "../Pages/Admin/Admission/AdmissionMCQ/AddAdmissionMCQ";
import QuestionBankDetails from "../Pages/UserLayoutPages/Admission/QuestionBankDetails/QuestionBankDetails";
// import EditAdmissionMCQ from "../Pages/Admin/Admission/AdmissionMCQ/EditAdmissionMCQ";

const Login = lazy(() => import("../Pages/Login/Login"));
const Signup = lazy(() => import("../Pages/Signup/Signup"));

//------------------------------------------------------------------------------
//User Layout Routes
//------------------------------------------------------------------------------
const UserLayout = lazy(() => import("../Layout/UserLayout"));
const UserHome = lazy(() =>
  import("../Pages/UserLayoutPages/UserHome/UserHome")
);
const Academy = lazy(() => import("../Pages/UserLayoutPages/Academy/Academy"));
const SubjectsF = lazy(() =>
  import("../Pages/UserLayoutPages/Academy/SubjectsF/SubjectsF")
);
const ChaptersF = lazy(() =>
  import("../Pages/UserLayoutPages/Academy/ChaptersF/ChaptersF")
);
const Content = lazy(() =>
  import("../Pages/UserLayoutPages/Academy/Content/Content")
);

const McqF = lazy(() => import("../Pages/UserLayoutPages/Academy/McqF/McqF"));
const McqDetails = lazy(() =>
  import("../Pages/UserLayoutPages/Academy/McqDetails/McqDetails")
);

const WrittenF = lazy(() =>
  import("../Pages/UserLayoutPages/Academy/WrittenF/WrittenF")
);

const ModelTest = lazy(() =>
  import("../Pages/UserLayoutPages/Academy/ModelTest/ModelTest")
);

//------------------------------------------Exam
const ExamResult = lazy(() =>
  import("../Pages/UserLayoutPages/Exam/ExamResult/ExamResult")
);

//-----------------------------------------Admission
const Admission = lazy(() =>
  import("../Pages/UserLayoutPages/Admission/Admission/Admission")
);

//------------------------------------------------------------------------------
//Admin Routes
//------------------------------------------------------------------------------
const AdminLayout = lazy(() => import("../Layout/AdminLayout"));
const Dashboard = lazy(() => import("../Pages/Admin/Dashboard/Dashboard"));

const Categories = lazy(() =>
  import("../Pages/Admin/Academy/Category/Categories")
);
const AddCategory = lazy(() =>
  import("../Pages/Admin/Academy/Category/AddCategory")
);
const EditCategory = lazy(() =>
  import("../Pages/Admin/Academy/Category/EditCategory")
);

const Classes = lazy(() => import("../Pages/Admin/Academy/Class/Classes"));
const AddClass = lazy(() => import("../Pages/Admin/Academy/Class/AddClass"));
const EditClass = lazy(() => import("../Pages/Admin/Academy/Class/EditClass"));

const Subject = lazy(() => import("../Pages/Admin/Academy/Subject/Subject"));
const AddSubject = lazy(() =>
  import("../Pages/Admin/Academy/Subject/AddSubject")
);
const EditSubject = lazy(() =>
  import("../Pages/Admin/Academy/Subject/EditSubject")
);

const Chapters = lazy(() => import("../Pages/Admin/Academy/Chapter/Chapters"));
const AddChapter = lazy(() =>
  import("../Pages/Admin/Academy/Chapter/AddChapter")
);
const EditChapter = lazy(() =>
  import("../Pages/Admin/Academy/Chapter/EditChapter")
);

const Contents = lazy(() => import("../Pages/Admin/Academy/Content/Contents"));
const AddContent = lazy(() =>
  import("../Pages/Admin/Academy/Content/AddContent")
);
const EditContent = lazy(() =>
  import("../Pages/Admin/Academy/Content/EditContent")
);

const MCQ = lazy(() => import("../Pages/Admin/Academy/MCQ/MCQ"));
const AddMCQ = lazy(() => import("../Pages/Admin/Academy/MCQ/AddMCQ"));
const EditMCQ = lazy(() => import("../Pages/Admin/Academy/MCQ/EditMCQ"));

const Writtens = lazy(() => import("../Pages/Admin/Academy/Written/Writtens"));
const AddWritten = lazy(() =>
  import("../Pages/Admin/Academy/Written/AddWritten")
);
const EditWritten = lazy(() =>
  import("../Pages/Admin/Academy/Written/EditWritten")
);

const Packsges = lazy(() => import("../Pages/Admin/Packages/Packages"));
const AddPackage = lazy(() => import("../Pages/Admin/Packages/AddPackage"));
const EditPackage = lazy(() => import("../Pages/Admin/Packages/EditPackage"));

const Features = lazy(() => import("../Pages/Admin/Features/Features"));
const AddFeature = lazy(() => import("../Pages/Admin/Features/AddFeature"));
const EditFeature = lazy(() => import("../Pages/Admin/Features/EditFeature"));

const Admins = lazy(() => import("../Pages/Admin/Admins/Admins"));
const AddAdmin = lazy(() => import("../Pages/Admin/Admins/AddAdmin"));

const Logo = lazy(() => import("../Pages/Admin/FrontEndSetting/Logo/Logo"));
const Banner = lazy(() =>
  import("../Pages/Admin/FrontEndSetting/Banner/Banner")
);
const About = lazy(() => import("../Pages/Admin/FrontEndSetting/About/About"));
const ContactUs = lazy(() =>
  import("../Pages/Admin/FrontEndSetting/ContactUs/ContactUs")
);

const Profile = lazy(() =>
  import("../Pages/Admin/GeneralSetting/Profile/Profile")
);

const SEO = lazy(() => import("../Pages/Admin/SEO/SEO"));

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spinner />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<Spinner />}>
                <Signup />
              </Suspense>
            }
          />
        </Route>

        {/* ---------User Layout Routes----- */}
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <UserLayout />
            </Suspense>
          }
        >
          <Route path="/home" element={<UserHome />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/academy/:classId/subjects" element={<SubjectsF />} />
          <Route path="/academy/:subjectId/chapters" element={<ChaptersF />} />
          <Route path="/academy/:chapterId/content" element={<Content />} />

          <Route path="/academy/mcq" element={<McqF />} />
          <Route path="/academy/mcq/:id" element={<McqDetails />} />

          <Route path="/academy/written" element={<WrittenF />} />
          <Route path="/academy/test" element={<ModelTest />} />

          {/*-----------------Admission----------------------*/}
          <Route path="/admission" element={<Admission />} />
          <Route
            path="/admission/question-bank"
            element={<QuestionBankPage />}
          />
          <Route
            path="admission/question-bank/:id"
            element={<QuestionBankDetails />}
          />

          {/* --------------Exam----------------*/}
          <Route path="/exam-result" element={<ExamResult />} />
          <Route path="/exam-result/:id" element={<ExamResultDetails />} />
        </Route>

        {/* -----------------Admin Routes------------------ */}
        <Route
          path="/admin"
          element={
            <Suspense fallback={<Spinner />}>
              <AdminLayout />
            </Suspense>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="academy/categories" element={<Categories />} />
          <Route path="academy/category/add" element={<AddCategory />} />
          <Route path="academy/category/edit/:id" element={<EditCategory />} />

          <Route path="academy/classes" element={<Classes />} />
          <Route path="academy/:categoryId/class/add" element={<AddClass />} />
          <Route path="academy/class/edit/:id" element={<EditClass />} />

          <Route path="academy/subjects" element={<Subject />} />
          <Route path="academy/subject/add" element={<AddSubject />} />
          <Route path="academy/subject/edit/:id" element={<EditSubject />} />

          <Route path="academy/chapters" element={<Chapters />} />
          <Route path="academy/chapter/add" element={<AddChapter />} />
          <Route path="academy/chapter/edit/:id" element={<EditChapter />} />

          <Route path="academy/sub-chapters" element={<SubChapters />} />
          <Route path="academy/sub-chapter/add" element={<AddSubChapter />} />
          <Route
            path="academy/sub-chapter/edit/:id"
            element={<EditSubChapter />}
          />

          <Route path="academy/sub-sub-chapters" element={<SubSubChapters />} />
          <Route
            path="academy/sub-sub-chapter/add"
            element={<AddSubSubChapter />}
          />
          <Route
            path="academy/sub-sub-chapter/edit/:id"
            element={<EditSubSubChapter />}
          />

          <Route path="academy/contents" element={<Contents />} />
          <Route path="academy/content/add" element={<AddContent />} />
          <Route path="academy/content/edit/:id" element={<EditContent />} />

          {/*-----------------Admission----------------------*/}

          {/* university */}
          <Route path="admission/universities" element={<Universities />} />
          <Route
            path="admission/universities/add"
            element={<AddUniversity />}
          />
          <Route
            path="admission/universities/edit/:id"
            element={<EditUniversity />}
          />

          {/* question-set */}
          <Route path="admission/question-set" element={<QuestionSet />} />
          <Route
            path="admission/question-set/add"
            element={<AddQuestionSet />}
          />
          <Route
            path="admission/question-set/edit/:id"
            element={<EditQuestionSet />}
          />

          {/* Admission MCQ */}
          <Route path="admission/mcq" element={<AdmissionMCQ />} />
          <Route path="admission/mcq/add" element={<AddAdmissionMCQ />} />
          {/* <Route path="admission/mcq/edit/:id" element={<EditAdmissionMCQ />} /> */}

          {/* -------------MCQ----------- */}
          <Route path="mcq/all" element={<MCQ />} />
          <Route path="mcq/add" element={<AddMCQ />} />
          <Route path="mcq/edit/:id" element={<EditMCQ />} />

          {/* -------------Written----------- */}
          <Route path="academy/writtens" element={<Writtens />} />
          <Route path="academy/written/add" element={<AddWritten />} />
          <Route path="academy/written/edit/:id" element={<EditWritten />} />

          <Route path="packages" element={<Packsges />} />
          <Route path="packages/add" element={<AddPackage />} />
          <Route path="packages/edit/:id" element={<EditPackage />} />

          <Route path="features" element={<Features />} />
          <Route path="features/add" element={<AddFeature />} />
          <Route path="features/edit/:id" element={<EditFeature />} />

          <Route path="admins" element={<Admins />} />
          <Route path="admins/add" element={<AddAdmin />} />

          <Route path="front-end/logo" element={<Logo />} />
          <Route path="front-end/banner" element={<Banner />} />
          <Route path="front-end/about" element={<About />} />
          <Route path="front-end/contact" element={<ContactUs />} />

          <Route path="general-setting/profile" element={<Profile />} />

          <Route path="seo" element={<SEO />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
