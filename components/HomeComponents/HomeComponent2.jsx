"use client";

import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomeComponent2 = ({
  imagePath,
  text,
  heading,
  imgPosition,
  hasButton = true,
  link = "/about-us",
}) => {
  const router = useRouter();
  return (
    <Row justify="center" className="my-[64px] overflow-hidden">
      <Col md={21} sm={16} xs={22}>
        <Row justify="center" gutter={[48, 32]}>
          <Col
            md={12}
            className={`max-[767px]:order-2 ${
              imgPosition != 1 ? "order-1" : "order-2"
            } self-center`}
          >
            <div className="flex flex-col items-start justify-center lg:pr-16">
              <h2 className="text-4xl lg:text-[44px] text-left rtl:text-right font-heading2 font-[500] text-headingColor">
                {heading}
              </h2>
              <p className="font-medium text-base leading-6 my-6 max-lg:my-3 font-text text-textColor">
                {text}
              </p>
              {hasButton && (
                <div className="flex w-fit flex-wrap">
                  <span className="mr-2 mb-2">
                    <button
                      onClick={() => router.push(link)}
                      className="button max-w-max rtl:ml-auto btn-secondary btn-small font-text text-textColor bg-customDarkGreen font-medium"
                      title="Read more"
                    >
                      Read more
                    </button>
                  </span>
                </div>
              )}
            </div>
          </Col>
          <Col
            md={12}
            className={`flex justify-center max-[767px]:order-1 ${
              imgPosition == 1 ? "order-1" : "order-2"
            }`}
          >
            <Image
              src={imagePath}
              alt="about us pic"
              width={468}
              height={359}
              className="object-contain"
              loading="lazy"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HomeComponent2;
