import { Col } from "antd";
import Image from "next/image";
import React from "react";

const CustomCard = ({ icon, heading, description }) => {
  return (
    <Col lg={8} md={12} xs={24} className="h-full">
      <div className="flex justify-center items-center transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer">
        <div className="bg-[#f4f8fb] md:h-[400px] rounded-[28px] m-4 mx-2 p-11 py-[45px] max-w-[350px]  lg:my-4 lg:mx-4 px-4 my-5 text-center inline-block">
          <div className="w-full flex flex-col items-center justify-center lg:px-3">
            <div className="flex justify-center items-center p-8 text-[#67EDD0] bg-[#41998c] w-fit h-fit rounded-full mb-5">
              {icon}
            </div>
            <h3 className="text-3xl mb-3 font-heading text-[#2D2E2E] font-[500] px-2">
              {heading}
            </h3>
            <div className="card-description w-full leading-6 my-2 h-full text-base font-medium font-text text-[#2D2E2E]">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CustomCard;
