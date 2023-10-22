import Image from "next/image";

interface Product {
  title: string;
  text: string;
  image: string
}

const Product = (product: Product) => {
  return (
    <div>
      <div className="border border-red-700 max-w-sm">
        <Image src={"/audirs3.jpg"} alt={"#"} width={500} height={500}></Image>

        <h1 className="text-red-700 font-bold px-3 pt-3">{`${product.title}`}</h1>

        <p className="text-gray-500 px-3 pt-3 pb-4">
            {`${product.text}`}
        </p>

        <button className="bg-red-700 rounded-md px-10 py-2 ml-4 mb-3">
          Bid
        </button>

        <div className="px-4 mb-3 mt-3">
          <span className="mr-3 bg-red-700 px-3 rounded-lg py-1">#Fast</span>
          <span className="mr-3 bg-red-700 px-3 rounded-lg py-1">#Looks</span>
          <span className="mr-3 bg-red-700 px-3 rounded-lg py-1">#Quattro</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
