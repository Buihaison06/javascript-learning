let students = [
  { id: "SV01", name: "Sơn", age: 20, score: 8.5 },
  { id: "SV02", name: "Khải", age: 21, score: 6.5 },
  { id: "SV03", name: "Tanh", age: 19, score: 9.0 },
  { id: "SV04", name: "Bình", age: 16, score: 4.5 },
  { id: "SV05", name: "Minh", age: 22, score: 7.5 },
];

function showStudents(sv, index) {
  console.log(
    index +
      1 +
      "." +
      sv.id +
      " - " +
      sv.name +
      " - " +
      sv.age +
      " tuổi - " +
      sv.score +
      " điểm",
  );
}

function addStudents(students, id, name, age, score) {
  let check = checkTrung(students, id);
  if (check === true) {
    console.log("ID tồn tại");
  } else {
    let object = {
      id: id.toUpperCase(),
      name: capitalizeName(name),
      age: age,
      score: score,
    };
    students.push(object);
    console.log("Thêm thành công");
  }
}

function checkTrung(sv, id) {
  let x = sv.some((sv) => sv.id === id);
  return x;
}
function deleteStudent(students, id) {
  let findindex = students.findIndex(
    (sv) => sv.id.toLowerCase() === id.toLowerCase(),
  );
  if (findindex === -1) {
    console.log("Không tìm thấy SV");
    return;
  } else {
    students.splice(findindex, 1);
    console.log("Xoá Thành Công");
    console.log("======Danh Sách Sinh Viên======");
    students.forEach((sv, index) => showStudents(sv, index));
  }
}
function findStudent(students, name) {
  let findsv = students.filter(
    (sv) => sv.name.toLowerCase() === name.toLowerCase(),
  );
  if (findsv.length === 0) {
    console.log("Không tìm thấy sv");
    return;
  } else {
    console.log("Tìm thấy SV: ", findsv);
  }
}
function editScore(students, id, newscore) {
  let st = students.findIndex((sv) => sv.id === id);
  if (st === -1) {
    console.log("Không tìm thấy sinh viên");
    return;
  }
  if (isNaN(newscore) || newscore > 10 || newscore < 0) {
    console.log("Lỗi");
    return;
  }
  students[st].score = newscore;
  console.log("Sửa thành công");
}
function sortStudents(students) {
  let s = students.slice();
  let x = s.sort((a, b) => b.score - a.score);
  x.forEach((sv, index) =>
    console.log(
      index +
        1 +
        "." +
        sv.id +
        " - " +
        sv.name +
        " - " +
        sv.age +
        " tuổi - " +
        sv.score +
        " điểm",
    ),
  );
}
function findTopStudent(students) {
  let max = 0;
  students.forEach((sv) => {
    if (sv.score > max) {
      max = sv.score;
    }
  });
  let st = students.findIndex((sv) => sv.score === max);
  return students[st];
}
function capitalizeName(name) {
  return name
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
function calculateAverage(students) {
  let x =
    students.reduce((sum, sv) => {
      return (sum += sv.score);
    }, 0) / students.length;
  return x;
}
console.log("======Danh Sách Sinh Viên======");
students.forEach((sv, index) => showStudents(sv, index));

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function nextFeature() {
  console.log("======Danh Sách Sinh Viên theo Điểm giảm dần======");
  sortStudents(students);
  console.log("Sinh viên có điểm cao nhất là : ", findTopStudent(students));
  console.log(
    "Điểm Trung bình của toàn bộ sinh viên: ",
    calculateAverage(students),
  );
}
console.log("====Thêm Sinh Viên====");
rl.question("Nhập id: ", (id) => {
  id = id.trim().toUpperCase();
  rl.question("Nhập tên: ", (name) => {
    rl.question("Nhập tuổi: ", (age) => {
      age = age.trim();
      age = Number(age);
      if (isNaN(age) || age <= 0 || age > 100) {
        console.log("Lỗi");
        rl.close();
        return;
      }
      rl.question("Nhập điểm: ", (score) => {
        score = score.trim();
        score = Number(score);
        if (isNaN(score) || score < 0 || score > 10) {
          console.log("Lỗi");
          rl.close();
          return;
        }
        addStudents(students, id, name, age, score);
        console.log("======Danh Sách Sinh Viên======");
        students.forEach((sv, index) => showStudents(sv, index));
        rl.question("Nhập id cần xoá: ", (id) => {
          id = id.trim();
          deleteStudent(students, id);
          rl.question("Nhập tên cần tìm: ", (name) => {
            name = name.trim();
            findStudent(students, name);

            rl.question("Cập nhật điểm: ", (kq) => {
              kq = kq.trim();
              if (
                kq === "y" ||
                kq === "Y" ||
                kq === "yes" ||
                kq === "Yes" ||
                kq === "YES" ||
                kq === "c" ||
                kq === "có" ||
                kq === "Có" ||
                kq === "CÓ"
              ) {
                rl.question("Nhập id cần sửa điểm: ", (idd) => {
                  idd = idd.trim().toUpperCase();
                  rl.question("Nhập điểm mới: ", (newscore) => {
                    newscore = newscore.trim();
                    newscore = Number(newscore);
                    editScore(students, idd, newscore);
                    console.log("======Danh Sách Sinh Viên======");
                    students.forEach((sv, index) => showStudents(sv, index));
                    nextFeature();
                    rl.close();
                  });
                });
              } else if (
                kq === "n" ||
                kq === "no" ||
                kq === "No" ||
                kq === "NO" ||
                kq === "k" ||
                kq === "không" ||
                kq === "Không" ||
                kq === "KHÔNG" ||
                kq === "ko" ||
                kq === "Ko" ||
                kq === "N" ||
                kq === "KO"
              ) {
                console.log("Không sửa điểm");
                nextFeature();
                rl.close();
              } else {
                console.log("Lỗi");
                nextFeature();
                rl.close();
              }
            });
          });
        });
      });
    });
  });
});
