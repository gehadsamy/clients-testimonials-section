import React, { FC } from "react";
import { TitleProps } from "./interfaces";

const SubTitle: FC<TitleProps> = ({ className, text }) => {
  return (
    <>
      <p
        className={`${className} font-gelatoLuxe 3xl:text-6xl xl:text-5xl text-3xl 3xl:pb-32 xl:pb-28 pb-16`}
      >
        {text}
      </p>
    </>
  );
};

export default SubTitle;
