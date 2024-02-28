'use client'


import Link from "next/link";

async function getData(){
  const res = await fetch('http://localhost:3001/Room')
  return res.json()
}

export default async function page() {
  const date = await getData()
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
      <div className="p-8 " >
        <Link href="/Room/JoinRoom" className="btn btn-lg btn-wide btn-active btn-secondary ">
          Join Group
        </Link>
        <div className="mt-10">
        {Object.keys(date.Room).map(keys  => 
        <ul className="menu bg-base-200 w-56 rounded-box mb-5" key={keys}>
          <li key={keys} ><Link href={`/classroom/${date.Room[keys].teacher}`}> {date.Room[keys].teacher} </Link></li>
          </ul>)}
        </div>
      </div>
    </>
  );
}
