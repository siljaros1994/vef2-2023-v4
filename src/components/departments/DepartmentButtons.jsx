import React, { useState } from "react";
import { generateApiUrl } from "../../utils/generateApiUrl";
import { API_URL as URL } from "./Departments";
import { NavLink } from 'react-router-dom';
import './DepartmentButtons.css';

function DepartmentButtons({ state, slug, setState }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  async function updateTitle() {
    try {
      const apiUrl = generateApiUrl(URL, `/departments/${slug}`);

      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle }),
      });

      if (!response.ok) {
        throw new Error("not ok");
      }

      setState("data");
    } catch (e) {
      setState("error");
      console.log(e);
    }
  }

  async function updateDescription() {
    try {
      if (!slug) {
        throw new Error("Slug is not defined");
      }

      const apiUrl = generateApiUrl(URL, `/departments/${slug}`);

      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: newDescription }),
      });

      if (!response.ok) {
        throw new Error("not ok");
      }

      setState("data");
    } catch (e) {
      setState("error");
      console.log(e);
    }
  }

  async function deleteDepartment() {
    try {
      if (!slug) {
        throw new Error("Slug is not defined");
      }

      const apiUrl = generateApiUrl(URL, `/departments/${slug}`);

      const response = await fetch(apiUrl, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("not ok");
      }

      setState("data");
    } catch (e) {
      setState("error");
      console.log(e);
    }
  }

  return (
    <div className="DepartmentButtons">
      <input
        type="text"
        placeholder="Update title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={updateTitle}>Uppfæra titil</button>

      <input
        type="text"
        placeholder="Update description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button onClick={updateDescription}>Uppfæra umsögn</button>
      <button onClick={deleteDepartment}>Eyða deild</button>
      <NavLink to={`/departments/${slug}/courses`}>
      <button>Sjá áfanga</button>
      </NavLink>
    </div>
  );
};

export default DepartmentButtons;