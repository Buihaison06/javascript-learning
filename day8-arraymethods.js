let students = [
  { id: "sv01", name: "Sơn", age: 20, score: 8.0 },
  { id: "sv02", name: "Khải", age: 21, score: 7.0 },
  { id: "sv03", name: "Tanh", age: 19, score: 9.0 },
  { id: "sv04", name: "Bình", age: 16, score: 8.5 },
  { id: "sv05", name: "Khoa", age: 17, score: 6.0 },
  { id: "sv06", name: "Nam", age: 22, score: 5.5 },
  { id: "sv07", name: "Minh", age: 20, score: 9.5 },
  { id: "sv08", name: "Huy", age: 18, score: 4.5 },
];
function classify(student) {
  if (student.score >= 8) {
    return "Giỏi";
  } else if (student.score >= 6.5) {
    return "Khá";
  } else if (student.score >= 5) {
    return "Trung Bình";
  } else {
    return "Yếu";
  }
}
function listStudents(students) {
  students.forEach((sv, index) => {
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
        " điểm - " +
        classify(sv),
    );
  });
}

console.log("======Danh Sách Sinh Viên======");
students.forEach((sv) =>
  console.log(
    sv.id +
      " - " +
      sv.name +
      " - " +
      sv.age +
      " tuổi - " +
      sv.score +
      " điểm - " +
      classify(sv),
  ),
);

console.log("=====Mảng Chỉ Chứa Id Sinh Viên======");
let mid = students.map((sv) => sv.id);
console.log(mid);

console.log("======Mảng Chỉ Chứa Điểm Sinh Viên======");
let result1 = students.map((sv) => sv.score);
console.log(result1);

console.log("======Mảng Chỉ Chứa Tên Và Học Lực Của Sinh Viên======");
let result2 = students.map((sv) => {
  return {
    name: sv.name,
    rank: classify(sv),
  };
});
console.log(result2);

console.log("======Sinh Viên Có Điểm Từ 8 Trở Lên======");
let result3 = students.filter((sv) => sv.score >= 8);
console.log(result3);

console.log("======Sinh Viên Dưới 5 Điểm======");
let result4 = students.filter((sv) => sv.score < 5);
console.log(result4);

console.log("======Sinh Viên Dưới 18 Tuổi======");
let result5 = students.filter((sv) => sv.age < 18);
console.log(result5);

console.log("======Sinh Viên Có Học Lực Giỏi======");
let result6 = students
  .filter((sv) => classify(sv) == "Giỏi")
  .map((sv) => sv.name);
console.log(result6);

console.log("======Sinh Viên Có Tên Bắt Đầu Bằng Chữ H======");
let result7 = students.filter((sv) => sv.name.toLowerCase().startsWith("h"));
console.log(result7);

console.log("======Danh Sách Tên Sinh Viên Giỏi======");
let result8 = students
  .filter((sv) => classify(sv) === "Giỏi")
  .map((sv) => sv.name);
console.log(result8);

console.log("======Danh Sách Tên Sinh Viên Đủ Tuổi======");
let result9 = students.filter((sv) => sv.age >= 18).map((sv) => sv.name);
console.log(result9);

console.log("======Danh Sách Tên Sinh Viên Điểm từ 6.5 Trở Lên======");
let result10 = students.filter((sv) => sv.score >= 6.5).map((sv) => sv.name);
console.log(result10);

console.log(
  "Tổng điểm : ",
  students.reduce((sum, sv) => {
    return (sum += sv.score);
  }, 0),
);

console.log(
  "Điểm trung bình : ",
  students.reduce((sum, sv) => {
    return (sum += sv.score);
  }, 0) / students.length,
);

console.log(
  "Tồn tại sinh viên dưới 5 điểm : ",
  students.some((sv) => sv.score < 5),
);
console.log(
  "Tất cả sinh viên trên 5 điểm : ",
  students.every((sv) => sv.score > 5),
);
console.log(
  "Số sinh viên giỏi là: ",
  students.filter((sv) => classify(sv) === "Giỏi").length,
);

console.log(
  "Sinh viên có điểm cao nhất là : ",
  students.reduce((max, sv) => {
    if (sv.score > max.score) {
      return sv;
    } else {
      return max;
    }
  }),
);

console.log("======Danh sách sinh viên có điểm từ cao xuống thấp là======");
students.sort((a, b) => b.score - a.score);
students.forEach((sv) => {
  console.log(sv.name + " - " + sv.score);
});

console.log("======Danh sách sinh viên có điểm từ thấp tới cao là======");
students.sort((a, b) => a.score - b.score);
students.forEach((sv) => {
  console.log(sv.name + " - " + sv.score);
});

console.log("======Danh sách sinh viên tên theo alphabet======");
students.sort((a, b) => a.name.localeCompare(b.name, "vi"));
students.forEach((sv) => {
  console.log(sv.name);
});
console.log("====Danh Sách Sinh Viên Có Id từ bé đến lớn là======");
students.sort((a, b) => a.id.localeCompare(b.id, "vi", { numeric: true }));
console.log(students);

console.log("======Danh sách sinh viên đảo ngược là=====");
students.sort((a, b) => b.id.localeCompare(a.id, "vi", { numeric: true }));
console.log(students);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nhập id cần tìm: ", (i) => {
  let x = students.find((sv) => sv.id.toLowerCase() === i.toLowerCase());
  if (x === undefined) {
    console.log("Không tìm thấy sinh viên");
  } else {
    console.log(x);
  }
  rl.question("Nhập tên cần tìm: ", (ten) => {
    let y = students.findIndex(
      (sv) => sv.name.toLowerCase() === ten.toLowerCase(),
    );
    if (y === -1) {
      console.log("Không tìm thấy sinh viên");
    } else {
      console.log("Vị Trí: ", y);
    }
    rl.question("Nhập tên cần tìm vị trí: ", (tenindex) => {
      let names = students.map((sv) => sv.name);
      let zz = names.findIndex(
        (name) => name.toLowerCase() == tenindex.toLowerCase(),
      );
      if (zz == -1) {
        console.log("Không tìm thấy vị trí");
      } else {
        console.log("Vị trí của sinh viên cần tìm là: ", zz);
      }
      rl.question("Nhập tên cần kiểm tra: ", (tenktra) => {
        let names = students.map((sv) => sv.name);
        let k = names.some(
          (name) => name.toLowerCase() === tenktra.toLowerCase(),
        );
        if (k == false) {
          console.log("Không tìm thấy sinh viên");
        } else {
          console.log("Sinh Viên có trong Danh Sách Sinh Viên");
        }
        console.log("======Nhập thông tin sinh viên cần thêm======");
        rl.question("Nhập id:", (tid) => {
          let check = students.some((sv) => sv.id === tid);
          if (check === true) {
            console.log("Tồn tại ID");
            rl.close();
            return;
          }
          rl.question("Nhập tên:", (tt) => {
            rl.question("Nhập tuổi:", (ttuoi) => {
              rl.question("Nhập điểm:", (td) => {
                let object = {
                  id: tid,
                  name: tt,
                  age: Number(ttuoi),
                  score: Number(td),
                };
                students.push(object);

                let deletedStudent = students.pop();
                console.log("Sinh Vien vừa xoá là: ", deletedStudent);

                let oj1 = { id: "id11", name: "Trung", age: 20, score: 5 };
                students.unshift(oj1);

                students.shift();

                rl.question("Nhập vị trí muốn xoá: ", (vitri) => {
                  vitri = Number(vitri);
                  students.splice(vitri, 1);
                  let mangmoi = students.slice(0, 3);
                  console.log(mangmoi);

                  let mangmoi2 = students.slice(-3);
                  console.log(mangmoi2);

                  let newStudents = [
                    {
                      id: "sv10",
                      name: "Trần",
                      age: 16,
                      score: 7,
                    },
                    {
                      id: "id12",
                      name: "Hoa",
                      age: 18,
                      score: 9,
                    },
                  ];
                  console.log(newStudents);

                  let mangmoi3 = students.concat(newStudents);
                  console.log(mangmoi3);
                  rl.close();
                });
              });
            });
          });
        });
      });
    });
  });
});
