import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import MainLayout from "../Layout/MainLayout";
import Spinner from "../Components/Loader/Spinner/Spinner";

import Universities from "../Pages/Admin/Admission/UniversityWise/Universities/Universities";
import AddUniversity from "../Pages/Admin/Admission/UniversityWise/Universities/AddUniversity";
import EditUniversity from "../Pages/Admin/Admission/UniversityWise/Universities/EditUniversity";

import QuestionSet from "../Pages/Admin/Admission/UniversityWise/QuestionSet/QuestionSet";
import AddQuestionSet from "../Pages/Admin/Admission/UniversityWise/QuestionSet/AddQuestionSet/AddQuestionSet";
import EditQuestionSet from "../Pages/Admin/Admission/UniversityWise/QuestionSet/EditQuestionSet/EditQuestionSet";

import AdmissionMCQ from "../Pages/Admin/Admission/AdmissionMCQ/AdmissionMCQ";

import AdmissionSubjects from "../Pages/Admin/Admission/SubjectWise/AdmissionSubjects/AdmissionSubjects";
import AdmissionAddSubject from "../Pages/Admin/Admission/SubjectWise/AdmissionSubjects/AdmissionAddSubject";
import AdmissionEditSubject from "../Pages/Admin/Admission/SubjectWise/AdmissionSubjects/AdmissionEditSubject";
import AdmissionAddChapter from "../Pages/Admin/Admission/SubjectWise/AdmissionChapter/AdmissionAddChapter";
import AdmissionEditChapter from "../Pages/Admin/Admission/SubjectWise/AdmissionChapter/AdmissionEditChapter";
import AdmissionChapters from "../Pages/Admin/Admission/SubjectWise/AdmissionChapter/AdmissionChapters";
import AdmissionContent from "../Pages/Admin/Admission/SubjectWise/AdmissionContent/AdmissionContent";
import AdmissionAddContent from "../Pages/Admin/Admission/SubjectWise/AdmissionContent/AdmissionAddContent";
import AdmissionEditContent from "../Pages/Admin/Admission/SubjectWise/AdmissionContent/AdmissionEditContent";

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

          <Route path="/exam/exam-result" element={<ExamResult />} />
        </Route>

        {/* ---------Admin Routes----------- */}
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

          <Route path="academy/contents" element={<Contents />} />
          <Route path="academy/content/add" element={<AddContent />} />
          <Route path="academy/content/edit/:id" element={<EditContent />} />

          <Route path="academy/mcq" element={<MCQ />} />
          <Route path="academy/mcq/add" element={<AddMCQ />} />
          <Route path="academy/mcq/edit/:id" element={<EditMCQ />} />

          <Route path="academy/writtens" element={<Writtens />} />
          <Route path="academy/written/add" element={<AddWritten />} />
          <Route path="academy/written/edit/:id" element={<EditWritten />} />

          {/*-----------------Admission----------------------*/}

          {/* subjects */}
          <Route path="admission/subjects" element={<AdmissionSubjects />} />
          <Route
            path="admission/subjects/add"
            element={<AdmissionAddSubject />}
          />
          <Route
            path="admission/subjects/edit/:id"
            element={<AdmissionEditSubject />}
          />

          {/* chapters */}
          <Route path="admission/chapters" element={<AdmissionChapters />} />
          <Route
            path="admission/chapters/add"
            element={<AdmissionAddChapter />}
          />
          <Route
            path="admission/chapters/edit/:id"
            element={<AdmissionEditChapter />}
          />

          {/* contents */}
          <Route path="admission/contents" element={<AdmissionContent />} />
          <Route
            path="admission/contents/add"
            element={<AdmissionAddContent />}
          />
          <Route
            path="admission/contents/edit/:id"
            element={<AdmissionEditContent />}
          />

          {/* university */}
          <Route
            path="admission/university/universities"
            element={<Universities />}
          />
          <Route
            path="admission/university/universities/add"
            element={<AddUniversity />}
          />
          <Route
            path="admission/university/universities/edit/:id"
            element={<EditUniversity />}
          />

          {/* question-set */}
          <Route
            path="admission/university/question-set"
            element={<QuestionSet />}
          />
          <Route
            path="admission/university/question-set/add"
            element={<AddQuestionSet />}
          />
          <Route
            path="admission/university/question-set/edit/:id"
            element={<EditQuestionSet />}
          />

          {/* mcq */}
          <Route path="admission/mcq" element={<AdmissionMCQ />} />

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
