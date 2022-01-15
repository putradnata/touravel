import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSearch,
  faMapMarkerAlt,
  faCalendar,
  faGlobeAsia,
  faUsers,
  faCartPlus,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
// images
import GirlImage from "../images/group42.png";
import MapOrnament from "../images/map-ornament.png";
// Components
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  return (
    <div id="body">
      <div className="container mx-auto my-20 items-center h-fit flex flex-col-reverse gap-10 lg:flex lg:flex-row lg:gap-0">
        <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl text-bluetravel font-bold">
            Make Your Trip Memorable
            <br /> Book with Tour
            <span className="text-4xl text-yellowtravel">avel</span>
          </h1>
          <p>
            We have partners with several destinations that you <br /> might
            feel at home there, we will guide you with our
            <br /> best service.
          </p>
          <div className="flex font-semibold gap-10 justify-center lg:justify-start">
            <span>
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="text-bluetravel mr-2"
              />
              Plan your trip
            </span>
            <span>
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="text-bluetravel mr-2"
              />
              Fly with Us
            </span>
          </div>
          <div className="flex flex-col flex-wrap justify-center mt-16">
            <div className="rounded-full bg-bluetravel text-white mx-auto text-center font-semibold w-fit px-14 py-5 z-10">
              Get The Schedule
            </div>
            <div className="rounded-xl border-4 gap-5 border-white flex flex-col px-16 mx-auto mb-5 lg:px-16 py-8 bg-gradient-to-r from-pink-300 to-sky-300 items-center lg:flex lg:flex-row lg:rounded-full -mt-5">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size="2x"
                className="text-bluetravel hidden lg:block"
              />
              <div className="flex flex-col w-full lg:w-fit">
                <label
                  className="text-gray-700 font-light mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tightfocus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Jakarta, Indonesia"
                />
              </div>
              <FontAwesomeIcon
                icon={faCalendar}
                size="2x"
                className="text-bluetravel hidden lg-block"
              />
              <div className="flex flex-col w-full lg:w-fit">
                <label
                  className="text-gray-700 font-light mb-2"
                  htmlFor="location"
                >
                  Date
                </label>
                <input
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tightfocus:outline-none focus:shadow-outline"
                  id="date"
                  type="date"
                />
              </div>
              <div className="bg-yellowtravel flex rounded-full text-white p-5">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            <p className="text-gray-500 text-center">
              Popular search : Kuta beach, Raja Ampat Beach, Borobudur temple
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src={MapOrnament}
            className="absolute w-fit inset-y-32 right-0 z-[-1]"
          />
          <img src={GirlImage} className="" />
        </div>
      </div>
      <div className="container mx-auto mb-20 flex flex-col gap-14 lg:gap-20 lg:mb-36">
        <div className="flex flex-col gap-3 lg:gap-5">
          <p className="uppercase text-yellowtravel font-semibold text-center text-xl">
            What We Serve
          </p>
          <h2 className="text-gray-700 capitalize text-4xl font-bold text-center">
            Top values for you
          </h2>
          <p className="text-gray-500 text-center">
            The best service that will be with you every time
          </p>
        </div>
        <div className="flex flex-col px-10 lg:px-0 lg:flex lg:flex-row">
          <ServiceCard
            cardIcon={
              <FontAwesomeIcon
                icon={faGlobeAsia}
                size="4x"
                className="text-white"
              />
            }
            cardStyleDesktop="lg:rounded-tl-[50px] lg:rounded-tr-[0px]"
            cardStyleMobile="rounded-tr-[25px] rounded-tl-[25px]"
            cardTitle="Lot of Choices"
            cardDescription="Total of more than 450 destinations 
                            in various countries in the world 
                            become partners with us"
          />
          <ServiceCard
            cardIcon={
              <FontAwesomeIcon
                icon={faUsers}
                size="4x"
                className="text-white"
              />
            }
            cardTitle="Tour Guide"
            cardDescription="There are 3 guides for each 
            destination in the place you visit"
          />
          <ServiceCard
            cardIcon={
              <FontAwesomeIcon
                icon={faCartPlus}
                size="4x"
                className="text-white"
              />
            }
            cardTitle="Easy Booking"
            cardDescription="We provide all services online 
            which can be accessed easily 
            through our website"
          />
          <ServiceCard
            cardIcon={
              <FontAwesomeIcon icon={faBed} size="4x" className="text-white" />
            }
            cardStyleDesktop="lg:rounded-tr-[50px] lg:rounded-tl-[0px] lg:rounded-bl-[0px] lg:rounded-br-[0px]"
            cardStyleMobile="rounded-br-[25px] rounded-bl-[25px]"
            cardTitle="Luxury Hotel"
            cardDescription="We also provide lodging near the 
            destination where you are visiting."
          />
        </div>
      </div>

      <div className="container mx-auto mb-36">
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <p className="uppercase text-yellowtravel font-semibold text-xl">
            Top Destination
          </p>
          <h2 className="text-gray-700 capitalize text-4xl font-bold">
            Explore Top Destination
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
