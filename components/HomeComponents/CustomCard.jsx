import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CustomCard = ({ image, heading, text, blogSlug }) => {
  const router = useRouter();
  return (
    <div className="max-w-[400px]">
      <div className="card-default w-full inline-block rtl:hidden card-col card_image px-2 my-5 rtl:text-right">
        <div className="image card-image flex mb-5 rounded-[28px] overflow-hidden transitionFix rtl:flex-row-reverse w-fit">
          <Image
            src={image}
            alt={heading}
            width={315}
            height={300}
            className="object-contain transition-transform transform hover:scale-110 duration-300 ease-in-out"
            loading="lazy"
          />
        </div>
        <div className="w-full flex flex-col lg:px-3">
          <h3 className="text-2xl max-sm:text-xl font-text text-[#2D2E2E] mb-6 max-sm:mb-2 font-[700]">
            {heading}
          </h3>
          <div className="card-description w-full leading-6 mt-2 h-full mb-6 text-base font-medium font-text text-[#2D2E2E]">
            <p>{text}</p>
          </div>
          <div className="flex w-fit flex-wrap">
            <span className="mr-2 mb-2">
              <button
                className="button max-w-max rtl:ml-auto btn-secondary btn-small font-text text-[#2D2E2E] bg-customOrange "
                title="Read more"
                onClick={() => router.push(`/blog/${blogSlug}`)}
              >
                Read more
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
