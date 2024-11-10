// src/app/about/page.tsx

import Navbar from "../components/Navbar";
import Image from "next/image";
import profileImage from "../assets/images/rabi-hassan.png"; // Replace with actual path
import genAIImage from "../assets/images/genai.png"; // Replace with actual path
import softwareEngImage from "../assets/images/software-engr.jpg"; // Replace with actual path
import cloudComputingImage from "../assets/images/cloud-computing.png"; // Replace with actual path
import Link from "next/link";

const About = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Section */}
      <div className="relative h-[100vh] overflow-hidden text-white flex items-center justify-center">
        {/* Background Video */}
        <video
          src="/videos/CloudComputing.mp4" // Adjust path if needed
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay for Navbar and Content */}
        <div className="absolute top-0 left-0 w-full container mx-auto px-4 z-20">
          <Navbar />
        </div>

        {/* Text Overlay */}
        <div className="text-center z-30 ">
          <h1 className="text-4xl md:text-5xl font-bold">
            Web Solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl px-1.5 text-gray-300">
            Building seamless user experiences through modern web technologies,
            <br /> responsive design, and efficient full stack development.
          </p>
          <Link href="https://github.com/M-Rabi-Hasan?tab=repositories">
            <button className="mt-6 px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-black">
              Learn More
            </button>
          </Link>
        </div>

        {/* Optional Overlay for Darkening the Video Background */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      </div>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={profileImage}
            alt="About Fazeel Ahmed"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-yellow-500 uppercase font-semibold mb-2">
            About Rabi Hassan
          </h3>
          <h2 className="text-3xl font-bold mb-4">My Journey & Expertise</h2>
          <p className="mb-4 text-gray-500">
            With a dedication to crafting efficient and dynamic web
            applications, I specialize in full stack development, from frontend
            design to backend infrastructure. My journey is rooted in a passion
            for technology and problem-solving.
          </p>
          <p className="text-gray-500">
            Leveraging frameworks like React, Next.js, and Node.js, I aim to
            deliver seamless and robust user experiences. My expertise lies in
            building responsive and scalable solutions tailored to meet diverse
            client needs.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-yellow-500 uppercase font-semibold mb-2">
            My Expertise
          </h4>
          <h2 className="text-3xl font-bold mb-4">Areas of Specialization</h2>
          <p className="mb-8 text-gray-500">
            My skills in full-stack development, web design, and software
            engineering enable me to create seamless, responsive, and scalable
            applications.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Expertise Item 1 */}
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md overflow-hidden">
              <Image
                src={genAIImage}
                alt="Infrastructure Automation"
                className="w-full h-40 object-cover"
              />
              <h3 className="text-xl font-bold mt-4 text-blue-700">
                Full Stack Web Development
              </h3>
              <p className="mt-2 text-gray-500">
                Expert in building robust and dynamic web applications using
                modern frameworks like React, Next.js, Node.js, and Express.
              </p>
            </div>
            {/* Expertise Item 2 */}
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md overflow-hidden">
              <Image
                src={softwareEngImage}
                alt="Continuous Integration/Continuous Deployment"
                className="w-full h-40 object-cover"
              />
              <h3 className="text-xl font-bold mt-4 text-blue-700">
                Responsive Design & UI/UX
              </h3>
              <p className="mt-2 text-gray-500">
                Proficient in creating visually appealing and user-friendly
                interfaces that adapt seamlessly to various devices and screen
                sizes.
              </p>
            </div>
            {/* Expertise Item 3 */}
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md overflow-hidden">
              <Image
                src={cloudComputingImage}
                alt="Cloud Computing & DevOps"
                className="w-full h-40 object-cover"
              />
              <h3 className="text-xl font-bold mt-4 text-blue-700">
                API Development & Integration
              </h3>
              <p className="mt-2 text-gray-500">
                Experienced in building and integrating RESTful APIs, ensuring
                efficient data handling and seamless communication between
                services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
