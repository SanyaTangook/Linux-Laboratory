"use client";

import axios from "axios";
import data from "../../classroom.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import dataLab from "./Lab.json";

export default function page({ params }) {
  const [Image, setImag] = useState("");
  const [idContainer, setIdContainer] = useState("");

  useEffect(() => {
    const ImageLab = data.classroom[params.id - 1].Image;
    setImag(ImageLab);
  }, [Image, idContainer]);

  const onClickStart = () => {
    const Name = "Sanyaqss";
    axios
      .post(`http://localhost:3001/containers/${Image}/${Name}`)
      .then((respones) => setIdContainer(respones.data.id));
  };
  const DataLab = dataLab.Lab[params.id - 1]
  return (
    <>
      <div className="flex">
        <div className="basis-1/4 border">
          <div className="grid justify-items-stlart">
            <button onClick={() => onClickStart()}> Start </button>
          </div>
        </div>
        <div className="basis-full">
          <div className="grid justify-items-center">
            <Link
              id="link"
              target="_blank"
              href={`http://localhost:3001/console/${idContainer}`}
              className="btn btn-wide btn-primary"
            >
              Open Terminal
            </Link>
            {
              // DataLab['step'].map(keys =><h2>{DataLab['step'][keys]}</h2>)
              console.log(DataLab['step'][1])
            }
          </div>
        </div>
        <div className="basis-1/4 border">
          <div className="grid justify-items-start">
            <h1>ff</h1>
          </div>
        </div>
      </div>
    </>
  );
}
