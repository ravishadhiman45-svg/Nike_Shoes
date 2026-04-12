import { motion } from "framer-motion";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  const isSelected = bigShoeImage === imgURL.bigShoe;

  return (
    <motion.div
      className={`
        border-2 rounded-xl cursor-pointer max-sm:flex-1
        transition-all duration-300 ease-in-out
        ${
          isSelected
            ? "border-coral-red shadow-neon"
            : "border-transparent hover:border-electric-blue"
        }
      `}
      onClick={handleClick}
      whileHover={{
        scale: 1.05,
        boxShadow: isSelected
          ? "0 0 25px rgba(255, 107, 107, 0.6)"
          : "0 0 15px rgba(78, 205, 196, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4 glass-effect">
        <motion.img
          src={imgURL.thumbnail}
          alt="nike shoe collection"
          width={127}
          height={103}
          className="object-contain"
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default ShoeCard;
