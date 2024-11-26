import CustomCard from "@components/SafetyComponents/CustomCard";
import { Col, Row } from "antd";
import {
  MdLightbulbOutline,
  MdSecurity,
  MdOutlineEco,
  MdPeopleOutline,
} from "react-icons/md";

const values = [
  {
    heading: "Safety First",
    description:
      "We prioritize the safety and well-being of our users and community.",
    image: <MdSecurity className="text-4xl text-textColor" />,
  },
  {
    heading: "Passion for Innovation",
    description:
      "We are passionate about using technology to solve real-world problems and improve lives.",
    image: <MdLightbulbOutline className="text-4xl text-textColor" />,
  },
  {
    heading: "Commitment to Sustainability",
    description:
      "We are committed to reducing our environmental footprint and promoting eco-friendly transportation solutions.",
    image: <MdOutlineEco className="text-4xl text-textColor" />,
  },
  {
    heading: "Community Impact",
    description:
      "We believe in supporting local communities and creating opportunities for growth and development.",
    image: <MdPeopleOutline className="text-4xl text-textColor" />,
  },
];

const ValuesComponent1 = () => {
  return (
    <section className="sm:my-32 my-12">
      <div className="rounded-3xl flex flex-col items-start justify-center bg-[#F0F4F8] sm:py-20 sm:px-8 py-12 px-4">
        <h3 className="text-[42px] md:text-6xl mb-12 max-sm:mb-6 font-heading text-textColor font-[500]">
          VPool's Values
        </h3>
        <Row justify="center" gutter={[16, 16]}>
          {values.map((value, index) => (
            <CustomCard
              heading={value.heading}
              description={value.description}
              image={value.image}
              key={index}
              numCardsLarge={6}
              backgroundColor="#FFFFFF"
            />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ValuesComponent1;
