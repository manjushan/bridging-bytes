import { motion } from "framer-motion";

function About() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
      <motion.img
        src="/images/about-volunteers.jpg"
        alt="Volunteers"
        className="w-full md:w-1/2 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
        <p className="text-lg text-gray-700">
          Books Beyond Borders connects free library books in the US with children in orphanages across India. Our mission is to spark joy, learning, and imagination for every child through access to books.
        </p>
      </motion.div>
    </div>
  );
}

export default About;

