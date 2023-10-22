import { NextPage } from "next";
import { useState } from "react";

interface Props {}

const UseStateExample: NextPage<Props> = ({}) => {
  // Här definerar vi våra useState och useHooks
  const [name, setName] = useState<string>("Linkface");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [age, setAge] = useState<number>(21);

  

  return (
    <div>
      <p>The name is: {`${name}, ${isLoggedIn}, ${age}`}</p>
    </div>
  );
};

export default UseStateExample;
