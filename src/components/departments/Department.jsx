import { useState, useEffect } from 'react';
import { generateApiUrl } from '../../utils/generateApiUrl';
import DepartmentButtons from "./DepartmentButtons";
import { API_URL as URL } from "./Departments";


export function Department({ slug }) {
  const [state, setState] = useState('loading');
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    async function fetchDepartmentData() {
      setState('loading');
      try {
        const apiUrl = generateApiUrl(URL, `/departments/${slug}`);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('not ok');
        }
        const json = await response.json();
        setDepartment(json);
        setState('data');
      } catch (e) {
        setState('error');
        console.log(e);
      }
    }
    fetchDepartmentData();
  }, [slug]);

  if (state === 'error') {
    return <p>Villa við að sækja deild</p>;
  }

  if (state === 'loading') {
    return <p>Sæki deild</p>;
  }

  return (
    <section>
      <h2>{department.title}</h2>
      <p>{department.description}</p>
      <DepartmentButtons state={state} slug={slug} setState={setState} />
    </section>
  );
}
export default Department;
