"use client";

import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "@/public/images/animation.json";
import logoImage from "@/public/images/header_logo_white.png";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { MdOutlineGridView } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";
export default function Home() {
  return (
    <main className="bg-darkBlue w-full h-screen">
      <section className="flex justify-evenly items-center gap-5 p-8 bg-darkBlue ">
        <div className="search-section flex flex-col justify-center gap-10">
          <Image
            className="py-6"
            src={logoImage}
            alt="Logo"
            width={500}
            height={500}
          ></Image>
          <div className="copy-container flex flex-col gap-6">
            <h1 className="text-3xl tracking-widest text-white">
              Flexible Online Education
            </h1>
            <h3 className="text-white text-xl tracking-widest">
              Find the right course for you and learn at your own pace.
            </h3>

            <p className="text-white text-xl tracking-widest">
              Enter phrases such as &apos;engineering,&apos;
              &apos;business,&apos; or &apos;OTHM&apos; - Click &apos;Search
              Courses&apos;.
            </p>
            <p className="text-white text-xl tracking-widest">
              Click &apos;View All&apos; to see all the courses we have to
              offer.
            </p>
          </div>

          <div className="input-container flex justify-start items-center gap-6">
            <input
              type="search"
              name="search"
              id="search"
              className="bg-white rounded-lg w-1/2 h-10 p-6 tracking-widest"
              placeholder="Search.."
            />
            <Button className="p-6 text-2xl w-1/2 bg-uniPink">
              <p className="px-2">View All</p>
              <MdOutlineGridView />
            </Button>
          </div>
          <div className="info-div flex gap-6">
            <Button className="p-6 text-2xl w-1/2 bg-yellow-500">
              <p className="px-2">Info Request</p> <IoInformationCircle />
            </Button>

            <Button className="p-6 text-2xl w-1/2 bg-uniLightBlue">
              <p className="px-2">Course Application</p> <FaSearch />
            </Button>

          </div>
        </div>

        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: 600, height: 600 }}
        />
      </section>
    </main>
  );
}

