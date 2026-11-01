let students = [
  {
    id: "sv01",
    name: "Sơn",
    age: 20,
    score: 8.0,
  },
  {
    id: "sv02",
    name: "Khải",
    age: 21,
    score: 7.0,
  },
  {
    id: "sv03",
    name: "Tanh",
    age: 19,
    score: 9.0,
  },
  {
    id: "sv04",
    name: "Bình",
    age: 16,
    score: 8.5,
  },
  {
    id: "sv05",
    name: "Khoa",
    age: 17,
    score: 6.0,
  },
];
function classify(score) {
  if (score >= 8) {
    return "Giỏi";
  } else if (score >= 6.5) {
    return "Khá";
  } else if (score >= 5) {
    return "Trung Bình";
  } else {
    return "Yếu";
  }
}
function displayStudents(students) {
  for (let i = 0; i < students.length; i++) {
    let x = classify(students[i].score);
    console.log(
      i + 1 + ". " + students[i].name + " - " + students[i].score + " - " + x,
    );
  }
}
function calculateAverage(students) {
  let tong = 0;
  for (let i = 0; i < students.length; i++) {
    tong += students[i].score;
  }
  return tong / students.length;
}
function findTopStudent(students) {
  let ob = { id: "", name: "", age: "", score: -1 };
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > ob.score) {
      ob.id = students[i].id;
      ob.name = students[i].name;
      ob.age = students[i].age;
      ob.score = students[i].score;
    }
  }
  return ob.name;
}

function sumAdult(students) {
  let x = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].age >= 18) {
      x++;
    }
  }
  return x;
}
function findStudentById(students, id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
  return null;
}

console.log("======Quan Ly Sinh Vien======");

console.log("Danh Sach Sinh Vien: ");
displayStudents(students);
console.log("======Thong Ke======");
console.log("Tổng sinh viên :" + students.length);
let x = calculateAverage(students);
console.log(`Điểm trung bình: ${x}`);
console.log("Sinh Viên có điểm cao nhất là: ", findTopStudent(students));
let sosvg = 0;
for (let i = 0; i < students.length; i++) {
  if (classify(students[i].score) === "Giỏi") {
    sosvg++;
  }
}

console.log("Số sinh viên giỏi: ", sosvg);
console.log("Số sinh viên đủ tuổi: ", sumAdult(students));

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Nhập id cần tìm : ", (o) => {
  let x = findStudentById(students, o);
  if (x == null) {
    console.log("Không tìm thấy sinh viên");
  } else {
    console.log("Tìm thấy sinh viên: ", x);
  }
  console.log("======Thêm Sinh Viên======");
  rl.question("Nhập id: ", (o) => {
    let x = findStudentById(students, o);
    if (x != null) {
      console.log("Id tồn tại");
      rl.close();
      return;
    }
    if (o.trim() == "") {
      console.log("id không được bỏ trống");
      rl.close();
      return;
    }
    o = o.trim();
    rl.question("Nhập tên: ", (ten) => {
      if (ten.trim() == "") {
        console.log("Tên không được bỏ trống");
        rl.close();
        return;
      }
      ten = ten.trim();
      rl.question("Nhập tuổi: ", (tuoi) => {
        let t = Number(tuoi);
        if (isNaN(t) || !Number.isInteger(t) || t <= 0 || t > 100) {
          console.log("Tuổi không hợp lệ");
          rl.close();
          return;
        }
        rl.question("Nhập điểm: ", (diem) => {
          let d = Number(diem);
          if (d < 0 || d > 10 || isNaN(d)) {
            console.log("Điểm không hợp lệ");
            rl.close();
            return;
          }
          let ob = { id: o, name: ten, age: t, score: d };
          students.push(ob);
          displayStudents(students);
          rl.close();
        });
      });
    });
  });
});
