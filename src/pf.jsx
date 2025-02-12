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
      <motion.section className="text-center py-20"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border-4 border-gray-700"
          animate={{ rotate: [0, 360] }}
          //transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />
        <motion.h1 
          className="text-5xl font-bold"
          whileHover={{ scale: 1.1 }}
        >Pavan Naga Sai</motion.h1>
        <p className="text-xl text-gray-400 mt-2">Full-Stack Developer | React | Node.js</p>
        <motion.button
          onClick={handleLogout}
          className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          Logout
        </motion.button>
      </motion.section>

      {/* About Section */}
      <motion.section className="py-10 max-w-3xl mx-auto"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold">About Me</h2>
        <motion.p className="text-gray-400 mt-4" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
        I am a passionate full-stack developer with expertise in modern web technologies like React, Node.js, and Firebase. I love building interactive, user-friendly applications that solve real-world problems. With a strong foundation in both front-end and back-end development, I enjoy creating seamless digital experiences.

I have a keen interest in learning and staying updated with the latest industry trends. Whether it’s optimizing performance, improving UI/UX, or integrating cutting-edge features, I am always eager to take on new challenges. My projects showcase my ability to work with various frameworks, databases, and cloud technologies.

Beyond coding, I enjoy collaborating with teams, contributing to open-source projects, and sharing my knowledge with others. When I’m not programming, you can find me exploring new tech, working on side projects, or engaging with the developer community.
        </motion.p>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="py-10 max-w-4xl mx-auto"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[1, 2, 3, 4].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 p-4 rounded-lg"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <img src={`/project${project}.jpg`} alt={`Project ${project}`} className="w-full h-40 object-cover rounded mb-2" />
              <h3 className="text-xl font-medium">Project Pavan Kalyan{project}</h3>
              <p className="text-gray-400">Description of the project.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section className="py-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="text-gray-400 mt-4">Let's connect! Reach me at: </p>
        <motion.div className="flex justify-center gap-4 mt-4"
          whileHover={{ scale: 1.1 }}
        >
          <a href="#" className="text-blue-400 hover:underline">LinkedIn</a>
          <a href="#" className="text-blue-400 hover:underline">GitHub</a>
          <a href="#" className="text-blue-400 hover:underline">Email</a>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
