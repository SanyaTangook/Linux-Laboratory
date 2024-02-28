import { cookies } from 'next/headers'


export default async function layout({ student, teacher }) {
  const role = cookies().get('role').value;
  return <>{role === "teacher" ? teacher : student}</>;
}