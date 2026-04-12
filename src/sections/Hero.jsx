import { useState } from "react";
import { motion } from "framer-motion";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      id="home"
      className="w-full flex flex-col justify-center gap-10 min-h-screen max-container xl:flex-row"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative flex flex-col justify-center items-start pt-28 w-full max-xl:padding-x xl:w-2/5">
        <motion.p
          className="text-xl font-montserrat text-coral-red mb-4"
          variants={itemVariants}
        >
          Our Summer collections
        </motion.p>

        <motion.h1
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
          variants={itemVariants}
        >
          <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap gradient-text">
            The New Arrival
          </span>
          <br />
          <motion.span
            className="text-coral-red inline-block mt-3"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            Nike
          </motion.span>{" "}
          Shoes
        </motion.h1>

        <motion.p
          className="font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm"
          variants={itemVariants}
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button label="Show now" iconURL={arrowRight} variant="gradient" />
        </motion.div>

        <motion.div
          className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"
          variants={itemVariants}
        >
          {statistics.map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p
                className="text-4xl font-palanquin font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                {item.value}
              </motion.p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center rounded-3xl overflow-hidden"
        variants={itemVariants}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-coral-red/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.img
          className="object-contain relative z-10"
          src={bigShoeImg}
          alt="nike shoe collection"
          width={610}
          height={502}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />

        <motion.div
          className="absolute -bottom-[5%] flex gap-4 sm:gap-6 sm:left-[10%] max-sm:px-6"
          variants={itemVariants}
        >
          {shoes.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <ShoeCard
                imgURL={item}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImage={bigShoeImg}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
