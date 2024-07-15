import { useState } from "react";
import Select from "react-dropdown-select";
import SelectedSubject from "./SelectedSubject";
import { useGetAcademySubjectsQuery } from "../../../../../../Redux/api/academy/subjectApi";
import { toast } from "react-toastify";

export default function AddQuestionSet() {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedMcqs, setSelectedMcqs] = useState([]);

  const { data: subject } = useGetAcademySubjectsQuery();
  const subjects = subject?.data;

  const handleAdd = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const year = e.target.year.value;

    if (selectedSubjects?.length <= 0) {
      return toast.warning("subject is required!");
    }

    if (selectedSubjects?.length !== selectedMcqs?.length) {
      return toast.warning("mcq is required!");
    }

    const info = {
      title,
      year,
      selectedMcqs,
    };

    console.log(info);
  };

  return (
    <div className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h2>Add Question Set</h2>
      </div>
      <div className="p-4">
        <form onSubmit={handleAdd}>
          <div>
            <p className="mb-1.5">Title</p>
            <input type="text" name="title" required />
          </div>

          <div className="mt-3 grid sm:grid-cols-3 gap-4">
            <div>
              <p>Year</p>
              <select name="year" required>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
              </select>
            </div>

            <div>
              <p>Select Subjects</p>
              <Select
                multi
                options={subjects}
                labelField="name"
                valueField="_id"
                onChange={(values) => setSelectedSubjects(values)}
              />
            </div>
          </div>

          <div className="mt-4">
            {selectedSubjects?.map((subject, i) => (
              <SelectedSubject
                key={i}
                subject={subject}
                selectedMcqs={selectedMcqs}
                setSelectedMcqs={setSelectedMcqs}
              />
            ))}
          </div>

          <div className="mt-4">
            <button className="secondary_btn">Add Question Set</button>
          </div>
        </form>
      </div>
    </div>
  );
}
