export default function AddWritten() {
  return (
    <section>
      <div className="bg-base-100 rounded shadow">
        <h2 className="p-2 border-b text-lg font-medium">Add Written</h2>

        <form className="p-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <p className="mb-1">Content</p>
              <input type="text" name="title" required />
            </div>
            <div>
              <p className="mb-1">Chapter Name</p>
              <select name="chapter" required>
                <option value=""></option>
              </select>
            </div>
            <div>
              <p className="mb-1">Subject Name</p>
              <select name="subject" required>
                <option value=""></option>
              </select>
            </div>
            <div>
              <p className="mb-1">Class Name</p>
              <select name="class" required>
                <option value=""></option>
              </select>
            </div>
            <div>
              <p className="mb-1">Category Name</p>
              <select name="category" required>
                <option value=""></option>
              </select>
            </div>
          </div>

          <div className="mt-2">
            <button className="primary_btn">Add Written</button>
          </div>
        </form>
      </div>
    </section>
  );
}
