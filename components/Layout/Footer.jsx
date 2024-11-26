"use client";

import DownloadAppModal from "@modals/DownloadAppModal";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [downloadAppModal, setDownloadAppModal] = useState(false);
  return (
    <>
      <Row
        justify="center"
        className="mt-10 mb-8 px-5 lg:px-4 lg:mb-12 lg:mt-24 footer"
      >
        <Col xs={22} className="max-w-[1365px]">
          <div className="flex flex-col text-center lg:justify-between lg:flex-row lg:text-left">
            <div className="order-1 flex flex-col w-full lg:items-start lg:w-60">
              <div className="lg:mt-1 mb-8 lg:ml-2">
                <Link
                  href="/"
                  className="inline-flex nuxt-link-exact-active nav-active"
                >
                  <Image
                    src={"/assets/images/logo.png"}
                    alt="vpool"
                    width={111.44}
                    height={22}
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="download-box">
                <div className="flex justify-center lg:justify-start">
                  <button onClick={() => setDownloadAppModal(true)}>
                    <Image
                      src="/assets/images/app-store.webp"
                      alt="app store Icon"
                      // layout="intrinsic"
                      width={137}
                      height={43}
                      loading="lazy"
                      className="object-contain"
                    />
                  </button>
                </div>
                <div className="flex justify-center lg:justify-start mt-5">
                  <button onClick={() => setDownloadAppModal(true)}>
                    <Image
                      src="/assets/images/google-play.webp"
                      alt="google play Icon"
                      // layout="intrinsic"
                      width={137}
                      height={43}
                      loading="lazy"
                      className="object-contain"
                    />
                  </button>
                </div>
                <div className="flex justify-center lg:justify-start mt-5">
                  <button onClick={() => setDownloadAppModal(true)}>
                    <Image
                      src="/assets/images/android.webp"
                      alt="Android Icon"
                      // layout="intrinsic"
                      width={137}
                      height={43}
                      loading="lazy"
                      className="object-contain"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center max-lg:flex-col order-2">
              <div className="order-3 w-full mt-12 lg:mt-0 lg:order-2 lg:w-fit lg:mr-32">
                <h2 className="text-xl font-semibold text-[#2dc6b0] lg:text-lg mb-8 font-text">
                  About us
                </h2>
                <ul>
                  <li className="mt-4">
                    <Link
                      href="/our-social-impact"
                      className="footer-link font-semibold text-base leading-4 relative hover:text-customDarkGreen font-text text-[#2D2E2E]"
                      title="Our social impact"
                    >
                      Our social impact
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="/services"
                      className="footer-link font-semibold text-base leading-4 relative hover:text-customDarkGreen font-text text-[#2D2E2E]"
                      title="services"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="/safety"
                      className="footer-link font-semibold text-base leading-4 relative hover:text-customDarkGreen font-text text-[#2D2E2E]"
                      title="Safety Features"
                    >
                      Safety features
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="/blog"
                      className="footer-link font-semibold text-base leading-4 relative hover:text-customDarkGreen font-text text-[#2D2E2E]"
                      title="Blog"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="order-3 w-full mt-12 lg:mt-0 lg:order-2 lg:w-fit lg:mr-32">
                <h2 className="text-xl font-semibold text-[#2dc6b0] lg:text-lg mb-8 font-text">
                  Join our team
                </h2>
                <ul>
                  <li className="mt-4">
                    <Link
                      href="/about-us"
                      className="footer-link font-semibold text-base leading-4 relative hover:text-customDarkGreen font-text text-[#2D2E2E]"
                      title="About us"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="/our-values"
                      className="footer-link font-semibold text-base leading-4 relative hover:text-customDarkGreen font-text text-[#2D2E2E]"
                      title="Our values"
                    >
                      Our values
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="/careers"
                      className="footer-link font-semibold text-base leading-4 relative hover:text-customDarkGreen font-text text-[#2D2E2E]"
                      title="Careers"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="order-3 w-full mt-12 lg:mt-0 lg:order-2 lg:w-fit">
                <h2 className="text-xl font-semibold text-[#2dc6b0] lg:text-lg mb-8 font-text">
                  Support
                </h2>
                <ul>
                  <li className="mt-4">
                    <Link
                      href="/contact-us"
                      className="footer-link font-semibold text-base leading-4 relative hover:text-customDarkGreen font-text text-[#2D2E2E]"
                      title="Contact Us"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="/why-vpool"
                      className="footer-link font-semibold text-base leading-4 relative hover:text-customDarkGreen font-text text-[#2D2E2E]"
                      title="Why VPool"
                    >
                      Why VPool
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-10 lg:flex-row lg:mt-14 lg:pt-5 lg:border-t">
            <div className="order-3 mt-16 flex items-center justify-center lg:mt-0 lg:order-1 lg:justify-start lg:w-4/12">
              <span className="footer-copyright text-xs text-center w-6/12 lg:w-full lg:text-left font-text text-[#2D2E2E]">
                All rights reserved. VPool © 2024
              </span>
            </div>
            <div className="order-2 flex mt-6 items-center justify-center lg:mt-0 lg:order-2 lg:w-6/12">
              <ul className="flex flex-wrap justify-center">
                <li className="m-2">
                  <Link
                    href="/terms-and-conditions"
                    className="footer-link text-xs font-semibold relative hover:text-customDarkGreen lg:font-normal font-text text-[#2D2E2E]"
                    title="Terms and Conditions"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li className="m-2">
                  <Link
                    href="/privacy-policy"
                    className="footer-link text-xs font-semibold relative hover:text-customDarkGreen lg:font-normal font-text text-[#2D2E2E]"
                    title="Privacy Policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-3 lg:w-4/12">
              <ul className="text-none flex justify-center lg:justify-end">
                <li className="block mx-5 lg:mx-0 lg:ml-7">
                  <Link href="/" className="block">
                    <Image
                      src="/assets/images/facebook.png"
                      alt="Facebook Icon"
                      // layout="intrinsic"
                      width={25}
                      height={25}
                      loading="lazy"
                      className="object-contain"
                    />
                  </Link>
                </li>
                <li className="block mx-5 lg:mx-0 lg:ml-7">
                  <Link href="/" className="block">
                    <Image
                      src="/assets/images/twitter.png"
                      alt="twitter Icon"
                      // layout="intrinsic"
                      width={25}
                      height={25}
                      loading="lazy"
                      className="object-contain"
                    />
                  </Link>
                </li>
                <li className="block mx-5 lg:mx-0 lg:ml-7">
                  <Link href="/" className="block">
                    <Image
                      src="/assets/images/linkedin.png"
                      alt="linkedin Icon"
                      // layout="intrinsic"
                      width={25}
                      height={25}
                      loading="lazy"
                      className="object-contain"
                    />
                  </Link>
                </li>
                <li className="block mx-5 lg:mx-0 lg:ml-7">
                  <Link href="/" className="block">
                    <Image
                      src="/assets/images/instagram.png"
                      alt="instagram Icon"
                      // layout="intrinsic"
                      width={25}
                      height={25}
                      loading="lazy"
                      className="object-contain"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      {downloadAppModal && (
        <DownloadAppModal
          downloadAppModal={downloadAppModal}
          setDownloadAppModal={setDownloadAppModal}
        />
      )}
    </>
  );
};

export default Footer;
