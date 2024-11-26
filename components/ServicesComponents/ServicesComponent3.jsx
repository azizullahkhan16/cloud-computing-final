"use client";

import { Col, Row } from "antd";
import { useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";

const ServicesComponent3 = ({ queries }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const CustomRow = ({ query }) => {
    const isExpanded = expandedIndex === query.index;

    const toggleExpand = () => {
      setExpandedIndex(isExpanded ? null : query.index);
    };

    return (
      <Row justify="center" className="w-full">
        <Col xs={24} className="w-full">
          <div className="flex flex-col justify-center items-center bg-transparent rounded-md w-full">
            <div
              className="flex justify-between items-center px-6 cursor-pointer w-full"
              onClick={toggleExpand}
            >
              <p className="font-text accordion-title relative z-10 cursor-pointer py-6 font-semibold text-base leading-7 m-0 lg:text-lg lg:leading-none lg:font-bold lg:py-8 pr-8 lg:pr-16 font-inter text-[18px]">
                {query.text}
              </p>
              <div className="transition-transform duration-300">
                {isExpanded ? (
                  <TiMinus className="text-[#DBDBDB] min-w-[34px] min-h-[34px] pl-2" />
                ) : (
                  <TiPlus className="text-[#DBDBDB] min-w-[34px] min-h-[34px] pl-2" />
                )}
              </div>
            </div>
            <div
              className={`w-full content-wrapper px-6 transition-transform ${
                isExpanded ? "expanded" : "max-h-0 "
              } `}
            >
              <p className="accordion-description w-full text-sm font-medium pb-6 lg:pb-7 pr-8 lg:pr-16 font-text">
                {query.innerText}
              </p>
            </div>
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <section className="my-16 query mb-12 lg:mb-20 lg:mt-28 sm:mt-10">
      <div className="main-content max-w-full w-full container-xl py-12 lg:py-24 lg:rounded-3xl rounded-xl lg:px-0 gradient-background text-white">
        <div className="max-w-full w-full overflow-hidden lg:px-0 lg:container">
          <h2 className="w-full font-[500] text-center mb-8 lg:mb-16 text-[42px] md:text-6xl font-heading">
            Top Questions
          </h2>
          <div className="flex flex-col items-center mx-auto lg:w-10/12 lg:px-7">
            {queries.map((query, index) => (
              <CustomRow key={index} query={query} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent3;
