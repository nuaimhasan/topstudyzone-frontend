import { useParams } from "react-router-dom";

export default function EditQuestionSet() {
  const { id } = useParams();

  return (
    <div className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h2>Add Question Set</h2>
      </div>
      <div className="p-4">
        <form>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-1.5">Question Set Name</p>
              <input type="text" name="university" />
            </div>
          </div>

          <div className="mt-4">
            <button className="secondary_btn">Edit Question Set</button>
          </div>
        </form>
      </div>
    </div>
  );
}
