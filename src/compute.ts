import { course } from "./course.model";
const courseList: course[] = [];

const introAlgo: course = {
  grade: 11,
  weight: 3.5,
};

const reseaux: course = {
  grade: 16.08,
  weight: 3.5,
};

const sgbd: course = {
  grade: 14.25,
  weight: 3.5,
};

const modObj: course = {
  grade: 14.75,
  weight: 3.5,
};

const algoGraph: course = {
  grade: 16,
  weight: 4,
};

const gestRh: course = {
  grade: 14,
  weight: 2,
};

courseList.push(introAlgo, reseaux, sgbd, modObj, algoGraph, gestRh);

let weightSum = 0;

const gradesSum = courseList.reduce((acc, current) => {
  weightSum += current.weight;
  return acc + current.weight * current.grade;
}, 0);

const finalGrade = (gradesSum / weightSum).toFixed(2);

console.log(`Final grade : ${finalGrade}`);
