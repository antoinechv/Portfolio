import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ListItem = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // L'élément entre dans la vue
        } else {
          setIsVisible(false); // L'élément sort de la vue
        }
      },
      {
        threshold: 0.1, // Déclenchement lorsque 10% de l'élément est visible
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      observer.disconnect(); // Nettoyage à la suppression du composant
    };
  }, []);

  return (
    <motion.li
      ref={itemRef}
      className="flex flex-col border-b-2 border-black pb-4 mb-4"
      initial={{ opacity: 0, y: 20 }} // Début invisible et décalé vers le bas
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Apparaît et disparaît
      transition={{ duration: 0.5 }} // Durée de l'animation
    >
      <h2 className="font-bold text-2xl font-truculenta">{title}</h2>
      <p className="font-bold text-base font-truculenta">{description}</p>
    </motion.li>
  );
};

export default ListItem;
