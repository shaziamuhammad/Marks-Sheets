const totalMarks = 200;

const students = [
  {
    name: "Ali",
    scienceMarks: 90,
    englishMarks: 70,
  },
  {
    name: "Huzaifa",
    scienceMarks: 10,
    englishMarks: 40,
  },
  {
    name: "Asim",
    scienceMarks: 40,
    englishMarks: 60,
  },
];

function calculateMarks(student) {
  const total = student.scienceMarks + student.englishMarks;
  const percentage = (total / totalMarks) * 100;
  const status = percentage >= 40 ? "PASSED" : "FAILED";

  return { total, percentage, status };
}

const tableBody = document.getElementById("tableBody");

students.forEach((student) => {
  const result = calculateMarks(student);

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.scienceMarks}</td>
    <td>${student.englishMarks}</td>
    <td>${result.total}</td>
    <td>${result.percentage.toFixed(2)}%</td>
    <td class="${result.status === 'PASSED' ? 'passed' : 'failed'}">${result.status}</td>
  `;

  tableBody.appendChild(row);
});
