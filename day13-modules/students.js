const students = [
  {
    id: "SV01",
    name: "Son",
    score: 8.5,
  },
  {
    id: "SV02",
    name: "Minh",
    score: 7.5,
  },
  {
    id: "SV03",
    name: "Khai",
    score: 9,
  },
  {
    id: "SV04",
    name: "Binh",
    score: 6,
  },
  {
    id: "SV05",
    name: "Tanh",
    score: 4.5,
  },
];

//Hàm Hiển thị danh sách
const showStudents = (students) => {
  students.forEach((st) => {
    console.log(`${st.id} - ${st.name} - ${st.score}`);
  });
};

//Hàm tìm sinh viên bằng id
const findStudentById = (students, id) => {
  let x = students.find((st) => st.id.toLowerCase() === id.toLowerCase());
  if (x === undefined) {
    console.log("Không tìm thấy sinh viên");
    return null;
  } else {
    return x;
  }
};

//Export mảng và hai hàm ra ngoài
export { students, showStudents, findStudentById };
