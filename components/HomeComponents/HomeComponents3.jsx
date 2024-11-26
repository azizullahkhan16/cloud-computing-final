"use client";

import { Row } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import CustomCard from "./CustomCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import blogs from "@components/BlogComponents/blogs";
import { useRouter } from "next/navigation";

const HomeComponents3 = () => {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="customBackground">
      <div className="max-xl:px-8">
        <div className="m-auto max-w-[1200px] relative z-[1] py-24 max-md:py-16 pl-3 sm:pl-6 md:pl-0">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-left text-[42px] md:text-6xl font-[500] mb-0 rtl:hidden font-heading text-[#2D2E2E]">
              Our Blogs
            </h2>
            <Link href="/blog" className="rtl:hidden">
              <div
                className="text-base font-medium flex items-center justify-between mr-1 font-text text-[#2D2E2E]"
                onClick={() => router.push("/blog")}
              >
                View all
                <FaArrowRightLong className="ml-1 w-5" />
              </div>
            </Link>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              {blogs.map((blog, index) => (
                <CustomCard
                  key={index}
                  heading={blog.heading}
                  text={blog.text}
                  image={blog.image}
                  blogSlug={blog.slug}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponents3;
