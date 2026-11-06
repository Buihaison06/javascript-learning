import {
  students,
  showStudents,
  findStudentById as findStudent,
} from "./students.js";
import {
  calculateAverage,
  findHighestScore,
  findLowestScore,
} from "./scores.js";
import classify from "./scores.js";
import { isValidId, isDuplicateId, isValidScore } from "./validation.js";

console.log(`
  ========== STUDENT MANAGEMENT ==========

  STUDENT LIST:`);
showStudents(students);
console.log(`
  AVERAGE SCORE: ${calculateAverage(students)}
  
  HIGHEST SCORE: ${findHighestScore(students)}
  LOWEST SCORE: ${findLowestScore(students)}

  STUDENT CLASSIFICATION:`);
classify(students);
console.log(`
  ========== VALIDATION ==========
  `);
console.log("Valid ID:", isValidId("SV01"));
console.log("Invalid ID:", isValidId("SVOH"));

console.log("Duplicate ID:", isDuplicateId(students, "SV01"));
console.log("New ID:", isDuplicateId(students, "SV06"));

console.log("Valid Score:", isValidScore(8.5));
console.log("Invalid Score:", isValidScore(11));
