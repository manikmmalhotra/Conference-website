import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-10 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          //logo
          <p className="mb-4">
            <strong className="font-medium">Science and Technology : Education and Research</strong> 
          </p>
          <p className="text-gray-400">©2022 Abv IIITM , Gwalior</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-bold text-xl">Patron Board</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <strong>Dr. Shrinivas Singh{" "}</strong>
              <p className="text-s">Abv IIITM, Gwalior</p>
            </li>
            <li className="my-2  hover:text-orange-500 cursor-pointer transition-all">
              
              <strong>Dr. Rajendra Kumar Pandit{" "}</strong>
              <p className="text-s">Mits, Gwalior</p>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              
              <strong>Shri Atul kathori{" "}</strong>
              <p className="text-s">Shiksha Sanskriti Utthan Nyas, New Delhi</p>
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-bold text-xl">Advisory Board</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <strong>Dr. Om Prakash, Editor{" "}</strong>
              <p className="text-s">Vigyan Prakash General, New Delhi</p>
            </li>
            <li className="my-2  hover:text-orange-500 cursor-pointer transition-all">
              
              <strong>Shri. Ashok kadel, Director{" "}</strong>
              <p className="text-s">Madhya Pradesh Hindi Granth Academy, Bhopal</p>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              
              <strong>Dr. Ravi Prakash Tiwari, Professor{" "}</strong>
              <p className="text-s">MNIT, Allahabad</p>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              
              <strong>Dr. Pradeep Kumar Goyal, Professor{" "}</strong>
              <p className="text-s">DTU, New Delhi</p>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              
              <strong>Dr. Manjri Pandit, Founder of the Academy{" "}</strong>
              <p className="text-s">Mits, Gwalior</p>
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-bold text-xl">Coordinators</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <strong>Dr. Karamveer Arya, Professor{" "}</strong>
              <p className="text-s">Abv IIITM, Gwalior</p>
            </li>
            <li className="my-2  hover:text-orange-500 cursor-pointer transition-all">
              
              <strong>Dr. Chandra Shekhar Malviya, Professor{" "}</strong>
              <p className="text-s">Mits, Gwalior</p>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
