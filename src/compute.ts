import { course } from "./course.model";
const courseList: course[] = [];

const introAlgo: course = {
  grade: 11,
  coef: 3.5,
};

const reseaux: course = {
  grade: 11,
  coef: 3.5,
};

const sgbd: course = {
  grade: 14.25,
  coef: 3.5,
};

const modObj: course = {
  grade: 14.75,
  coef: 3.5,
};

const algoGraph: course = {
  grade: 16,
  coef: 4,
};

const gestRh: course = {
  grade: 14,
  coef: 2,
};

courseList.push(introAlgo, reseaux, sgbd, modObj, algoGraph, gestRh);

console.log(courseList);
