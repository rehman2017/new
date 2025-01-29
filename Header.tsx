import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-4 ">
      {/* Logo */}
      <div className="w-11 h-11">
        <Image src="/rehman.jpeg" width={300} height={300} alt="rehman" className="sm:w-[185px] sm:h-[41px] rounded-full w-11 h-11" />
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex justify-between items-center text-sm font-poppins ">
        <ul className="flex items-center space-x-6">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 text-lg">
        <MdPersonOutline />
        <CiSearch />
        <GoHeart />
        <AiOutlineShoppingCart />
      </div>

      {/* Mobile Menu - Hamburger Icon */}
      <div className="lg:hidden flex items-center space-x-4">
        {/* Add a hamburger icon for mobile */}
        <Button className="text-xl">☰</Button>
      </div>
    </div>
  );
}
