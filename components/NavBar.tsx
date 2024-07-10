import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/header_logo_image.png";

/**
 * NavBar component renders the navigation bar with links to different pages of the website.
 *
 * @returns {JSX.Element} The rendered NavBar component.
 */
const NavBar = () => {
    return (
        // Outer section container
        <section>
            {/* Navigation container */}
            <div className="nav-container">
                {/* Navigation bar */}
                <div className="navbar p-4 bg-white flex flex-row justify-evenly items-center text-base text-darkBlue tracking-widest">
                    {/* Logo link */}
                    <Link href="/">
                        <Image src={logo} alt="Logo" width={150} height={150}></Image>
                    </Link>
                    {/* Courses link */}
                    {<Link href="/dashboard" className="border-b-orange-400">Dashboard</Link>}
                    <Link href="/courses" className="border-b-orange-400">Courses</Link>
                    {/* Discover link */}
                    <Link href="/discover">Discover</Link>
                    {/* Support link */}
                    <Link href="/support">Support</Link>
                    {/* Employers link */}
                    <Link href="/employers">Employers</Link>
                    {/* Moodle link */}
                    <Link href="/moodle">Moodle</Link>
                    {/* Contact link */}
                    <Link href="/contact">Contact</Link>
                    {/* Login link */}
                    <Link href="/login">Login</Link>
                </div>
            </div>
        </section>
    );
};

export default NavBar;
