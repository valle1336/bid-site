import { NextPage } from "next";
import { useRouter } from "next/router";

interface Props {}

const bmwID: NextPage<Props> = ({}) => {
  const router = useRouter();
  const value = router.query.bmwID;
  var num = Number;
  return (
    <div>
      The value you typed in the endpoint: {value}
      <br />
      <button
        onClick={() => {
          console.log("Button was clicked!");
        }}
      >
        Klicka här
      </button>
    </div>
  );
};

export default bmwID;
