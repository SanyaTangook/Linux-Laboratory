"use client"

import axios from "axios";
import data from "../../classroom.json";
import Link from "next/link";

export default function page({ params }) {
  const startContainers = axios.post('http://localhost:3001/containers' , 'ubuntu:latest')
  const onclickLab = () =>{
    startContainers
  }
  return (
    <>
      <div className="flex">
        <div className="basis-1/4 border">
          <div className="grid justify-items-start">
            <button onClick={onclickLab}> Start </button>
          </div>
        </div>
        <div className="basis-full">
          <div className="grid justify-items-center">
            <Link href={`/Lab`}>Open Terminal</Link>
          </div>
        </div>
        <div className="basis-1/4 border">
          <div className="grid justify-items-start">
              <h3> Task </h3>
          </div>
        </div>
      </div>
    </>
  );
}
