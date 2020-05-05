import fetch from "isomorphic-unfetch";

const Index = (props) => (
  <div className="w-screen h-screen flex justify-center items-center font-sans bg-gray-100">
    <div className="-mx-2 flex flex-wrap">
      {props.products.map((product) => (
        <div
          key={product.id}
          className="mx-2 p-4 flex flex-col justify-start items-center text-center w-64 h-64 bg-white rounded-lg shadow-md"
        >
          <div className="h-32">
            <img src={product.image} className="max-h-full max-w-full" />
          </div>
          <span className="mt-4 text-xl font-medium text-gray-700 leading-tight">
            {product.name}
          </span>
          <span>{product.price}</span>
        </div>
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
