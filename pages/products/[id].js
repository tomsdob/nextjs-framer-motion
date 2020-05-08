import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import { fadeInUp, staggerFaster } from "../../assets/animations/animations";
// Icons
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import Minus from "../../assets/icons/minus.svg";
import Plus from "../../assets/icons/plus.svg";

let imageStatus = "done";

const Product = (props) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit={{ opacity: 0 }}
    className="min-h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center font-sans bg-gray-100"
  >
    <Head>
      <title>{props.product.name} | Shop</title>
    </Head>
    <div className="p-4 flex justify-center items-center bg-white w-full lg:w-1/2 h-auto lg:h-screen lg:fixed lg:top-0 lg:left-0">
      <motion.img
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        alt={props.product.name}
        src={props.product.image}
        className="max-h-full max-w-full"
      />
    </div>
    <motion.div
      variants={staggerFaster}
      className="p-4 flex justify-center items-center w-full lg:w-1/2 h-full lg:ml-auto"
    >
      <div className="flex flex-col text-left max-w-sm w-full h-auto">
        <Link href="/">
          <div className="mb-12 inline-flex justify-start items-center text-base font-normal text-gray-800 leading-tight cursor-pointer transition-all duration-200 hover:text-gray-600">
            <ArrowLeft className="w-6 h-6" />
            Back to products
          </div>
        </Link>
        <div>
          <motion.h1
            variants={fadeInUp}
            className="mb-4 text-2xl font-bold text-gray-800 leading-none"
          >
            {props.product.name}
          </motion.h1>
          <ul className="mb-4">
            {Array.isArray(props.product.details) ? (
              props.product.details.map((detail) => (
                <motion.li
                  variants={fadeInUp}
                  key={detail}
                  className="flex flex-row text-base font-light text-gray-800 leading-tight"
                >
                  <span className="mr-2">-</span>
                  <p>{detail}</p>
                </motion.li>
              ))
            ) : (
              <motion.span
                variants={fadeInUp}
                className="text-base font-light text-gray-800 leading-tight"
              >
                No info could be retrieved!
              </motion.span>
            )}
          </ul>
          <motion.div
            variants={fadeInUp}
            className="flex justify-between items-center"
          >
            <div className="inline-flex justify-center items-center">
              <button
                disabled
                className="p-1 flex justify-center items-center text-lg font-bold text-gray-800 leading-none w-8 h-8 rounded-full focus:outline-none focus:shadow-outline"
              >
                <Minus className="w-6 h-6" />
              </button>
              <span className="mx-2 text-lg font-bold text-gray-800 leading-none">
                1
              </span>
              <button className="p-1 flex justify-center items-center text-lg font-bold text-gray-800 leading-none w-8 h-8 rounded-full focus:outline-none focus:shadow-outline">
                <Plus className="w-6 h-6" />
              </button>
            </div>
            <span className="text-2xl font-bold text-gray-800 leading-none">
              {props.product.price}
            </span>
          </motion.div>
        </div>
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex justify-between items-center"
        >
          <button className="px-6 py-4 text-base font-normal text-white leading-none bg-gray-800 hover:bg-gray-600 w-full lg:w-auto rounded-lg transition-all duration-200">
            Add to cart
          </button>
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
);

Product.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(
    `https://my-json-server.typicode.com/tomsdob/nextjs-framer-motion/products/${id}`
  );
  const product = await res.json();
  return { product };
};

export default Product;
