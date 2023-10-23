import { NextPage } from "next";
import { use, useEffect, useState } from "react";

interface Props {}

type TData = {
  name: string;
}; //Exempel på type

interface IData {
  name: string;
} //Exempel på interface

const Effect: NextPage<Props> = ({}) => {
  const [counter, setCounter] = useState<number>(0);
  const [increase, setIncrease] = useState<number>(0);

  useEffect(() => {
    console.log("Hello!");
    setCounter(counter + 1);
  }, [increase]); //Så fort det vi matar in i arrayen ändras så kommer useEffect köras

  return (
    <div>
      <h1 className="font-bold text-4xl">Counter value: {counter}</h1>
      <p>The value of increase is: {increase} and value of useEffect is: {counter}</p>
      <button
        onClick={() => {
          setIncrease(increase + 1);
        }}
      >Klicka här</button>
    </div>
  );
};

export default Effect;
