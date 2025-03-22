import React from "react";
import Phone from "../../assets/Phone.png";
import CCard from "../../assets/CCard.png";
import RCard from "../../assets/RCard.png";
import SCard from "../../assets/SCard.png";
import Akash from "../../assets/Akash.png";
import Rahul from "../../assets/Rahul.png";
import vector from "../../assets/Vector.png";
import { Button } from "@/components/ui/button";

function First() {
  return (
    <div className="h-[62vh] md:h-screen relative pt-[6rem] 2xl:pt-[6rem] ">
      <div className="relative h-full rounded-3xl  border border-[#EDEDEF] pt-10 overflow-hidden">
        <div className=" flex relative flex-col items-center gap-4 w-full">
          <div className="flex relative flex-col items-center gap-2 md:gap-0">
            <h1 className="text-[#695FD9] text-[24px] md:text-[40px] xl:text-[44px] 2xl:text-[70px] font-Manrope font-bold leading-none">
              Passport OCR SDK
            </h1>
            <div className="flex items-center">
              <h1 className="text-[#0D0D10] text-[24px] md:text-[40px] xl:text-[44px]  2xl:text-[70px] font-bold font-Manrope leading-none ">
                unmatched cost efficiency
              </h1>

              <div className="">
                <img src={Rahul} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
          <p className="flex  text-center font-Montserrat text-xs lg:text-sm max-w-[250px] md:wax-w-[100px] lg:max-w-xl font-Montserrat">
            Verify identities quickly with just a smartphone and an electronic
            passport. Experience effortless and secure identity verification
            with our NFC-propelled Passport SDK.
          </p>

          <div className="flex relative gap-300">
            <div>
              <div className="absolute right">
                <img
                  src={Akash}
                  alt=""
                  className="w-12 h-10  2xl:w-15 2xl:h-12"
                />
              </div>
            </div>
            <div>
              <Button className="text-sm 2xl:text-base font-Montserrat px-8 py-4 !rounded-[40px] cursor-pointer absolute left-1/2 -translate-x-1/2">
                Book Demo
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="relative">
              <img
                src={Phone}
                alt=""
                className="h-[20vh] w-[42vw] md:w-[17vw] md:h-[27vh] lg:w-[16vw] lg:h-[30vh] xl:w-[20vw] xl:h-[40vh]"
              />

              <div className="absolute top-20 -left-16 xl:-left-35">
                <img src={RCard} alt="" className="w-20 h-18 xl:w-42 xl:h-34" />
              </div>
              <div className="absolute top-13 -right-21 xl:-right-44">
                <img src={SCard} alt="" className="w-20 h-13 xl:w-40 xl:h-26" />
              </div>
              <div className="absolute top-32 xl:top-45.5 -right-16 xl:-right-20">
                <img src={CCard} alt="" className="w-18 h-6 xl:w-22 xl:h-9" />
              </div>
              <div className="absolute top-3 -left-26 xl:top-3 xl:-left-35">
                <img src={CCard} alt="" className="w-18 h-6 xl:w-22 xl:h-9" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-[50vh] w-[50vw]  -z-50">
          <img
            src={vector}
            alt=""
            className="bg-[#E0E3FD]  transform rotate-[-144.78deg] blur-3xl "
          />
        </div>
        <div className="absolute bottom-0 left-0 h-[50vh] w-[50vw]  -z-50">
          <img
            src={vector}
            alt=""
            className="bg-[#E7F6FF] transform rotate-[144.78deg] blur-3xl "
          />
        </div>
      </div>
    </div>
  );
}

export default First;
