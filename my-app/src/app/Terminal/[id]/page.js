'use Client'
import Link from "next/link";


export default  function Lab({params}) {

  return (
    <>
      <Link href={`http://localhost:3001/console/${params.id}`} className="btn btn-success" target="_blank" > เริ่มทดลอง </Link>
    </>
  );
}
