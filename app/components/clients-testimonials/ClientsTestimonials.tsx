import React from "react";
import Title from "../titles/Title";
import SubTitle from "../titles/SubTitle";
import Card from "./Card";

const ClientsTestimonials = () => {
  const cardsData = [
    {
      image: "avatar1",
      content:
        "I was looking for a unique travel experience, and I found it on Ithaka. I booked a private tour of the Pyramids with a local guide, and it was amazing! The guide was knowledgeable and passionate about Egypt.",
      title: "John Smith",
      subTitle: "Travel Blogger",
      className: "bg-white text-[#1F2B5F]",
    },
    {
      image: "avatar2",
      content:
        "I was looking for a unique travel experience, and I found it on Ithaka. I booked a private tour of the Pyramids with a local guide, and it was amazing! The guide was knowledgeable and passionate about Egypt.",
      title: "John Smith",
      subTitle: "Travel Blogger",
      className: "bg-[#FF785A] text-white",
    },
    {
      image: "avatar3",
      content:
        "I was looking for a unique travel experience, and I found it on Ithaka. I booked a private tour of the Pyramids with a local guide, and it was amazing! The guide was knowledgeable and passionate about Egypt.",
      title: "John Smith",
      subTitle: "Travel Blogger",
      className: "bg-white text-[#1F2B5F]",
    },
  ];
  return (
    <div
      className="flex flex-col justify-center items-center 3xl:pt-80 pt-48 xl:pt-64 3xl:pb-60 xl:pb-44 pb-32"
      style={{
        backgroundImage: "url(/assets/clients-testimonials/sec-bg.png)",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <Title text="Clients' Testimonials" className="text-[#4D9DE0]" />
      <SubTitle
        text="Unforgettable Travel Experiences"
        className="text-white"
      />
      <div className="grid grid-cols-3 gap-3 3xl:px-36 xl:px-28 px-20 mobileScreen:grid-cols-1 mobileScreen:gap-40 mobileScreen:mt-20">
        {cardsData.map((card: Record<string, any>, index: number) => {
          return (
            <Card
              key={index}
              image={card.image}
              content={card.content}
              title={card.title}
              subTitle={card.subTitle}
              className={card.className}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClientsTestimonials;
