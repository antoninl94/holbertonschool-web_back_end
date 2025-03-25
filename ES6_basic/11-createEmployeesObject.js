export default function createEmployeesObject(departmentName, employees) {
  const array = [];
  for (const value of employees) {
    array.push(value);
  }

  return `{${departmentName}: [${array}]}`;
}
