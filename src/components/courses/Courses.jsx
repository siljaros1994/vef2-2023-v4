import React, { useEffect, useState, useCallback } from 'react';
import { generateApiUrl } from "../../utils/generateApiUrl";
import './Courses.css';

const Courses = ({ titleName, departmentSlug }) => {
  const [state, setState] = useState("empty");
  const [courses, setCourses] = useState([]);

  const fetchData = useCallback(async () => {
    if (!departmentSlug) {
      return;
    }

    setState("loading");

    try {
      const url = generateApiUrl(`/departments/${departmentSlug}/courses`);
      console.log("Generated URL:", url);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("not ok");
      }

      const json = await response.json();
      setCourses(json);
      setState("data");
    } catch (e) {
      setState("error");
      console.log(e);
    }
  }, [departmentSlug]);

  useEffect(() => {
    if (departmentSlug) {
      fetchData();
    }
  }, [fetchData, departmentSlug]);

  async function deleteCourse(courseId) {
    try {
      const apiUrl = generateApiUrl(`/courses/${courseId}`);
      const response = await fetch(apiUrl, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("not ok");
      }

      fetchData();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <section>
      <h3>{titleName}</h3>
      <h2>{departmentSlug}</h2>
      {state === "empty" && <p>veldu deild hér að ofan</p>}
      {state === "error" && <p>Villa við að sækja námskeið.</p>}
      {state === "loading" && <p>Loading...</p>}
      {state === "data" && (
        <table>
          <thead>
            <tr>
              <th>Númer</th>
              <th>Heiti</th>
              <th>Einingar</th>
              <th>Kennslumisseri</th>
              <th>Námsstig</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.courseId}</td>
                <td>
                  <a href={course.url}>{course.title}</a>
                </td>
                <td>{course.number}</td>
                <td>{course.name}</td>
                <td>{course.credits}</td>
                <td>{course.semester}</td>
                <td>{course.degree}</td>
                <td>
                  <button onClick={() => deleteCourse(course.courseId)}>Eyða námskeiði</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Courses;