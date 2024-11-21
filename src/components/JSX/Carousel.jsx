import React, { useState, useEffect } from "react";
import Button from "./Button";

const Carrousel = ({ title, data, contentType, href }) => {
  const [itemsPerPage, setItemsPerPage] = useState(3); // Valeur par défaut
  const totalItems = data[contentType].nodes.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    updateItemsPerPage(); 

    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= totalItems - itemsPerPage + 1 ? 0 : nextIndex; // Revenir au début si dépassé
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexAdjusted = prevIndex - 1;
      return prevIndexAdjusted < 0
        ? Math.max(totalItems - itemsPerPage, 0)
        : prevIndexAdjusted; // Aller à la fin si nécessaire
    });
  };

  return (
    <div className="carousel flex items-center flex-col gap-5 max-w-4xl mx-auto mt-10 p-5 pb-10">
      <h2 className="text-5xl text-light-cream font-black font-truculenta">
        {title}
      </h2>
      <div className="overflow-hidden">
        <div
          className="carousel-inner flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`, // Ajuster pour 1 ou 3 cartes
          }}
        >
          {data[contentType].nodes.map((mediaNode, index) => (
            <div className={`w-full sm:w-1/3 p-2 flex-shrink-0`} key={index}>
              <div className="relative bg-white overflow-hidden">
                <img
                  src={mediaNode[contentType].miniature.node.sourceUrl}
                  alt={mediaNode[contentType].miniature.node.altText}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-70 flex items-center justify-center z-10">
                  <h2 className="text-white text-xl font-bold text-center">
                    {mediaNode[contentType].titre}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-1">
        <button
          className="carousel-prev bg-red text-white aspect-square w-8"
          onClick={handlePrev}
          disabled={currentIndex === 0} // Désactiver si au début
        >
          ◀
        </button>
        <button
          className="carousel-next bg-red text-white aspect-square w-8"
          onClick={handleNext}
          disabled={currentIndex >= totalItems - itemsPerPage} // Désactiver si à la fin
        >
          ▶
        </button>
      </div>

      <Button client:load color="cream" size="small" href={href}>
        Voir plus
      </Button>
    </div>
  );
};

export default Carrousel;
