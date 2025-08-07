import { students } from "./data/students.js";
const studentList = document.getElementById("student-list");
const form = document.getElementById("student-form");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const ageInput = document.getElementById("age");
students.forEach((student) => {
    const li = document.createElement("li");
    li.textContent = `${student.name} ${student.lastName}, ${student.age} år – ${student.isActive ? "Aktiv" : "Inaktiv"}`;
    li.classList.add(student.isActive ? "active" : "inactive");
    studentList.appendChild(li);
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const age = ageInput.value.trim();
    if (!name || !lastName || !age)
        return;
    const li = document.createElement("li");
    li.textContent = `${name} ${lastName}, ${age} år - Aktiv`;
    li.classList.add("active");
    studentList.appendChild(li);
    form.reset();
});
