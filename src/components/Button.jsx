import { motion } from "framer-motion";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  variant = "primary",
}) => {
  const getButtonStyles = () => {
    switch (variant) {
      case "gradient":
        return `
          bg-gradient-to-r from-coral-red to-electric-blue
          border-2 border-transparent
          text-white
          shadow-glow
          hover:shadow-neon
          hover:scale-105
          active:scale-95
        `;
      case "glass":
        return `
          glass-effect
          border-glass-border
          text-white
          hover:bg-white/20
          hover:scale-105
          active:scale-95
        `;
      case "outline":
        return `
          bg-transparent
          border-2 border-coral-red
          text-coral-red
          hover:bg-coral-red
          hover:text-white
          hover:scale-105
          active:scale-95
        `;
      default:
        return `
          bg-coral-red
          border-coral-red
          text-white
          hover:bg-coral-red/80
          hover:scale-105
          active:scale-95
        `;
    }
  };

  return (
    <motion.button
      className={`
        flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
        transition-all duration-300 ease-in-out
        ${fullWidth && "w-full"}
        ${getButtonStyles()}
        ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : ""}
      `}
      whileHover={{
        scale: 1.05,
        boxShadow:
          variant === "gradient" ? "0 0 25px rgba(255, 107, 107, 0.6)" : "none",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {label}
      {iconURL && (
        <motion.img
          src={iconURL}
          alt="button icon"
          className="ml-2 rounded-full w-5 h-5"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
};

export default Button;
