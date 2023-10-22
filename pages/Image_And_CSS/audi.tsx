import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

interface Props {}

const Audi: NextPage<Props> = ({}) => {
    const [turbo, setTurbo] = useState<boolean>(false)
  return (
    <>
      <div className="border border-red-700 max-w-sm">
        <Image src={"/audirs3.jpg"} alt={"#"} width={500} height={500}></Image>

        <h1 className="text-red-700 font-bold px-3 pt-3">Audi RS3</h1>

        <p className="text-gray-500 px-3 pt-3 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          commodi, corporis odio, illum consequatur nisi, pariatur dolores
          laborum rerum eos quasi assumenda natus repellat in vero quod eum
          soluta recusandae.
        </p>

        <button onClick={() => {setTurbo(true)}} className="bg-red-700 rounded-md px-4 py-2 ml-4 mb-3">
          Add Turbo
        </button>

        <div className="px-4 mb-3 mt-3">
          <span className="mr-3 bg-red-700 px-3 rounded-lg py-1">#Fast</span>
          <span className="mr-3 bg-red-700 px-3 rounded-lg py-1">#Looks</span>
          <span className="mr-3 bg-red-700 px-3 rounded-lg py-1">#Quattro</span>
          <span>{turbo ?  <span className="mr-3 bg-red-700 px-3 rounded-lg py-1">#Turbo</span> : ""}</span>
        </div>
      </div>
    </>
  );
};

export default Audi;
