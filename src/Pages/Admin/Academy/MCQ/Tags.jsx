import { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import { useGetAcademyCategoriesQuery } from "../../../../Redux/api/academy/categoryApi";
import { useGetAcademyClassesQuery } from "../../../../Redux/api/academy/classApi";
import { useGetAcademySubjectsQuery } from "../../../../Redux/api/academy/subjectApi";
import { useGetAcademyChaptersQuery } from "../../../../Redux/api/academy/chapterApi";
import { useGetAcademySubChaptersQuery } from "../../../../Redux/api/academy/subChapterApi";
import { useGetAcademySubSubChaptersQuery } from "../../../../Redux/api/academy/subSubChapterApi";
import { useGetAdmissionUniversitiesQuery } from "../../../../Redux/api/admission/universityApi";

export default function Tags({ setSelectedTags }) {
  const [tags, setTags] = useState([]);

  const { data: category } = useGetAcademyCategoriesQuery();
  const { data: cls } = useGetAcademyClassesQuery({});
  const { data: subject } = useGetAcademySubjectsQuery({});
  const { data: chapter } = useGetAcademyChaptersQuery({});
  const { data: subChapter } = useGetAcademySubChaptersQuery({});
  const { data: subSubChapter } = useGetAcademySubSubChaptersQuery({});

  const { data: university } = useGetAdmissionUniversitiesQuery({});

  useEffect(() => {
    if (category?.data?.length > 0) {
      let categories = category?.data?.map((item) => ({
        name: item?.name,
        _id: item?._id,
      }));
      setTags((prevTags) => [...prevTags, ...categories]);
    }

    if (cls?.data?.length > 0) {
      let classes = cls?.data?.map((item) => ({
        name: item?.name,
        _id: item?._id,
      }));
      setTags((prevTags) => [...prevTags, ...classes]);
    }

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
  }, [category, cls, subject, chapter, subChapter, subSubChapter, university]);

  return (
    <div className="mt-4">
      <p className="mb-1">Tags</p>
      <Select
        multi
        options={tags}
        labelField="name"
        valueField="name"
        onChange={(values) => setSelectedTags(values)}
      />
    </div>
  );
}
