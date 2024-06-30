export default function EditCategory() {
  return (
    <section>
      <div className="bg-base-100 rounded shadow">
        <h2 className="p-2 border-b text-lg font-medium">Edit Category</h2>

        <form className="p-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <p className="mb-1">Category Name</p>
              <input type="text" name="title" required />
            </div>
          </div>

          <div className="mt-2">
            <button className="primary_btn">Edit Category</button>
          </div>
        </form>
      </div>
    </section>
  );
}
