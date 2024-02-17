"use client"

import axios from "axios";
import data from "../../classroom.json";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function page({ params }) {
  const [Image , setImag] = useState('')
  const [idContainer , setIdContainer] = useState('')
  useEffect(()=>{
    const ImageLab = data.classroom[params.id - 1].Image 
    setImag(ImageLab)
    console.log(idContainer)
  },[Image , idContainer])


  const onClickStart = () =>{ 
      const Name = 'Sanyaqss'
      axios.post(`http://localhost:3001/containers/${Image}/${Name}` ).then((respones)=> setIdContainer(respones.data.id))
    }
  
  
  return (
    <>
      <div className="flex">
        <div className="basis-1/4 border">
          <div className="grid justify-items-stlart">
            <button onClick={()=>onClickStart()}> Start </button>
          </div>
        </div>
        <div className="basis-full">
          <div className="grid justify-items-center">
            <Link id="link" target="_blank" href={`http://localhost:3001/console/${idContainer}` }> Open Terminal </Link>
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
