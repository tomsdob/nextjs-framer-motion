import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Product = (props) => (
  <div className="w-screen h-screen flex flex-col lg:flex-row justify-center items-center font-sans bg-gray-100">
    <Head>
      <title>{props.product.name} | Shop</title>
    </Head>
    <div className="p-4 flex justify-center items-center bg-white w-full lg:w-1/2 h-full">
      <img src={props.product.image} className="max-h-full max-w-full" />
    </div>
    <div className="p-4 flex justify-center items-center w-full lg:w-1/2 h-full">
      <div className="flex flex-col text-left max-w-sm w-full h-auto">
        <Link href="/">
          <span className="mb-12 text-base font-normal text-gray-800 leading-tight cursor-pointer transition-all duration-200 hover:text-green-600">
            Back to products
          </span>
        </Link>
        <h1 className="mb-4 text-2xl font-bold text-gray-800 leading-none">
          {props.product.name}
        </h1>
        <ul>
          {props.product.details.map((detail) => (
            <li className="flex flex-row text-base font-light text-gray-800 leading-tight">
              <span className="mr-2">-</span>
              <p>{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

Product.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(
    `http://my-json-server.typicode.com/tomsdob/nextjs-framer-motion/products/${id}`
  );
  const product = await res.json();
  return { product };
};

export default Product;
