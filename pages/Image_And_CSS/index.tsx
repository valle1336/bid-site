import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

interface Props {}

const Index: NextPage<Props> = ({}) => {
  const [hp, setHp] = useState<number>(518);
  const [hpTooMuch, setHpTooMuch] = useState<boolean>();
  return (
    <>
      <div>
        {hp < 530 ? (
          <div className="border border-red-700 max-w-sm">
            {/* Image */}
            <Image
              src={"/porsche.jpg"}
              width={500}
              height={500}
              alt={""}
            ></Image>

            <div className="m-4">
              {/* Title */}
              <div className="font-bold text-lg text-red-700">
                Porsche GT3RS
              </div>

              <br />

              {/* Text */}
              <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, necessitatibus voluptate impedit, quisquam
                voluptatibus dolores repellat suscipit molestias velit, iusto
                ipsam numquam atque dignissimos ullam eaque tempore ratione.
                Placeat, deserunt!
              </p>

              {/* Button */}
              <button
                onClick={() => {
                  setHp(hp + 1);
                }}
                className="bg-red-700 hover:bg-red-500 py-2 px-4 font-bold rounded-lg mb-3"
              >
                Increase HP
              </button>

              {/* Tags */}
              <div className="text-gray-400 pt-4">
                <span className="bg-red-700 mr-2 px-3 py-1 rounded-lg">
                  #Fast
                </span>
                <span className="bg-red-700 mr-2 px-3 py-1 rounded-lg">
                  #Light
                </span>
                <span className="bg-red-700 mr-2 px-3 py-1 rounded-lg">
                  #Sound
                </span>
                <span className="bg-red-700 mr-2 px-3 py-1 rounded-lg">
                  HP: {hp}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-9xl font-bold text-red-700">You made the car too fast!</p>
        )}
      </div>
    </>
  );
};

export default Index;
