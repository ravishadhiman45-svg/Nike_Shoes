import { motion } from "framer-motion";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <motion.div
      className="flex flex-1 flex-col w-full max-sm:w-full rounded-xl px-6 py-3 hover-lift"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-glass-white to-glass-border p-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={imgURL}
          alt={name}
          className="w-[280px] h-[280px] object-contain"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.button
            className="bg-coral-red text-white px-6 py-2 rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="mt-8 flex justify-start gap-2.5">
        <motion.img
          src={star}
          alt="rating"
          width={24}
          height={24}
          whileHover={{ scale: 1.2, rotate: 180 }}
          transition={{ duration: 0.3 }}
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>

      <motion.h3
        className="mt-2 text-2xl font-palanquin font-semibold leading-normal gradient-text"
        whileHover={{ scale: 1.02 }}
      >
        {name}
      </motion.h3>

      <motion.p
        className="mt-2 font-montserrat font-semibold text-2xl text-coral-red leading-normal"
        whileHover={{ scale: 1.05 }}
      >
        {price}
      </motion.p>
    </motion.div>
  );
};

export default PopularProductCard;
