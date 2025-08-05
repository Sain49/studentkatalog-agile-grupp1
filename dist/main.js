import { students } from "./data/students.js";
const studentList = document.getElementById("student-list");
students.forEach((student) => {
    const li = document.createElement("li");
    li.textContent = `${student.name} ${student.lastName}, ${student.age} år – ${student.isActive ? "Aktiv" : "Inaktiv"}`;
    li.classList.add(student.isActive ? "active" : "inactive");
    studentList.appendChild(li);
});
