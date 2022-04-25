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

const accumulators = courseList.reduce(
  (acc: course, current) => {
    acc.grade += current.grade * current.weight;
    acc.weight += current.weight;
    return acc;
  },
  {
    grade: 0,
    weight: 0,
  }
);

const finalGrade = (accumulators.grade / accumulators.weight).toFixed(2);

console.log(`Final grade : ${finalGrade}`);
