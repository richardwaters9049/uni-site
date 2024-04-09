import Image from "next/image";
import NavBar from "@/components/NavBar";
import { Josefin_Sans } from "next/font/google";


// import Button from "@/components/Button";
// import onlineEd from "@/public/images/online-ed.jpg";
// import { url } from "inspector";


export default function Home() {
  return (
    <main>
      <NavBar />
      <section>
        <h1 className="text-3xl tracking-widest">Education Made Easy</h1>
      </section>
    </main>
  );
}
