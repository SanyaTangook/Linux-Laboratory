
import Link from "next/link";
import { JoinRoom } from "./joinroom";


export  default  function page() {
  const styleFont = {
    fontSize: 50,
    fontWeight: "bold",
    padding: 5,
    margin: 10,
  };


  return (
    <>
      <h1 style={styleFont}> Linux Lab </h1>
      <div className="flex justify-center" style={{ padding: "10%" }}>
        <div className="p-5 card w-96 bg-neutral-content text-accent-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> Join </h2>
            <p>กรอดรหัสห้อง</p>
            <form action={JoinRoom}>
              <input type="text" name="Id" placeholder="รหัสห้องเรียน" className="input input-bordered input-secondary w-full max-w-xs" />
              <div className="card-actions">
                <button className="mt-5 btn btn-block" type="submit" > เข้าร่วมห้อง </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
