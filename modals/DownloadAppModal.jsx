import { Modal } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const icons = [
  "/assets/images/facebook.png",
  "/assets/images/twitter.png",
  "/assets/images/linkedin.png",
  "/assets/images/instagram.png",
];

const CustomBox = ({ imagePath, setDownloadAppModal }) => {
  return (
    <li
      className="block mx-2 lg:mx-0 lg:ml-2"
      onClick={() => setDownloadAppModal(false)}
    >
      <Link href="/" className="block">
        <Image
          src={imagePath}
          alt="icon"
          width={30}
          height={30}
          loading="lazy"
          className="object-contain"
        />
      </Link>
    </li>
  );
};

const DownloadAppModal = ({
  downloadAppModal = false,
  setDownloadAppModal,
}) => {
  const [modalClassName, setModalClassName] = useState("");

  useEffect(() => {
    setModalClassName("custom-slide-enter");
  }, []);

  const handleCancel = () => {
    // Trigger the leave animation and close the modal after it completes
    setModalClassName("custom-slide-leave");
    setTimeout(() => {
      setDownloadAppModal(false);
    }, 300); // The timeout should match the duration of your leave animation
  };

  return (
    <div>
      <Modal
        centered
        open={downloadAppModal}
        footer={null}
        onCancel={handleCancel}
        className={modalClassName}
        transitionName="" // Disable default animations
        maskTransitionName="" // Disable default mask animation
      >
        <div className="flex justify-center items-center">
          <Image
            src={"/assets/images/stay-tuned.png"}
            width={300}
            height={300}
            loading="lazy"
            className="object-contain text-center"
          />
        </div>

        <p className="font-text text-base text-textColor text-center font-medium my-6">
          We are excited to announce that our mobile application is under
          development and will be launching soon. Stay tuned for more updates!
        </p>
        <ul className="text-none flex justify-center">
          {icons.map((imagePath, index) => (
            <CustomBox
              key={index}
              imagePath={imagePath}
              setDownloadAppModal={setDownloadAppModal}
            />
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default DownloadAppModal;
