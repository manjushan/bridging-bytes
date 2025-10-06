import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="py-20 max-w-3xl mx-auto px-6 text-center">
      <motion.img
        src="/images/hero-home.jpg"
        alt="Library"
        className="rounded-lg shadow-lg w-full mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-6">Email us at: <a href="mailto:info@booksbeyondborders.org" className="text-blue-600 underline">info@booksbeyondborders.org</a></p>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded-lg border border-gray-300"/>
        <input type="email" placeholder="Your Email" className="p-3 rounded-lg border border-gray-300"/>
        <textarea placeholder="Your Message" className="p-3 rounded-lg border border-gray-300"/>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

