export default function AdmissionAddSubject() {
  return (
    <div className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h2>Add Admission Subject</h2>
      </div>
      <div className="p-4">
        <form>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-1.5">Subject Name</p>
              <input type="text" name="university" />
            </div>
          </div>

          <div className="mt-4">
            <button className="secondary_btn">Add Subject</button>
          </div>
        </form>
      </div>
    </div>
  );
}
