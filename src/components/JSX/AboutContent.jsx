import React, { useEffect, useRef, useState } from "react";
import Button from "./Button.jsx";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect(); // Nettoyage à la suppression du composant
    };
  }, []);

  return (
    <article
      ref={sectionRef}
      className="flex items-center justify-center gap-5 w-full max-w-6xl md:flex-row flex-col"
    >
      <motion.img
        className="w-48"
        src="/assets/photoabout.jpg"
        alt="photo de Antoine Chauveau"
        initial={{ opacity: 0, x: -50 }} // Début invisible et décalé vers la gauche
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Apparaît et disparaît
        transition={{ duration: 0.5 }}
      />
      <div className="flex flex-col gap-5">
        <motion.h2
          className="font-bold text-4xl text-light-cream"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} // Apparaît et disparaît
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A propos
        </motion.h2>
        <motion.p
          className="font-medium text-lg text-light-cream"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet consectetur. Pretium auctor proin egestas
          enim nunc molestie integer at tortor. Dolor id etiam turpis blandit
          mauris phasellus amet at gravida. Integer egestas risus netus
          adipiscing in sagittis. Pellentesque nisi ultrices tortor metus.
        </motion.p>
        <Button size="medium" color="black" href="/CV">
          Mon CV
        </Button>
      </div>
    </article>
  );
};

export default AboutSection;
