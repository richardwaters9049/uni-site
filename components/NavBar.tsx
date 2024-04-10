import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/header_logo_image.png";
import { MdSupervisorAccount } from "react-icons/md";

const NavBar = () => {
    return (
        <section>
            <div className="nav-container">
                <div className="navbar p-4 bg-white flex flex-row justify-evenly items-center text-base text-darkBlue tracking-widest">
                    <Link href="/">
                        <Image src={logo} alt="Logo" width={150} height={150}></Image>
                    </Link>
                    <Link href="courses">Courses</Link>
                    <Link href="/discover">Discover</Link>
                    <Link href="/support">Support</Link>
                    <Link href="/employers">Employers</Link>
                    <Link href="/moodle">Moodle</Link>
                    <Link href="/contact">Contact</Link>
                    {/* <div className="login-container flex flex-row justify-center items-center gap-2 border-l-4 border-primary px-4"> */}
                    {/* <MdSupervisorAccount className="text-2xl" /> */}
                    <Link href="/login">Login</Link>
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
};

export default NavBar;
