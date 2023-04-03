import { useState, useEffect, useCallback} from "react";
import { Link } from "react-router-dom";
import { DepartmentForm } from "../departments/DepartmentForm";
import { generateApiUrl } from '../../utils/generateApiUrl';

import "./Departments.css";

export const API_URL = process.env.REACT_APP_API_URL;

export function Departments({titleName}) {
  // type State = 'empty' | 'data' | 'error' | 'loading'
  const [state, setState] = useState('empty')
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = useCallback(async () => {
    setState("loading");
    try {
      const url = generateApiUrl("/departments");
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("not ok");
      }
      const json = await response.json();
      setDepartments(json);
      console.log(json);
      setState("data");
    } catch (e) {
      setState("error");
      console.log(e);
    }
  }, []);

  async function deleteDepartment(slug) {
    try {
      const apiUrl = generateApiUrl(`/departments/${slug}`);
      const response = await fetch(apiUrl, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("not ok");
      }

      // Refetch departments after successful deletion
      fetchDepartments();
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  return (
    <section>
      <h2 className="departments-title">{titleName}</h2>
      {state === "empty" && <p>engar deildir</p>}
      {state === "error" && <p>villa við að sækja deildir</p>}
      {state === "loading" && <p>Sæki deildir...</p>}
      <button onClick={fetchDepartments}>Sækja deildir</button>
      <ul>
        {state === "data" &&
          departments.map((department, i) => (
            <li key={i} className="departments-list-item">
              <Link
                to={{
                  pathname: `/departments/${department.slug}/`,
                }}
              >
                {department.title}
              </Link>
              <button className="delete-department" onClick={() => deleteDepartment(department.slug)}>Eyða deild</button>
            </li>
          ))}
      </ul>
      <DepartmentForm />
    </section>
  );
}

export default Departments;