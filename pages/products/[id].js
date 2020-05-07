import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Product = (props) => (
  <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center font-sans bg-gray-100">
    <Head>
      <title>{props.product.name} | Shop</title>
    </Head>
    <div className="p-4 flex justify-center items-center bg-white w-full lg:w-1/2 h-auto lg:h-screen lg:fixed lg:top-0 lg:left-0">
      <img src={props.product.image} className="max-h-full max-w-full" />
    </div>
    <div className="p-4 flex justify-center items-center w-full lg:w-1/2 h-full lg:ml-auto">
      <div className="flex flex-col text-left max-w-sm w-full h-auto">
        <Link href="/">
          <span className="mb-12 text-base font-normal text-gray-800 leading-tight cursor-pointer transition-all duration-200 hover:text-gray-600">
            Back to products
          </span>
        </Link>
        <div>
          <h1 className="mb-4 text-2xl font-bold text-gray-800 leading-none">
            {props.product.name}
          </h1>
          <ul className="mb-4">
            {props.product.details.map((detail) => (
              <li
                key={detail}
                className="flex flex-row text-base font-light text-gray-800 leading-tight"
              >
                <span className="mr-2">-</span>
                <p>{detail}</p>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center">
            <div className="inline-flex justify-center items-center">
              <button
                disabled
                className="p-1 flex justify-center items-center text-lg font-normal text-gray-800 leading-none w-8 h-8 bg-gray-300 border border-gray-300 rounded-full focus:outline-none focus:shadow-outline"
              >
                -
              </button>
              <span className="mx-2 text-lg font-bold text-gray-800 leading-none">
                1
              </span>
              <button className="p-1 flex justify-center items-center text-lg font-normal text-gray-800 leading-none w-8 h-8 bg-white border border-gray-800 rounded-full focus:outline-none focus:shadow-outline">
                +
              </button>
            </div>
            <span className="text-2xl font-bold text-gray-800 leading-none">
              {props.product.price}
            </span>
          </div>
        </div>
        <div className="mt-12 flex justify-between items-center">
          <button className="px-6 py-4 text-base font-normal text-white leading-none bg-gray-800 hover:bg-gray-600 w-full lg:w-auto rounded-lg transition-all duration-200">
            Add to cart
          </button>
        </div>
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
