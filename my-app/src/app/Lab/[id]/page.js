'use Client'
import Link from "next/link";


export default async function Lab({params}) {

  const id = params.id
  const data = await fetch(`http://localhost:3001/console/${id}`)
  return (
    <>
      <div>
        <h1> Lab 1 </h1> <br />
        <h3> เนื้อหา </h3>
      </div>
      <button className="btn btn-success" onClick={data}> เริ่มทดลอง </button>
      <Link href='http://localhost:3001/console/${id}' className="btn btn-success" target="_blank" > เริ่มทดลอง </Link>
    </>
  );
}
