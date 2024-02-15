import Link from "next/link";

export default function page() {
  const styleFont = {
    fontSize: 50,
    fontWeight: "bold",
  };

  return (
    <>
      <h1 style={styleFont}> Linux Lab </h1>
      <div className="p-8 card">
        <div className="card-body">
          <h2 className="card-title"> Join </h2>
          <p>กรอดรหัสห้อง</p>
          <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
          <div className="card-actions"></div>
        </div>
      </div>
    </>
  );
}
