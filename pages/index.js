import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Index = (props) => (
  <div className="w-screen h-screen flex justify-center items-center font-sans bg-gray-100">
    <Head>
      <title>Products | Shop</title>
    </Head>
    <div className="-mx-2 flex flex-wrap">
      {props.products.map((product) => (
        <Link
          key={product.id}
          href="/products/[id]"
          as={`/products/${product.id}`}
        >
          <div className="mx-2 p-4 flex flex-col justify-start items-center text-center w-64 h-64 bg-white rounded-lg shadow-md cursor-pointer">
            <div className="h-32">
              <img src={product.image} className="max-h-full max-w-full" />
            </div>
            <span className="mt-4 text-xl font-medium text-gray-700 leading-tight">
              {product.name}
            </span>
            <span>{product.price}</span>
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
