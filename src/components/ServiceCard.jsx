import React from "react";

const DesktopStyle = [
  "lg:rounded-tl-[50px] lg:rounded-tr-[0px]",
  "lg:rounded-tr-[50px] lg:rounded-tl-[0px] lg:rounded-bl-[0px] lg:rounded-br-[0px]",
  "",
];

const MobileStyle = [
  "rounded-tr-[25px] rounded-tl-[25px]",
  "rounded-br-[25px] rounded-bl-[25px]",
  "",
];

const ServiceCard = ({
  cardStyleDesktop,
  cardStyleMobile,
  cardIcon,
  cardTitle,
  cardDescription,
}) => {
  const checkCardStyleDesktop = DesktopStyle.includes(cardStyleDesktop)
    ? cardStyleDesktop
    : DesktopStyle[2];
  const checkCardStyleMobile = MobileStyle.includes(cardStyleMobile)
    ? cardStyleMobile
    : MobileStyle[2];

  return (
    <div
      className={
        checkCardStyleMobile +
        " bg-bluetravel w-full py-14 flex flex-col px-6 gap-5 hover:bg-yellowtravel ease-in-out duration-500 " +
        checkCardStyleDesktop
      }
    >
      <div className="text-center">{cardIcon}</div>
      <h3 className="text-white text-center text-2xl font-semibold ">
        {cardTitle}
      </h3>
      <p className="text-white text-center">{cardDescription}</p>
    </div>
  );
};

export default ServiceCard;
