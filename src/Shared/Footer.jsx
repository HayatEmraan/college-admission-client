import React from "react";
import logo from "../assets/logo/logo.png";
import {
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-[#414d61] text-white">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <img src={logo} className="h-12" alt="" />
          <div className="flex items-center gap-4">
            <BsFacebook className="h-5 w-5 text-white" />
            <BsTwitter className="h-5 w-5 text-white" />
            <BsYoutube className="h-5 w-5 text-white" />
            <BsInstagram className="h-5 w-5 text-white" />
            <BsTiktok className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="py-4">
          <h1>
            College Admission Center, Bruce Zone 2049 Bangladesh | +68 2 6241
            9101 | ABN 43 777 888 999 | CRICOS 07413K | TEQSA Provider ID:
            PRV720599 (CAC)
          </h1>
          <div className="flex gap-4 text-[#92d6e3] mt-2">
            <h1>Contact</h1>
            <h1 className="text-white">|</h1>
            <h1>Copyright</h1>
            <h1 className="text-white">|</h1>
            <h1>Privacy</h1>
            <h1 className="text-white">|</h1>
            <h1>Terms</h1>
          </div>
        </div>
        <hr />
        <div className="py-4">
          <h1>
            UC acknowledges the Ngunnawal people, traditional custodians of the
            lands where Bruce campus is situated. We wish to acknowledge and
            respect their continuing culture and the contribution they make to
            the life of Canberra and the region. We also acknowledge all other
            First Nations Peoples on whose lands we gather.
          </h1>
        </div>
        {/* Practice copyright  */}
        <h1 className="text-center">
          Copyright © 2022 College Admission Center, All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
