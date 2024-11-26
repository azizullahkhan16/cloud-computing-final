"use client";

import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";
import DownloadAppModal from "@modals/DownloadAppModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [downloadAppModal, setDownloadAppModal] = useState(false);

  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.closest(".dropdown-item")
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Row justify="center">
        <Col xs={22}>
          <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 header">
            <div className="max-w-[1250px] my-0 mx-auto flex flex-wrap items-center justify-between py-2 max-[1364px]:mx-[4%]">
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse no-underline hover:text-inherit"
              >
                <Image
                  width={100}
                  height={22}
                  loading="lazy"
                  src={"/assets/images/logo.png"}
                  alt="VPool Logo"
                />
              </Link>
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  className="button btn-secondary font-text text-textColor bg-customDarkGreen"
                  onClick={() => setDownloadAppModal(true)}
                >
                  Download the app
                </button>
                <button
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-sticky"
                  // aria-expanded={isMenuOpen}
                  onClick={toggleMenu}
                  ref={menuRef}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`items-center justify-start ${
                  isMenuOpen ? "block" : "hidden"
                } w-full md:flex md:w-auto md:order-1 md:ml-[-20px] lg:ml-[-260px] xl:ml-[-500px]`}
                id="navbar-sticky"
                ref={menuRef}
              >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                  <li>
                    <Link
                      href="/services"
                      className="block py-2 px-4 text-[#2D2E2E] text-base font-[500] font-text md:p-0 hover:text-[#2D2E2E] header-link relative"
                      aria-current="page"
                      onClick={handleMenuItemClick}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="relative">
                    <button
                      id="dropdownNavbarLink"
                      onClick={toggleDropdown}
                      className="flex items-center justify-between w-full py-2 px-4 md:border-0 md:p-0 md:w-auto text-[#2D2E2E] text-base font-[500] font-text hover:text-[#2D2E2E] header-link relative"
                      ref={dropdownRef}
                    >
                      About us{" "}
                      <svg
                        className="w-3 h-3 ms-2.5 text-[#2D2E2E]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                      <div
                        id="dropdownNavbar"
                        className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 "
                          aria-labelledby="dropdownNavbarLink"
                        >
                          <li>
                            <Link
                              href="/about-us"
                              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2D2E2E] text-[#2D2E2E] font-text font-[500] dropdown-item"
                              onClick={handleMenuItemClick}
                            >
                              About us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/our-social-impact"
                              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2D2E2E] text-[#2D2E2E] font-text font-[500] dropdown-item"
                              onClick={handleMenuItemClick}
                            >
                              Our social impact
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/our-values"
                              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2D2E2E] text-[#2D2E2E] font-text font-[500] dropdown-item"
                              onClick={handleMenuItemClick}
                            >
                              Our values
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/careers"
                              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2D2E2E] text-[#2D2E2E] font-text font-[500] dropdown-item"
                              onClick={handleMenuItemClick}
                            >
                              Careers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blog"
                              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2D2E2E] text-[#2D2E2E] font-text font-[500] dropdown-item"
                              onClick={handleMenuItemClick}
                            >
                              Blogs
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <Link
                      href="/safety"
                      className="block py-2 px-4 text-[#2D2E2E] text-base font-[500] font-text md:p-0 hover:text-[#2D2E2E] header-link relative"
                      onClick={handleMenuItemClick}
                    >
                      Safety
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="block py-2 px-4 text-[#2D2E2E] text-base font-[500] font-text md:p-0 hover:text-[#2D2E2E] header-link relative"
                      onClick={handleMenuItemClick}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
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

export default Header;
