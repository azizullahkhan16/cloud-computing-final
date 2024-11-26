import CustomCard from "@components/SafetyComponents/CustomCard";
import { Row } from "antd";
import {
  MdOutlineSupportAgent,
  MdDiversity1,
  MdAutorenew,
} from "react-icons/md";

const benefits = [
  {
    heading: "Customer-Centric Approach",
    description:
      "Our users are at the core of everything we do. We actively listen to their feedback and continuously strive to enhance their experience. By prioritizing our customers' needs, we ensure that we deliver value and exceed expectations.",
    image: <MdOutlineSupportAgent className="text-4xl text-textColor" />,
  },
  {
    heading: "Respect and Inclusion",
    description:
      "We respect and value the unique contributions of each team member. Our inclusive environment welcomes diversity in all its forms, fostering a workplace where everyone feels valued and respected. This inclusive culture is pivotal to our success and innovation.",
    image: <MdDiversity1 className="text-4xl text-textColor" />,
  },
  {
    heading: "Resilience and Adaptability",
    description:
      "In a rapidly changing world, we pride ourselves on our ability to adapt and stay resilient. We embrace change, learn from our experiences, and remain flexible in our approach to meet the evolving needs of our users and the industry.",
    image: <MdAutorenew className="text-4xl text-textColor" />,
  },
];
const ValuesComponent2 = () => {
  return (
    <section
      id="leadership"
      className="leadership-container my-8 sm:my-16 md:px-4 lg:px-0"
    >
      <div className="lg:container">
        <div className="data md:flex justify-start mb-8 sm:mb-16 px-2">
          <h2 className="text-4xl lg:text-5xl text-left rtl:text-right font-heading text-textColor font-[500] md:min-w-[10rem] lg:min-w-[19rem] max-md:mb-2">
            Core Principles
          </h2>
          <p className=" font-medium leading-6 md:ml-16 rtl:sm:mr-16 rtl:sm:ml-0 font-text text-base text-textColor ">
            At VPool, our values shape our culture and drive our actions. We
            prioritize collaboration, customer-centricity, continuous
            improvement, and inclusivity. Striving for excellence in all we do,
            we are committed to making a positive impact and creating a
            sustainable future.
          </p>
        </div>
        <Row justify="center" gutter={[16, 16]}>
          {benefits.map((benefit, index) => (
            <CustomCard
              key={index}
              image={benefit.image}
              heading={benefit.heading}
              description={benefit.description}
            />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ValuesComponent2;
