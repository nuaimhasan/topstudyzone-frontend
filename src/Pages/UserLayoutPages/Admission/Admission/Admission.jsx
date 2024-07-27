import "/src/assets/css/Admission.css";
import QuestionBank from "./QuestionBank/QuestionBank";
import CategoryWise from "./CategoryWise/CategoryWise";

export default function Admission() {
  return (
    <div>
      <CategoryWise />

      <br />

      <QuestionBank />
    </div>
  );
}
