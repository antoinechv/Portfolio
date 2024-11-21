import React from "react";
import Button from "./Button.jsx";

const CardRealization = ({ title, href, link }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 min-w-52 min-h-20 w-max p-8 bg-red font-truculenta">
      <h3 className="font-bold text-3xl text-light-cream">{title}</h3>
      <Button clientLoad color="black" size="medium" href={href}>
        {link}
      </Button>
    </div>
  );
};

export default CardRealization;
