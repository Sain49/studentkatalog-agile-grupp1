import { students } from "./data/students.js";
const studentList = document.getElementById("student-list") as HTMLUListElement;
const form = document.getElementById("student-form") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const lastNameInput = document.getElementById("lastName") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;

students.forEach((student) => {
  const li = document.createElement("li");
  li.textContent = `${student.name} ${student.lastName}, ${student.age} år – ${
    student.isActive ? "Aktiv" : "Inaktiv"
  }`;
  li.classList.add(student.isActive ? "active" : "inactive");
  studentList.appendChild(li);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const age = ageInput.value.trim();

  if (!name || !lastName || !age) return;

  const li = document.createElement("li");
  li.textContent = `${name} ${lastName}, ${age} år - Aktiv`;
  li.classList.add("active");

  studentList.appendChild(li);

  form.reset();
});