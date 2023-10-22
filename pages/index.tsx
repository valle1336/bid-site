import { NextPage } from "next";
import { SyntheticEvent, useState } from "react";

/*
      <h1 className="font bold text-4xl">Input User</h1>
      <p className="font-bold">Current username is: {username}</p>
      <input
        className="border bg-black"
        type="text"
        placeholder="username..."
        onChange={(event) => {
          setUsernameInput(event.target.value);
        }}
      />
      <br />
      <button
        className="bg-blue-600 px-4 py-1 rounded-md"
        onClick={() => {
          setUsername(usernameInput);
        }}
      >
        Submit
      </button>
*/

interface User {
  username: string;
  password: string;
  rememberMe: boolean;
}

const Index: NextPage<User> = ({}) => {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
    rememberMe: true,
  });

  function test(event: SyntheticEvent) {
    //setUser kan man göra här
  }

  return (
    <div>
      <form onSubmit={(event) => {test(event)}}></form>
      <h1 className="font bold text-4xl">Input User</h1>
      <p className="font-bold">Current username is: {user.username}</p>
      <input
        className="border bg-black"
        type="text"
        placeholder="username..."
        onChange={(event) => {
          setUser({
            ...user,
            username: event.target.value
          });
        }}
      />
      <br />
        <input
        className="border bg-black"
        type="text"
        placeholder="password..."
        onChange={(event) => {
          setUser({
            ...user,
            password: event.target.value
          });
        }}
      />
      <br />
      <p>{` Username is: ${user.username}, Password is: ${user.password}, ${user.rememberMe}`}</p>

    </div>
  );
};

export default Index;
