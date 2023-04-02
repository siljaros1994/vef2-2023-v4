import { useState } from "react";
import { generateApiUrl } from "../../utils/generateApiUrl";

export const CourseForm = ({ departmentSlug, fetchCourses }) => {
  const [formData, setFormData] = useState({ name: "", credits: "", semester: "", degree: "" });
  const [state, setState] = useState("empty");

  async function handleSubmit(event) {
    event.preventDefault();

    setState("loading");
    try {
      const response = await fetch(generateApiUrl(`${URL}/departments/${departmentSlug}/courses `), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("not ok");
      }

      setState("success");
      setFormData({ name: "", credits: "", semester: "", degree: "" });
      await fetchCourses();
    } catch (e) {
      setState("error");
      console.log(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Búa til námskeið</h2>
      <label htmlFor="name">Námskeið</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={(event) => setFormData({ ...formData, name: event.target.value })}
      />
      <label htmlFor="credits">Einingar</label>
      <input
        id="credits"
        name="credits"
        type="number"
        min="0"
        step="0.5"
        value={formData.credits}
        onChange={(event) => setFormData({ ...formData, credits: event.target.value })}
      />
      <label htmlFor="semester">Kennslumisseri</label>
      <input
        id="semester"
        name="semester"
        type="text"
        value={formData.semester}
        onChange={(event) => setFormData({ ...formData, semester: event.target.value })}
      />
      <label htmlFor="degree">Námsstig</label>
      <input
        id="degree"
        name="degree"
        type="text"
        value={formData.degree}
        onChange={(event) => setFormData({ ...formData, degree: event.target.value })}
      />
      <button type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Hleður..." : "Búa til námskeið"}
      </button>
      {state === "success" && <p className="success-message">Námskeið búið til!</p>}
      {state === "error" && <p className="error-message">Villa við að búa til námskeið.</p>}
    </form>
  );
};