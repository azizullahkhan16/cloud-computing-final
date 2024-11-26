import HomeComponent2 from "@components/HomeComponents/HomeComponent2";
import HomeComponent4 from "@components/HomeComponents/HomeComponent4";
import HomeComponent5 from "@components/HomeComponents/HomeComponent5";
import HomeComponents3 from "@components/HomeComponents/HomeComponents3";
import ValuesComponent1 from "@components/ValuesComponents/ValuesComponent1";

const Home = () => {
  return (
    <div>
      {/* <ServicesComponent1
        imageLaptop={"/assets/images/home-banner.png"}
        imageTab={"/assets/images/home-banner-tablet.png"}
        imageMobile={"/assets/images/home-banner-mobile.png"}
      /> */}
      <HomeComponent5 />
      <HomeComponent2
        heading={"Welcome to VPool"}
        imagePath={"/assets/images/home-section1.png"}
        imgPosition={2}
        text={
          "Your trusted partner in smart commuting.Join our carpooling app for cost-effective, eco-friendly travel. Connect with responsible riders, reduce costs, and lower your carbon footprint. Experience smarter, greener commuting today."
        }
        link="/about-us"
      />
      <HomeComponent4
        heading={"Our Services"}
        text={
          "At VPool, we aim to make travel sustainable and affordable with reliable carpooling. Discover our mission, people, and services benefiting users and the environment."
        }
        imagePath={"/assets/images/home-section2.png"}
        imgPosition={1}
        link="/services"
      />
      <HomeComponent2
        heading={"Dedicated Carpoolers"}
        text={
          "Our carpoolers ensure safety, reliability, and convenience for all passengers. They are the backbone of VPool, committed to making your commute comfortable and eco-friendly."
        }
        imagePath={"/assets/images/home-section3.png"}
        imgPosition={2}
        link="/safety"
      />
      <ValuesComponent1 />
      <HomeComponents3 />
    </div>
  );
};

export default Home;
