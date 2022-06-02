import React from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import Feature from "./Feature";

const Pricing = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-500 to-white-500 w-full py-14"
      
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full " id="about">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            About
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
          <Feature />
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 ">
                <Image
                  src="/assets/abv.png"
                  width={250}
                  height={200}
                  alt="Free Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
              Atal Bihari Vajpayee-Indian Institute of Information Technology and Management, Gwalior
              </p>
              
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 ">
                <Image
                  src="/assets/mits.jpg"
                  width={250}
                  height={200}
                  alt="Free Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Madhav institute of technology and science, Gwalior
              </p>
              
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 ">
                <Image
                  src="/assets/siks.jpeg"
                  width={200}
                  height={200}
                  alt="Free Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
              Shiksha Sanskriti Utthan Nyas, New Delhi
              </p>
              
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="time">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
            Timeline{" "}
          </h3>
          <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
           lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum
          </p>
          <div
      className="max-w-screen-xl mb-6 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
  
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        
        
        <div className="flex flex-col items-center justify-center ml-auto w-full lg:w-10/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
          Science and Technology : Education and Research Online Mode
          </h3>
          <p className="my-2 text-black-500">
          <strong>14-15 June 2022</strong>
          </p>
          <br />
          <ButtonPrimary>Register Now</ButtonPrimary>
        </div>
        
        <div className="flex w-full justify-end">
          
          <div className="h-full w-full p-4">
            <Image
              src="/assets/4905784.jpg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={500}
              width={700}
            />
          </div>
        </div>
      </div>
      </div>
      
      <div
      className="max-w-screen-xl mb-6 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
  
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 ">
        
        <div className="flex w-full justify-end">
          
          <div className="h-full w-full p-4">
            <Image
              src="/assets/6101073.jpg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={500}
              width={700}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ml-auto w-full lg:w-10/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
          Science and Technology : Education and Research Ofline Mode
          </h3>
          <p className="my-2 text-black-500">
          <strong>27-28 June 2022</strong>
          </p>
          <br />
          <ButtonPrimary>Register Now</ButtonPrimary>
        </div>
      </div>
    </div>
      

        </div>
        <div className="flex flex-col w-full " id="speak">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Speakers{" "}
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum orem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum
          </p>
          <div className="w-full flex flex-col py-12">
            <Testimoni />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
