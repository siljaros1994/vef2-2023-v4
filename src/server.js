const express = require("express");
const app = express();
const port = 4000;

const departments = [
  {
    id: 1,
    slug: "sæki",
    title: "Sæki",
    description: "Sæki er deild sem fjallar um sækni og gagnagrunnsfræði.",
  },
  {
    id: 2,
    slug: "vef-og-forritun",
    title: "Vef- og forritun",
    description: "Vef- og forritun er deild sem fjallar um vef- og forritun.",
  },
  {
    id: 3,
    slug: "stærðfræði",
    title: "Stærðfræði",
    description: "Stærðfræði er deild sem fjallar um stærðfræði.",
  },
];

app.use(express.json());

app.get("/departments", (req, res) => {
  res.json(departments);
});

app.get("/departments/:slug", (req, res) => {
  const department = departments.find((d) => d.slug === req.params.slug);
  if (!department) {
    res.status(404).json({ message: "Department not found" });
    return;
  }
  res.json(department);
});

app.patch("/departments/:slug", (req, res) => {
  const department = departments.find((d) => d.slug === req.params.slug);
  if (!department) {
    res.status(404).json({ message: "Department not found" });
    return;
  }
  department.title = req.body.title;
  department.description = req.body.description;
  res.json(department);
});

app.delete("/departments/:slug", (req, res) => {
  const index = departments.findIndex((d) => d.slug === req.params.slug);
  if (index === -1) {
    res.status(404).json({ message: "Department not found" });
    return;
  }
  departments.splice(index, 1);
  res.json({ message: "Department deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});