//kiểm tra id có dạng SV + 2 số không
const isValidId = (id) => {
  if (
    id.startsWith("SV") &&
    id.length === 4 &&
    id[2] >= "0" &&
    id[2] <= "9" &&
    id[3] >= "0" &&
    id[3] <= "9"
  ) {
    return true;
  } else return false;
};

//Kiểm tra điểm phải là số từ 0 đến 10
const isValidScore = (score) => {
  if (score < 0 || score > 10 || !Number.isFinite(Number(score))) {
    return false;
  } else return true;
};

//Kiểm tra id tồn tại chưa
const isDuplicateId = (students, id) => {
  let x = students.some((st) => st.id.toLowerCase() === id.toLowerCase());
  return x;
};

//export
export { isValidId, isDuplicateId, isValidScore };
