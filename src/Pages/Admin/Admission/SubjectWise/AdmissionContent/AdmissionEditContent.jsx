export default function AdmissionEditContent() {
  return (
    <div className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h2>Edit Admission Content</h2>
      </div>
      <div className="p-4">
        <form>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-1.5">Content Name</p>
              <input type="text" name="name" />
            </div>
          </div>

          <div className="mt-4">
            <button className="secondary_btn">Edit Content</button>
          </div>
        </form>
      </div>
    </div>
  );
}
