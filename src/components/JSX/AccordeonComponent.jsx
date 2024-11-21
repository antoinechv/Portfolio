import React, { useState } from "react";

const AccordeonComponent = ({ data, contentType }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Initialisation de l'état

    return (
        <div className="bg-red col-span-1 md:col-span-5 row-span-1 md:row-span-5 p-4 rounded-lg space-y-4 order-4 scroll-auto overflow-scroll">
            {data[contentType]?.nodes.map((mediaNode, index) => (
                <div
                    key={index}
                    className="border-b last:border-none cursor-pointer"
                    onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                >
                    <div className="flex items-center justify-between p-4">
                        <h3 className="text-base sm:text-xl font-bold font-truculenta text-light-cream">
                            {mediaNode[contentType]?.titre}
                        </h3>
                        <span className="text-xl font-truculenta text-light-cream">
                            {hoveredIndex === index ? "↑" : "↓"}
                        </span>
                    </div>
                    <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            hoveredIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                        style={{
                            visibility: hoveredIndex === index ? "visible" : "hidden",
                        }}
                    >
                        <a
                            href={mediaNode[contentType]?.redirectLink} // Vérifiez si cette propriété existe
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative"
                        >
                            <img
                                src={mediaNode[contentType]?.miniature?.node?.sourceUrl}
                                alt={mediaNode[contentType]?.miniature?.node?.altText}
                                className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AccordeonComponent;
