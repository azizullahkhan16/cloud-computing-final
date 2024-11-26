import Image from "next/image";

const ServicesComponent1 = ({ imageMobile, imageTab, imageLaptop }) => {
  return (
    <section className="hero mb-7 mt-2 lg:mb-16 hero-slider">
      <div className="w-full container-xl xxl:px-0">
        <div className="hero-slider-cont overflow-hidden justify-between items-center rounded-lg lg:flex-row lg:rounded-3xl relative">
          <div className="max-sm:h-[265px] overflow-hidden flex justify-end w-full rounded-lg lg:rounded-3xl">
            <picture className="image sm:hidden block rounded-lg lg:rounded-3x w-full">
              <Image
                src={imageMobile}
                alt="banner pic"
                width={558}
                height={398}
                loading="lazy"
                className="h-full w-full"
              />
            </picture>
            <picture className="image hidden sm:block md:hidden rounded-lg lg:rounded-3xl w-full">
              <Image
                src={imageTab}
                alt="service pic"
                width={1092}
                height={600}
                loading="lazy"
                className="h-full w-full"
              />
            </picture>
            <picture className="image hidden md:block rounded-lg lg:rounded-3xl w-full">
              <Image
                src={imageLaptop}
                alt="service pic"
                width={1965}
                height={809}
                loading="lazy"
                className="h-full w-full"
              />
            </picture>
          </div>
          {/* {hasButton && (
            <a
              className="button max-w-max rtl:ml-auto absolute transition-transform btn-primary btn-normal bottom-4 xs:bottom-8 left-4 xs:left-8 lg:left-16"
            >
              Sign In
            </a>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent1;
