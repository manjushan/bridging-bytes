import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      {/* Hero Image */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src="/images/hero-home.jpg"
          alt="Children reading books"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white text-center px-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bringing Stories to Children Across India
          </motion.h1>
        </div>
      </div>

      {/* Mission Text */}
      <motion.div
        className="text-center max-w-3xl mx-auto px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-lg text-gray-700">
          “Books Beyond Borders is a community initiative to give retired Bay Area books a new life in the hands of underprivileged children in India. We believe books spark imagination, creativity, and joy.”We collect free books from US public libraries and send them to orphanages in India, giving children access to knowledge and imagination.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/get-involved" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Get Involved</a>
          <a href="/donate" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Donate</a>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;

