const students = [
  { id: "SV01", name: "Sơn", age: 20, score: 8.5 },
  { id: "SV02", name: "Minh", age: 21, score: 6.5 },
  { id: "SV03", name: "Khải", age: 20, score: 9.2 },
  { id: "SV04", name: "Tanh", age: 22, score: 4.5 },
  { id: "SV05", name: "Huy", age: 21, score: 7.5 },
  { id: "SV06", name: "Lan", age: 20, score: 9.2 },
];

const title = document.getElementById("title");
title.textContent = "HỆ THỐNG QUẢN LÝ SINH VIÊN";
title.style.color = "green";
title.classList.add("highlight");

const description = document.getElementById("description");
description.textContent = "Thông tin sinh viên lớp 75DCTT22";

const studentList = document.getElementById("studentList");
studentList.classList.add("student-container");
const renderStudents = (students) => {
  studentList.innerHTML = "";
  students.forEach((sv) => {
    let x = document.createElement("li");
    x.textContent = `${sv.id} - ${sv.name} - ${sv.age} tuổi - ${sv.score} điểm`;
    const btnXoa = document.createElement("button");
    btnXoa.textContent = "Xoá";
    btnXoa.dataset.id = sv.id;
    x.append(btnXoa);
    studentList.append(x);
  });
};
renderStudents(students);
//Tổng số sinh viên.
//Điểm trung bình.
//Sinh viên có điểm cao nhất.
const findHighestStudent = (students) => {
  if (students.length === 0) {
    return null;
  }
  let x = students.map((sv) => sv.score);
  let y = Math.max(...x);
  let z = students.filter((sv) => sv.score === y);
  return z.map((sv) => sv.name).join(", ");
};
//Sinh viên có điểm thấp nhất.
const findLowestStudent = (students) => {
  if (students.length === 0) {
    return null;
  }
  let x = students.map((sv) => sv.score);
  let y = Math.min(...x);
  let z = students.filter((sv) => sv.score === y);
  return z.map((sv) => sv.name).join(", ");
};
//Số sinh viên đạt (điểm từ 5 trở lên).
const higher5Point = (students) => {
  if (students.length === 0) {
    return 0;
  }
  let x = students.filter((sv) => sv.score >= 5);
  return x.length;
};
//Số sinh viên không đạt (điểm dưới 5).
const lower5Point = (students) => {
  if (students.length === 0) {
    return 0;
  }
  let x = students.filter((sv) => sv.score < 5);
  return x.length;
};

const statistics = document.getElementById("statistics");
const ul = document.createElement("ul");
ul.id = "statisticsList";
ul.textContent = "Danh sách thống kê";
statistics.append(ul);

const totalStudents = document.createElement("li");

const averageScore = document.createElement("li");

const highestStudent = document.createElement("li");

const lowestStudent = document.createElement("li");

const higher5Students = document.createElement("li");

const lower5Students = document.createElement("li");

const renderStatistics = (students) => {
  totalStudents.textContent = `Tổng số sinh viên: ${students.length}`;
  averageScore.textContent = `Điểm trung bình: ${students.length > 0 ? (students.reduce((total, sv) => total + sv.score, 0) / students.length).toFixed(2) : 0} điểm`;
  highestStudent.textContent = `Sinh viên có điểm cao nhất: ${findHighestStudent(students) ?? "Chưa có dữ liệu"}`;
  lowestStudent.textContent = `Sinh viên có điểm thấp nhất: ${findLowestStudent(students) ?? "Chưa có dữ liệu"}`;
  higher5Students.textContent = `Số Sinh viên đạt 5 điểm trở lên: ${higher5Point(students)}`;
  lower5Students.textContent = `Số Sinh viên thấp hơn 5 điểm: ${lower5Point(students)}`;
  ul.append(
    totalStudents,
    averageScore,
    highestStudent,
    lowestStudent,
    higher5Students,
    lower5Students,
  );
};
renderStatistics(students);
const txtId = document.getElementById("txtId");
const txtName = document.getElementById("txtName");
const txtAge = document.getElementById("txtAge");
const txtScore = document.getElementById("txtScore");
const addStudent = () => {
  if (
    students.some(
      (sv) => sv.id.toLowerCase() === txtId.value.trim().toLowerCase(),
    ) ||
    !txtId.value.trim() ||
    !/^SV\d{2}$/.test(txtId.value.trim()) ||
    !txtName.value.trim() ||
    !txtAge.value.trim() ||
    !Number.isInteger(Number(txtAge.value.trim())) ||
    !(Number(txtAge.value.trim()) > 0) ||
    !txtScore.value.trim() ||
    !Number.isFinite(Number(txtScore.value.trim())) ||
    Number(txtScore.value.trim()) < 0 ||
    Number(txtScore.value.trim()) > 10
  ) {
    return;
  }
  let newStudent = {
    id: txtId.value.trim(),
    name: txtName.value
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" "),
    age: Number(txtAge.value.trim()),
    score: Number(txtScore.value.trim()),
  };
  console.log("Dữ liệu hợp lệ");
  students.push(newStudent);

  txtId.value = "";
  txtName.value = "";
  txtAge.value = "";
  txtScore.value = "";
  renderStudents(students);
  renderStatistics(students);
};
const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", () => {
  addStudent();
});
txtScore.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addStudent();
  }
});

const txtSearch = document.getElementById("txtSearch");
txtSearch.addEventListener("input", () => {
  let txtSearchValue = txtSearch.value.trim().toLowerCase();
  let findStudents = students.filter(
    (sv) =>
      sv.id.toLowerCase().includes(txtSearchValue) ||
      sv.name.toLowerCase().includes(txtSearchValue),
  );
  renderStudents(findStudents);
});
txtSearch.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    txtSearch.value = "";
    renderStudents(students);
  }
});

studentList.addEventListener("click", (e) => {
  let x = e.target;
  if (x.tagName === "BUTTON") {
    let y = students.findIndex((sv) => sv.id === x.dataset.id);
    if (y === -1) {
      return;
    }
    students.splice(y, 1);
    txtSearch.value = "";
    renderStudents(students);
    renderStatistics(students);
  } else if (x.tagName === "LI") {
    console.log(x.textContent);
  }
});

const btnAll = document.getElementById("btnAll");
const btnPass = document.getElementById("btnPass");
const btnFail = document.getElementById("btnFail");

btnAll.addEventListener("click", () => {
  txtSearch.value = "";
  renderStudents(students);
});
btnPass.addEventListener("click", () => {
  if (txtSearch.value === "") {
    let x = students.filter((sv) => sv.score >= 5);
    renderStudents(x);
  } else {
    let x = students.filter(
      (sv) =>
        sv.score >= 5 &&
        (sv.id.toLowerCase().includes(txtSearch.value) ||
          sv.name.toLowerCase().includes(txtSearch.value)),
    );
    renderStudents(x);
  }
});
btnFail.addEventListener("click", () => {
  if (txtSearch.value === "") {
    let x = students.filter((sv) => sv.score < 5);
    renderStudents(x);
  } else {
    let x = students.filter(
      (sv) =>
        sv.score < 5 &&
        (sv.id.toLowerCase().includes(txtSearch.value) ||
          sv.name.toLowerCase().includes(txtSearch.value)),
    );
    renderStudents(x);
  }
});
