import { NextPage } from "next";
import { use, useEffect, useState } from "react";
import User from "@/classes/user";

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
  const [user, setUser] = useState<User>(new User("Alex", "yellow"));

  useEffect(() => {
    console.log(user);
    setCounter(counter + 1);
  }, [increase]); //Så fort det vi matar in i arrayen ändras så kommer useEffect köras

  return (
    <div>
      <h1 className="font-bold text-4xl">
        Current user: {user.password + " " + user.name}
      </h1>
      <p>
        The value of increase is: {increase} and value of useEffect is:{" "}
        {counter}
      </p>
      <button
        onClick={() => {
          setIncrease(increase + 1);
        }}
      >
        Klicka här
      </button>
      <br />
      <button
        onClick={() => {
          setUser(new User("Martin", "totoro"));
        }}
      >
        Klicka för Martin
      </button>
      <br />
      <input placeholder="Password..."
        className="bg-black border"
        type="text"
        onChange={(event) => {
          setUser(new User((user.password = event.target.value), user.password));
        }}
      />
     <br />
     <input placeholder="name..."
        className="bg-black border"
        type="text"
        onChange={(event) => {
          setUser(new User((user.name = event.target.value), user.name));
        }}
      />
    </div>
  );
};

export default Effect;
