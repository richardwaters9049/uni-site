import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <section>
            <div className="nav-container">
                <div className="navbar p-5 bg-white flex justify-between text-2xl text-darkBlue tracking-widest">
                    <Link href="/">Logo</Link>
                    <Link href="courses">Courses</Link>
                    <Link href="/discover">Discover</Link>
                    <Link href="/support">Support</Link>
                    <Link href="/employers">Employers</Link>
                    <Link href="/moodle">Moodle</Link>
                </div>
            </div>
        </section>
    )
}

export default NavBar
