import React from "react";
import { Link } from "react-router-dom";
import {navLink} from "../../data"
import {Icon } from "@iconify/react"
import Logo from "../../assets/logo-aopartners.png"



const Footer = () => {
  return (
    <footer class="bg-white rounded-lg m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Logo}
              class="h-8"
              alt="AO Partenrs Logo"
            />
            
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">
              AO Partners
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
          {
              
              navLink.map((link) => (
                <li>
                <Link to={link.link} key={link.id} className="hover:underline me-4 sm:me-0 sm:ms-4 md:ms-6" >
                  {link.pageName}
                </Link>
                </li>
              ))
              
            }
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" class="hover:underline">
              AO Partners
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/profile.php?id=100090569378012&mibextid=LQQJ4d"
              class="text-gray-500 hover:text-gray-900 "
            >
              <Icon icon="fa-brands:facebook" />
              <span class="sr-only">Facebook page</span>
            </a>

            <a
              href="#"
              class="text-gray-500 hover:text-gray-900  ms-5"
            >
              <Icon icon="fa6-brands:x-twitter" />
              <span class="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900  ms-5"
            >
             <Icon icon="ri:instagram-fill" />
              <span class="sr-only">Instagram page</span>
            </a>
            <a
              href="mailto:"
              class="text-gray-500 hover:text-gray-900  ms-5"
            >
              <Icon icon="ic:round-mail" />
              <span class="sr-only">Mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
