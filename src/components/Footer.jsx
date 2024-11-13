import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className=" max-w-7xl mx-auto ">
      <div className=" border-t-2 container mx-auto  space-y-2 flex flex-col items-center justify-center mt-0 md:space-y-0">
        <div className="mt-2 space-x-6   py-2 flex">
          <a href="" aria-label="Facebook">
            <RiFacebookFill size={20} />
          </a>
          <a href="">
            <RiTwitterFill size={20} />
          </a>
          <a href="">
            <RiInstagramFill size={20} />
          </a>
          <a href="">
            <RiLinkedinFill size={20} />
          </a>
        </div>
        <div className="text-sm py-2 mb-1">
          © {new Date().getFullYear()} vastu. All rights reserved .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
