import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import profilePic from "./assets/pavan pr0.jpg";

export default function Portfolio() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <motion.div
      className="bg-gray-900 text-white min-h-screen p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <motion.section
        className="text-center py-20"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border-4 border-gray-700"
        />
        <motion.h1
          className="text-5xl font-bold"
          whileHover={{ scale: 1.1 }}
        >
          Pavan Naga Sai
        </motion.h1>
        <p className="text-xl text-gray-400 mt-2">
          Full-Stack Web Developer
        </p>

        <motion.button
          onClick={handleLogout}
          className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Logout
        </motion.button>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-10 max-w-3xl mx-auto"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="text-gray-400 mt-4 leading-relaxed">
          I am a passionate <b>Full-Stack Web Developer</b> with strong interest in
          designing and developing complete web applications from scratch.
          I enjoy working on both frontend and backend technologies and love
          turning ideas into real-world applications.
          <br /><br />
          I have good problem-solving skills, teamwork experience, and leadership
          qualities. I always try to improve my coding skills and stay updated
          with new technologies. My goal is to build scalable, secure, and
          user-friendly web applications.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-10 max-w-4xl mx-auto"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-center">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "DBMS",
            "Team Leadership",
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg font-semibold"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-10 max-w-4xl mx-auto"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.div
            className="bg-gray-800 p-5 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-medium">
              Tic Tac Toe Game
            </h3>
            <p className="text-gray-400 mt-2">
              Developed an interactive Tic Tac Toe game using HTML, CSS, and JavaScript.
              Implemented game logic, player turn handling, win/draw detection, and a
              responsive UI for smooth user experience.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-5 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-medium">
              Portfolio Website
            </h3>
            <p className="text-gray-400 mt-2">
              Designed and built an animated personal portfolio using React,
              Tailwind CSS, and Framer Motion to showcase skills and projects.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="text-gray-400 mt-4">
          Let’s connect and build something amazing 🚀
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-blue-400 hover:underline">LinkedIn</a>
          <a href="#" className="text-blue-400 hover:underline">GitHub</a>
          <a href="#" className="text-blue-400 hover:underline">Email</a>
        </div>
      </motion.section>
    </motion.div>
  );
}


