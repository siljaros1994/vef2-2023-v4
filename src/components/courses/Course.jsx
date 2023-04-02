import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import './Course.css';

export function Course() {
  const [state, setState] = useState('empty');
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();

  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    async function fetchData() {
      await fetchCourse(courseId);
    }
    fetchData();
  }, [courseId]);

  async function fetchCourse(courseId) {
    setState('loading');
    try {
      const response = await fetch(`${URL}/courses/${courseId}`);
      if (!response.ok) {
        throw new Error("not ok");
      }
      const json = await response.json();
      setCourse(json);
      setState('data');
    } catch (e) {
      setState('error');
      console.log(e);
    }
  }

  return (
    <section>
    <h2 className="courseDetails" >{titleName}</h2>
        {state === 'empty' && (<p>engar deildir</p>)}
        {state === 'error' && (<p>villa við að sækja deildir</p>)}
        {state === 'loading' && (<p>Sæki deildir...</p>)}
      {state === 'data' && (
        <>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </>
      )}
      <CourseForm />
    </section>
  );
}

export default Course;