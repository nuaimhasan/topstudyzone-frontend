import { useEffect, useState } from "react";
import Select from "react-dropdown-select";

import { useGetAcademySubjectsQuery } from "../../../../Redux/api/academy/subjectApi";
import { useGetAcademyChaptersQuery } from "../../../../Redux/api/academy/chapterApi";
import { useGetAcademySubChaptersQuery } from "../../../../Redux/api/academy/subChapterApi";
import { useGetAcademySubSubChaptersQuery } from "../../../../Redux/api/academy/subSubChapterApi";
import { useGetAdmissionUniversitiesQuery } from "../../../../Redux/api/admission/universityApi";
import { useGetAdmissionAllQuestionSetQuery } from "../../../../Redux/api/admission/questionSetApi";

export default function Tags({ setSelectedTags, selectedTags }) {
  const [tags, setTags] = useState([]);

  const { data: subject } = useGetAcademySubjectsQuery({});
  const { data: chapter } = useGetAcademyChaptersQuery({});
  const { data: subChapter } = useGetAcademySubChaptersQuery({});
  const { data: subSubChapter } = useGetAcademySubSubChaptersQuery({});

  const { data: university } = useGetAdmissionUniversitiesQuery({});
  const { data: set } = useGetAdmissionAllQuestionSetQuery({});

  useEffect(() => {
    if (subject?.data?.length > 0) {
      let subjects = subject?.data?.map((item) => ({
        name: item?.name,
        _id: item?._id,
      }));
      setTags((prevTags) => [...prevTags, ...subjects]);
    }

    if (chapter?.data?.length > 0) {
      let chapters = chapter?.data?.map((item) => ({
        name: item?.name,
        _id: item?._id,
      }));
      setTags((prevTags) => [...prevTags, ...chapters]);
    }

    if (subChapter?.data?.length > 0) {
      let subChapters = subChapter?.data?.map((item) => ({
        name: item?.name,
        _id: item?._id,
      }));
      setTags((prevTags) => [...prevTags, ...subChapters]);
    }

    if (subSubChapter?.data?.length > 0) {
      let subSubChapters = subSubChapter?.data?.map((item) => ({
        name: item?.name,
        _id: item?._id,
      }));
      setTags((prevTags) => [...prevTags, ...subSubChapters]);
    }

    if (university?.data?.length > 0) {
      let universities = university?.data?.map((item) => ({
        name: item?.name,
        _id: item?._id,
      }));
      setTags((prevTags) => [...prevTags, ...universities]);
    }

    if (set?.data?.length > 0) {
      let sets = set?.data?.map((item) => ({
        name: item?.name,
        _id: item?._id,
      }));
      setTags((prevTags) => [...prevTags, ...sets]);
    }
  }, [subject, chapter, subChapter, subSubChapter, university, set]);

  return (
    <div className="mt-4">
      <p className="mb-1">Tags</p>
      <Select
        multi
        options={tags}
        labelField="name"
        valueField="name"
        values={selectedTags}
        onChange={(values) => setSelectedTags(values)}
      />
    </div>
  );
}
