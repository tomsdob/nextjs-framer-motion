import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Index = (props) => (
  <div className="w-screen min-h-screen flex justify-center items-center font-sans bg-gray-100">
    <Head>
      <title>Products | Shop</title>
    </Head>
    <div className="-mx-2 flex flex-col md:flex-row w-full max-w-screen-lg">
      {props.products.map((product) => (
        <Link
          key={product.id}
          href="/products/[id]"
          as={`/products/${product.id}`}
        >
          <div className="mx-2 my-2 md:my-0 p-4 flex flex-col justify-start items-center text-left w-full md:w-1/3 bg-white rounded-lg shadow-md cursor-pointer">
            <div className="h-32">
              <img src={product.image} className="max-h-full max-w-full" />
            </div>
            <div className="mt-4 w-full">
              <span className="mb-4 block text-xl font-medium text-gray-800 leading-tight">
                {product.name}
              </span>
              <span className="block text-xl font-bold text-gray-800 leading-tight">
                {product.price}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

Index.getInitialProps = async function () {
  const res = await fetch(
    "http://my-json-server.typicode.com/tomsdob/nextjs-framer-motion/products"
  );
  const data = await res.json();
  return {
    products: data,
  };
};

export default Index;
