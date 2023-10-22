import Cars from "@/p-components/cars";
import Product from "@/p-components/product";
import { NextPage } from "next";

interface Props {}

const Dealer: NextPage<Props> = ({}) => {
  return (
    <div>
         <Product title={"Audi"} text={"Quattro"} image={""}></Product>
         <Product title={"BMW"} text={"LOL"} image={""}></Product>
         <Product title={"Volvo"} text={"V70"} image={""}></Product>
    </div>
  );
};

export default Dealer;
