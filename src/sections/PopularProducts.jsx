import { motion } from "framer-motion";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      id="products"
      className="max-container max-sm:mt-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col justify-start gap-5"
        variants={itemVariants}
      >
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="gradient-text"> Popular </span> Products
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </motion.div>

      <motion.div
        className=" mt-16 grid grid-col-1 gap-14 lg:grid-cols-4 md:grid-cols-3 sm:grid-col-2 sm:gap-6"
        variants={containerVariants}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            variants={itemVariants}
            transition={{ delay: index * 0.1 }}
          >
            <PopularProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PopularProducts;
