export default function getListStudentIds(studentArray) {
  if (!Array.isArray(studentArray)) {
    return [];
  }
  studentArray = [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia',
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco',
    },
  ];
  return studentArray.map((studentArray) => studentArray.id);
}
