"use client";

import { Col, Row } from "antd";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import parse from "html-react-parser";

const CustomBox = ({ heading, subheading, image }) => {
  return (
    <div
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objecttFit: "cover",
      }}
      className="h-[450px] sm:h-[600px] w-screen imageBackground"
    >
      <Row justify="center" className="h-full">
        <Col xs={22} className="h-full">
          <Row justify="start" className="h-full">
            <Col md={22} xs={21} className="h-full">
              <div className="flex flex-col items-start justify-end h-full">
                <h2
                  className="text-[28px] sm:text-[44px] lg:text-6xl text-left font-heading uppercase font-[500] text-white sm:mb-6 mb-3 customHeading"
                  style={{
                    lineHeight: "56px",
                    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {parse(heading)}
                </h2>
                <p
                  className="capitalize font-[500] text-sm sm:text-base md:text-[20px] leading-6 font-text text-white mb-16 sm:w-[576px] w-full"
                  style={{ textShadow: "2px 1px 1px rgba(0, 0, 0, 1.7)" }}
                >
                  {parse(subheading)}
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const items = [
  {
    heading:
      "Redefining <span className='text-customDarkGreen'>Transportation</span><br/> Together",
    subheading:
      "Embark on an innovative journey with VPool to revolutionize transportation, making every ride safer, smarter, and more sustainable for a better tomorrow",
    image: "/assets/images/slider1.png",
  },
  {
    heading:
      "Ride with <span className='text-customDarkGreen'>Confidence</span>",
    subheading:
      "Your safety is our top priority. Enjoy secure, reliable rides with VPool",
    image: "/assets/images/slider2.png",
  },
  {
    heading:
      "Join the <br/><span className='text-customDarkGreen'>VPool</span> Community",
    subheading:
      "Experience convenience at your fingertips. Download the app today and start pooling!",
    image: "/assets/images/slider3.png",
  },
];

const HomeComponent5 = () => {
  return (
    <section
      style={{
        width: "calc(100vw)",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
      className="customCaraousel"
    >
      <AliceCarousel
        disableButtonsControls
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={2000}
        animationType="slide"
        infinite
        touchTracking={false}
        items={items.map((item, index) => (
          <CustomBox
            key={index}
            heading={item.heading}
            subheading={item.subheading}
            image={item.image}
          />
        ))}
        className="custom-carousel"
      />
    </section>
  );
};

export default HomeComponent5;
