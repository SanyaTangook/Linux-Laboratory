import Link from "next/link";

export default function page() {
  const styleFont = {
    fontSize: 50,
    fontWeight: "bold",
  };

  return (
    <>
      <div style={styleFont}>
        Linux <br />
        Lab
      </div>
      <div className="p-8">
        <Link href="/Room" className="btn btn-wide btn-active btn-secondary ">
          Join Group
        </Link>
      </div>
    </>
  );
}
