export default function getStudentsByLocation(studentsList, city) {
  return studentsList.filter((studentsList) => studentsList.location === city);
}
