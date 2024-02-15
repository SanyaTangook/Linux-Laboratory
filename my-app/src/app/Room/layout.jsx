function checkUserRole() {
  return "teacher2";
}

export default function layout({ student, teacher }) {
  const role = checkUserRole();
  return <>{role === "teacher" ? teacher : student}</>;
}
