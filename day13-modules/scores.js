//Hàm tính điểm trung bình
const calculateAverage = (students) => {
  if (students.lenth === 0) {
    return 0;
  }
  return students.reduce((total, st) => total + st.score, 0) / students.length;
};

//Hàm Tìm sinh viên có điểm cao nhất
const findHighestScore = (students) => {
  let z = students.map((st) => st.score);
  let x = Math.max(...z);
  let y = students.findIndex((st) => st.score === x);
  return `${students[y].name} - ${students[y].score}`;
};

//Hàm tìm sinh viên có điểm thấp nhất
const findLowestScore = (students) => {
  let z = students.map((st) => st.score);
  let x = Math.min(...z);
  let y = students.findIndex((st) => st.score === x);
  return `${students[y].name} - ${students[y].score}`;
};

const classify = (students) => {
  students.forEach((st) => {
    if (st.score >= 8) {
      console.log(`${st.name} - Giỏi`);
    } else if (st.score >= 6.5) {
      console.log(`${st.name} - Khá`);
    } else if (st.score >= 5) {
      console.log(`${st.name} - Trung Bình`);
    } else console.log(`${st.name} - Yếu`);
  });
};

export { calculateAverage, findHighestScore, findLowestScore };
export default classify;
