export default function getStudentIdsSum(studentList) {
  const totalid = studentList.reduce((total, student) => {
    return total + student.id;
  }, 0);
  return totalid;
}
