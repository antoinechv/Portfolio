import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ListItem = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.article
      ref={itemRef}
      className="flex flex-col border-b-2 border-black pb-4 mb-4"
      initial={{ opacity: 0, y: 20 }} // Début invisible et décalé vers le bas
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Apparaît et disparaît
      transition={{ duration: 0.5 }} // Durée de l'animation
    >
      <h2 className="font-bold text-2xl font-truculenta">{title}</h2>
      <p className="font-bold text-base font-truculenta">{description}</p>
    </motion.article>
  );
};

export default ListItem;
