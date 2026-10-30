let students = [
  {
    name: "Son",
    age: 20,
    score: 8.5,
  },
  {
    name: "Nam",
    age: 19,
    score: 6.5,
  },
  {
    name: "An",
    age: 17,
    score: 4.5,
  },
];

function classifyStudent(score) {
  if (score >= 8) {
    return "Giỏi";
  } else if (score >= 6) {
    return "Khá";
  } else if (score >= 5) {
    return "Trung Bình";
  } else {
    return "Yếu";
  }
}
function checkAge(age) {
  if (age >= 18) {
    return "Đủ tuổi";
  } else {
    return "Chưa đủ tuổi";
  }
}

function trungbinh(students) {
  let tong = 0;
  for (let i = 0; i < students.length; i++) {
    tong += students[i].score;
  }
  return tong / students.length;
}

function findtopstudents(students) {
  const object = { name: "", age: "", score: -1.0 };
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > object.score) {
      object.score = students[i].score;
      object.name = students[i].name;
      object.age = students[i].age;
    }
  }
  console.log(`Name: ${object.name}`);
  console.log(`Age: ${object.age}`);
  console.log(`Score: ${object.score}`);
}

for (let i = 0; i < students.length; i++) {
  console.log(`${i + 1}.${students[i].name}`);
  console.log("Age: ", students[i].age);
  console.log("Score: ", students[i].score);
  console.log(`Học lực: ${classifyStudent(students[i].score)}`);
  console.log(`Trạng thái: ${checkAge(students[i].age)}`, "\n");
}
console.log(`Sinh viên có điểm cao nhất là: \n`);
findtopstudents(students);
let du = 0,
  chuadu = 0;
let tong = 0;
let svgioi = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i].age >= 18) {
    du++;
  } else chuadu++;
  if (classifyStudent(students[i].score) == "Giỏi") {
    svgioi++;
  }
  tong++;
}

console.log(`Tổng Sinh Viên: ${tong}`);
console.log(`Số Sinh Viên trên 18 tuổi: ${du}`);
console.log(`Số Sinh Viên dưới 18 tuổi: ${chuadu}`);
console.log(`Số Sinh Viên đạt loại Giỏi: ${svgioi}`);
console.log(`Điểm TB: ${trungbinh(students)}`);
