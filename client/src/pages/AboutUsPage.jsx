import React from "react";

const AboutUsPage = () => {
  return (
    <section className="p-8 bg-gray-100">
      {/* Introduction */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-indigo-600">About Us</h1>
        <p className="mt-4 text-lg text-gray-700">
          Welcome to E-Sukad! We bring you the latest updates regarding e-sports events in USM. <br />
          You can refer to the E-Sukad system for the latest news, match schedules, team statistics, and team information!
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-600">Our Mission</h2>
        <p className="mt-4 text-gray-700">
          Our mission is to create a seamless, inclusive platform that supports and enhances e-sports 
          at Universiti Sains Malaysia. We aim to empower students, foster talent, and encourage collaboration by 
          offering real-time analytics, easy-to-use tools, and engaging features that inspire healthy competition 
          and community spirit. Through our e-sports system, we strive to cultivate a supportive environment where 
          students can hone their skills, build connections, and represent USM in the evolving world of e-sports.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-600 mt-8">Our Vision</h2>
        <p className="mt-4 text-gray-700">
          "To establish Universiti Sains Malaysia as a hub of e-sports excellence, where students, teams, and fans can thrive in a dynamic 
          and supportive ecosystem. Our e-sports system aspires to unite the USM community through 
          innovation and competition, providing real-time insights, collaborative opportunities, 
          and accessible gaming experiences that empower students to develop skills, foster teamwork, 
          and celebrate the spirit of e-sports. Through this platform, we aim to elevate USM’s 
          role in shaping the future of e-sports both regionally and globally."
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-600">Meet Our Team</h2>
        <p className="mt-4 text-gray-700">
          Our team is a group of computer science students with a passion for making our vision a reality.
        </p>

        <div className="flex flex-wrap mt-6 justify-center">
          {/* Team Member 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center min-h-[180px] border-2 border-gray-300">
              <img
                src="[TeamMember1ImageURL]"
                alt="Muhd Umar"
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-gray-300"
              />
              <h3 className="text-lg font-semibold whitespace-normal">Muhd Umar</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center min-h-[180px] border-2 border-gray-300">
              <img
                src="[TeamMember2ImageURL]"
                alt="Muhd Amar"
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-gray-300"
              />
              <h3 className="text-lg font-semibold whitespace-normal">Muhd Amar</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center min-h-[180px] border-2 border-gray-300 ">
              <img
                src="/about/arif.jpg"
                alt="Arif Haziq"
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-2 border-gray-300"
              />
              <h3 className="text-lg font-semibold whitespace-normal">Arif Haziq</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center min-h-[180px] border-2 border-gray-300">
              <img
                src="[TeamMember4ImageURL]"
                alt="Muhd Rusydi"
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-gray-300"
              />
              <h3 className="text-lg font-semibold whitespace-normal">Muhd Rusydi</h3>
              <p className="text-gray-600">QA Engineer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-indigo-600">Contact Us</h2>
        <p className="mt-4 text-gray-700">
          Have any questions? Feel free to reach out to us at{" "}
          <a href="mailto:arifhaziq@student.usm.my" className="text-indigo-600">
            arifhaziq@student.usm.my
          </a>.
        </p>
        <p className="mt-2 text-gray-700">
          Or call us at{" "}
          <a href="tel:+60143624132" className="text-indigo-600">
            +60 14-362 4132
          </a>.
        </p>
      </div>
    </section>
  );
};

export default AboutUsPage;
