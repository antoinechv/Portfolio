import { motion } from "framer-motion";

const Button = ({ color = "red", size = "medium", children, href }) => {
  const baseStyle =
    "w-max px-6 py-2 font-truculenta font-bold text-base cursor-pointer border-none";

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
    <motion.a
      className={`${baseStyle} ${colorStyles[color]} ${sizeStyles[size]}`}
      href={href}
      whileHover={{ scale: 1.1 }} // Animation à l'hover (agrandissement)
      whileTap={{ scale: 0.95 }} // Animation au clic (réduction)
      transition={{ type: "spring", stiffness: 300 }} // Transition plus dynamique
    >
      {children}
    </motion.a>
  );
};

export default Button;
