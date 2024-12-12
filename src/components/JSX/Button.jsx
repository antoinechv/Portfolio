import { motion } from "framer-motion";

const Button = ({ color = "red", size = "medium", children, href,...rest }) => {
  const baseStyle =
    "w-max px-6 py-2 font-truculenta font-bold text-base cursor-pointer border-none rounded-lg";

  const colorStyles = {
    red: "bg-red text-white",
    black: "bg-black text-white",
    cream: "text-black bg-light-cream",
  };

  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-8 py-2 text-base",
    large: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      className={`${baseStyle} ${colorStyles[color]} ${sizeStyles[size]}`}
      href={href}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
