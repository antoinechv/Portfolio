import React from "react";
import CardRealization from "./CardRealization.jsx";
import { motion } from "framer-motion";

// Static data for the component
const cardRealizations = [
  { title: "UI/UX", href: "/projects", link: "Voir plus" },
  { title: "Photographe", href: "/pictures", link: "Voir plus" },
  { title: "Vidéaste", href: "/videos", link: "Voir plus" },
  { title: "Front Developer", href: "/projects", link: "Voir plus" },
];

const PortfolioSection = () => {
  return (
    <motion.section
      className="flex items-center flex-col gap-5 pb-5"
      initial={{ opacity: 0, x: -20 }} // Start off-screen to the left
      animate={{ opacity: 1, x: 0 }} // Slide into position
      exit={{ opacity: 0, x: 20 }} // Slide out to the right
      transition={{ duration: 0.75 }} // Longer duration for slower animation
    >
      <div className="flex items-center justify-center gap-5 flex-col md:flex-row">
        <div className="flex flex-col items-center gap-5 md:w-3/6">
          <h1 className=" text-4xl md:text-9xl font-bold font-truculenta text-red">
            portfolio
          </h1>

          <p className="text-black text-base font-medium p-8 min-h-[80px] flex items-center justify-center">
            Salut ! Bienvenue sur mon portfolio. Ici, on peut découvrir mes
            projets et compétences en tant que photographe, designer UI/UX et
            développeur front.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 ">
          <h2 className="bg-red text-light-cream font-truculenta font-extrabold text-2xl px-8 py-2 min-w-[150px] text-center">
            Antoine CHAUVEAU
          </h2>
          <img
            className="sm:w-52 md:w-56 w-36"
            src="/assets/bdx-22.jpg"
            alt="photo de Antoine CHAUVEAU"
          />
        </div>
      </div>

      <motion.div
        className="flex items-center justify-center gap-5 flex-wrap flex-col md:flex-row"
        initial={{ opacity: 0, x: -20 }} // Start off-screen to the left for cards
        animate={{ opacity: 1, x: 0 }} // Slide into position
        transition={{ duration: 0.75, delay: 0.2 }} // Longer duration with delay
      >
        {cardRealizations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -20 : 20 }} // Alternate direction for each card
            animate={{ x: 0 }}
            transition={{ duration: 0.75, delay: 0.2 * index }} // Staggered entry
          >
            <CardRealization
              title={item.title}
              href={item.href}
              link={item.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default PortfolioSection;
