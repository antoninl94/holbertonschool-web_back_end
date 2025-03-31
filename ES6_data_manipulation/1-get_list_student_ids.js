export default function getListStudentIds(studentArray) {
  if (!Array.isArray(studentArray)) {
    return [];
  }
  return studentArray.map((studentArray) => studentArray.id);
}
