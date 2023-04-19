import Image from "next/image";
import Link from "next/link";

import HeroIMG from "../../public/hero.png";
export default function Home() {
  return (
    <main>
      <nav className="mx-auto container my-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">logo</h1>

          <ul className="flex items-center">
            <li className="mx-4 font-semibold">
              <Link href="#">Home</Link>
            </li>
            <li className="mx-4">
              <Link href="#">Category</Link>
            </li>
            <li className="mx-4">
              <Link href="#">Courses</Link>
            </li>
            <li className="mx-4">
              <Link href="#">Blog</Link>
            </li>
            <li className="mx-4 bg-purple py-2 px-4 rounded-full text-white font-semibold">
              <Link href="#">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>

      <header className="container mx-auto py-12 mb-8">
        <div className="wrapper grid grid-cols-2">
          <div className="content">
            <h2 className="text-orange font-semibold uppercase mb-4">
              15 Years complete
            </h2>
            <h1 className="capitalize font-bold text-5xl mb-6">
              An Investment in knowledge pays{" "}
              <span className="block text-salmon">the best interest</span>
            </h1>
            <p className="text-grey mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button className="bg-salmon py-2 px-6 rounded-full text-white shadow-lg">
              Apply Now
            </button>
          </div>
          <div className="image flex items-center justify-center">
            <Image className="w-auto h-64" src={HeroIMG} alt="Hero Image" />
          </div>
        </div>
      </header>

      <section className="bg-purple text-white text-center py-14">
        <div className="">
          <h2 className="text-3xl font-semibold mb-4">
            World's Largest Learning Platform
          </h2>
          <p className="mb-6">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="bg-white w-48 h-1 mx-auto mb-6 opacity-[0.5] rounded-full"></div>
        </div>

        <div className="flex justify-between container mx-auto">
          <div className="bg-salmon h-36 w-36  rounded-full flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-white px-2">9,500</h3>
            <p className="text-xl text-white text-center px-2">
              Success Stories
            </p>
          </div>
          <div className="bg-salmon h-36 w-36  rounded-full flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-white px-2">10,250</h3>
            <p className="text-xl text-white text-center px-2">
              Expert Instructor
            </p>
          </div>
          <div className="bg-salmon h-36 w-36  rounded-full flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-white px-2">15</h3>
            <p className="text-xl text-white text-center px-2">
              Years of discover
            </p>
          </div>
          <div className="bg-salmon h-36 w-36  rounded-full flex flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold text-white px-2">1,24,244</h3>
            <p className="text-xl text-white text-center px-2">
              Active Students
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div>
          <h1>Image</h1>
        </div>
        <div>
          <h2 className="font-semibold text-3xl mb-4">24/7 Student Support</h2>
          <p className="text-grey mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="bg-salmon py-2 px-6 rounded-full text-white shadow-lg">
            Read More
          </button>
        </div>
      </section>
    </main>
  );
}
