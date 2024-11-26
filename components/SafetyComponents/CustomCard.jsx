import { Col } from "antd";

const CustomCard = ({
  heading,
  image,
  description,
  numCardsLarge = 8,
  backgroundColor = "#f4f8fb",
}) => (
  <Col xl={numCardsLarge} sm={12} xs={24}>
    <div
      className="w-full card-col card_icon_horizontal text-center inline-block rounded-[28px] p-6 transform transition-transform duration-300 hover:-translate-y-2 h-full"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="flex flex-col items-start justify-start">
        <div className="flex justify-center items-center p-3 rounded-full border border-[#2dc6b0]">
          {image}
        </div>
        <h5 className="text-start my-4 text-textColor text-3xl font-heading">
          {heading}
        </h5>
        <p className="text-start text-textColor font-text text-base font-medium leading-6">
          {description}
        </p>
      </div>
    </div>
  </Col>
);

export default CustomCard;
