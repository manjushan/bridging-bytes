import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src="https://source.unsplash.com/featured/?teens,seniors,technology"
          alt="Teens helping seniors with technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Bridging Bytes
            </h1>
            <p className="mt-3 text-lg text-white/90">
              Connecting generations through technology
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link to="/join" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Join a Session
              </Link>
              <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100">
                Partner with Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission */}
      <motion.section
        className="py-12 px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-blue-600">Our Mission</h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700">
          Bridging Bytes empowers senior citizens with practical digital skills — social media, messaging apps, and AI tools — taught by local high
          school volunteers in the language they're comfortable with.
        </p>
      </motion.section>

      {/* How it Works */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-white shadow">
            <h3 className="font-semibold text-lg">Intro Sessions</h3>
            <p className="mt-2 text-gray-600">Hands-on basics: WhatsApp, Instagram, and making simple posts.</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow">
            <h3 className="font-semibold text-lg">Q&A Hours</h3>
            <p className="mt-2 text-gray-600">Bring your phone — our teens walk you through real problems step-by-step.</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow">
            <h3 className="font-semibold text-lg">Language Support</h3>
            <p className="mt-2 text-gray-600">Sessions available in Malayalam, Telugu, Hindi, Tamil and English.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section className="py-12 px-6 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <h3 className="text-xl font-semibold text-blue-600">Want to help or learn?</h3>
        <p className="mt-3 text-gray-700">We meet at local libraries across Cupertino and Santa Clara County. Volunteers and seniors welcome.</p>
        <div className="mt-6">
          <Link to="/join" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Sign Up</Link>
        </div>
      </motion.section>
    </div>
  );
}

