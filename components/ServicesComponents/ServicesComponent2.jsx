import { Row } from "antd";
import CustomCard from "./CustomCard";
import { FaCar, FaUsers, FaMoneyBillWave } from "react-icons/fa";

const cardsInfo = [
  {
    icon: <FaCar className="text-5xl" />,
    heading: "Effortless Commuting",
    description:
      "Simply enter your destination in our app, find a carpool that matches your route, and enjoy a hassle-free ride with like-minded travelers.",
  },
  {
    icon: <FaUsers className="text-5xl" />,
    heading: "Community Connections",
    description:
      "Meet new people, make friends, and build lasting connections with fellow commuters.",
  },
  {
    icon: <FaMoneyBillWave className="text-5xl" />,
    heading: "Save on Transportation Costs",
    description:
      "Enjoy the financial benefits of carpooling while still getting to your destination efficiently.",
  },
];

const ServicesComponent2 = () => {
  return (
    <section
      id="cards-section"
      className="mb-12 lg:mb-20 card relative overflow-hidden no-bg"
    >
      <div className="max-w-full w-full px-5 overflow-hidden lg:px-0 z-10 relative">
        <div className="card-container w-full m-auto">
          <Row justify="center">
            {cardsInfo.map((cardInfo, index) => (
              <CustomCard
                icon={cardInfo.icon}
                heading={cardInfo.heading}
                description={cardInfo.description}
                key={index}
              />
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent2;
