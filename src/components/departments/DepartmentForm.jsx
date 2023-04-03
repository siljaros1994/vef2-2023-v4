import { useState } from 'react';
import { generateApiUrl } from "../../utils/generateApiUrl";
import './Departments.css';
import './DepartmentForm.css';

export function DepartmentForm() {
  const [state, setState] = useState('empty');
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  async function createDepartment(name, description) {
    setState('loading');
    try {
      const apiUrl = generateApiUrl('/departments');
      const body = {
        title: name,
        description,
      };
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          const responseJson = await response.json();
          console.log(responseJson);
          setState('error');
          setErrors(responseJson.errors);
        }
      } else {
        // const json = await response.json();
        setState('success');
      }
    } catch (e) {
      setState('error');
      console.log(e);
    }
  }  

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log('halló frá formi');
    console.log('senda:', name);

    createDepartment(name, description);
  };

  const onInputChange = (e) => {
    setName(e.target.value);
  };

  console.log(name);

  const onInputDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  return (
    <>
      <h2 className="department-form-title">Ný deild</h2>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label for="name">Nafn</label>
          <input
            id="name"
            type="text"
            value={name}
            defaultValue="foo"
            onChange={onInputChange}
          />
        </div>
        <div>
          <label for="description">Lýsing</label>
          <textarea
            id="description"
            value={description}
            onChange={onInputDescriptionChange}
          />
        </div>
        <button>Búa til nýja deild</button>
      </form>
      {state === 'empty' && <p>engar deildir</p>}
      {state === 'error' && (
        <>
          <p>villa við að búa til deild</p>
          <p>Villur:</p>
          <ul>
            {errors.map((error, i) => {
              return <li key={i}>{error.msg}</li>;
            })}
          </ul>
        </>
      )}
      {state === 'loading' && <p>By til deild...</p>}
      {state === 'success' && <p>Bjó til deild!</p>}
    </>
  );
}

export default DepartmentForm;