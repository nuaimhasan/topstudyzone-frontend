// import { toast } from "react-toastify";

import { useGetAdmissionUniversitiesQuery } from "../../../../../Redux/api/admission/universityApi";

export default function AddQuestionSet() {
  const { data } = useGetAdmissionUniversitiesQuery();
  const universities = data?.data;

  const handleAdd = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const university = e.target.university.value;
    const year = e.target.year.value;

    const info = {
      name,
      year,
      university,
    };

    console.log(info);
  };

  return (
    <div className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h2>Add Question Set</h2>
      </div>
      <div className="p-4">
        <form onSubmit={handleAdd} className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <p className="mb-1">University</p>
              <select name="university" required>
                {universities?.map((u) => (
                  <option key={u?._id} value={u?._id}>
                    {u?.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-1">Year</p>
              <select name="year" required>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
              </select>
            </div>
          </div>

          <div>
            <p className="mb-1">Set Name</p>
            <textarea name="name"></textarea>
          </div>

          <div>
            <button className="secondary_btn">Add Question Set</button>
          </div>
        </form>
      </div>
    </div>
  );
}
