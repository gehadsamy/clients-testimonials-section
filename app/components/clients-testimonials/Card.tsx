import React, { FC } from "react";
import { CardProps } from "./interfaces";
import Image from "next/image";

const Card: FC<CardProps> = ({
  image,
  content,
  title,
  subTitle,
  className,
}) => {
  return (
    <div
      className={`${className} flex relative justify-center text-center items-center flex-col rounded-3xl px-7 3xl:px-12 xl:px-9 3xl:pt-20 3xl:pb-10  xl:pt-14 xl:pb-7  pt-8 pb-4 transition-transform duration-500 ease-in-out transform hover:-translate-y-10 hover:cursor-pointer`}
    >
      <Image
        src={`/assets/clients-testimonials/${image}.png`}
        alt={`${image}`}
        className="-top-12 mobileScreen:-top-12 mobileScreen:-top-32 lg:-top-[20%] absolute w-[28%]"
        width={144}
        height={144}
        priority
      ></Image>
      <p className="font-poppins font-normal text-xl">{`"${content}"`}</p>
      <p className="font-poppins font-medium text-2xl mt-1">{`"${title}"`}</p>
      <p className="font-poppins font-light text-lg">{`"${subTitle}"`}</p>

      <div className="flex w-full justify-center gap-2 mt-3 items-center">
        {new Array(5).fill(0).map((_, i) => (
          <Image
            key={i}
            src="/assets/clients-testimonials/rating-Icons.png"
            alt="rating-Icons"
            className="w-[6%]"
            width={35}
            height={35}
            priority
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
