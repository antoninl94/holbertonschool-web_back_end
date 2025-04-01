export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const upgradedStudent = studentsList.filter((studentsList) => studentsList.location === city)
    .map((student) => {
      let grade = 'N/A';
      for (const gradeObj of newGrades) {
        if (gradeObj.studentId === student.id) {
          grade = gradeObj.grade;
        }
      }
      return { ...student, grade };
    });
  return upgradedStudent;
}
