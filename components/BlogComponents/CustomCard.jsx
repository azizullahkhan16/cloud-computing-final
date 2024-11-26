"use client";

import { Col } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CustomCard = ({ image, heading, publicationDate, blogSlug }) => {
  const router = useRouter();

  return (
    <Col
      xs={24}
      sm={12}
      lg={8}
      onClick={() => router.push(`/blog/${blogSlug}`)}
    >
      <div className="flex flex-col items-stretch justify-center rounded-3xl w-full h-full customShadow1 transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer">
        <Image
          src={image}
          width={441}
          height={200}
          alt="blog image"
          className="object-contain w-full rounded-3xl"
          loading="lazy"
        />
        <div className="flex flex-col items-stretch justify-start p-8">
          <p className="font-text text-lg text-textColor mb-8">{heading}</p>
          <h5 className="font-text text-lg text-gray-400">{publicationDate}</h5>
        </div>
      </div>
    </Col>
  );
};

export default CustomCard;
