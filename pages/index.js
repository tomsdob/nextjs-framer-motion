import fetch from "isomorphic-unfetch";

const Index = (props) => (
  <div>
    <div>
      {props.products.map((product) => (
        <span>{product.name}</span>
      ))}
    </div>
  </div>
);

Index.getInitialProps = async function () {
  const res = await fetch(
    "http://my-json-server.typicode.com/tomsdob/nextjs-framer-motion/"
  );
  const data = await res.json();
  return {
    products: data,
  };
};

export default Index;
