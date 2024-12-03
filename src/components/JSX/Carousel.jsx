import React, { useState, useEffect } from "react";
import Button from "./Button";

const Carrousel = ({ title, data, contentType, href }) => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
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
      return nextIndex >= totalItems - itemsPerPage + 1 ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexAdjusted = prevIndex - 1;
      return prevIndexAdjusted < 0
        ? Math.max(totalItems - itemsPerPage, 0)
        : prevIndexAdjusted;
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
            transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
          }}
        >
          {data[contentType].nodes
              .filter(mediaNode => mediaNode[contentType]?.miniature?.node)
              .map((mediaNode, index) => (
                  <div className={`w-full sm:w-1/3 p-2 flex-shrink-0`} key={index}>
                    <div className="relative bg-white overflow-hidden group">
                      <a href={`/${contentType}/${mediaNode.id}`} className="block">
                        <img
                            src={mediaNode[contentType].miniature.node.sourceUrl}
                            alt={mediaNode[contentType].miniature.node.altText}
                            className="w-full aspect-video object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black opacity-70 flex items-center justify-center z-10">
                          <h2 className="text-white text-xl font-bold text-center">
                            {mediaNode[contentType].titre}
                          </h2>
                        </div>
                      </a>
                    </div>
                  </div>

              ))}
        </div>
      </div>

      <div className="flex gap-1">
        <button
            className="carousel-prev text-white bg-red p-2 rounded-lg"
            onClick={handlePrev}
            disabled={currentIndex === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>

        </button>
        <button
            className="carousel-next text-white bg-red p-2 rounded-lg"
            onClick={handleNext}
            disabled={currentIndex >= totalItems - itemsPerPage}
        >

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>

        </button>
      </div>

      <Button client:load color="cream" size="small" href={href}>
        Voir plus
      </Button>
    </div>
  );
};

export default Carrousel;
