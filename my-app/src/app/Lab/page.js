import Link from "next/link";

export default function Lab() {
  return (
    <>
      <div>
        <h1> Lab 1 </h1> <br />
        <h3> เนื้อหา </h3>
      </div>
      <Link href="Lab/console" className="btn btn-success"> เริ่มทดลอง </Link>
    </>
  );
}
