export default function AdmissionAddChapter() {
  return (
    <div className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h2>Add Admission Chapter</h2>
      </div>
      <div className="p-4">
        <form>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-1.5">Chapter Name</p>
              <input type="text" name="name" />
            </div>
            <div>
              <p className="mb-1.5">Subject</p>
              <select name="subject">
                <option value="">bangla</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <button className="secondary_btn">Add Chapter</button>
          </div>
        </form>
      </div>
    </div>
  );
}
