import { students } from "./data/students.js";
const studentList = document.getElementById("student-list") as HTMLUListElement;

students.forEach((student) => {
  const li = document.createElement("li");
  li.textContent = `${student.name} ${student.lastName}`;
  studentList.appendChild(li);
});
