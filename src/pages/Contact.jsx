import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 className="text-3xl font-bold text-blue-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Contact & Partnerships
        </motion.h2>
        <p className="mt-4 text-gray-700">
          To partner with Bridging Bytes (libraries, senior centers, or community groups), email us at{" "}
          <a className="text-blue-600 underline" href="mailto:bridgingbytes@gmail.com">
            bridgingbytes@gmail.com
          </a>
          .
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-white shadow">
            <h4 className="font-semibold">Library Partnerships</h4>
            <p className="mt-2 text-gray-700">We collaborate with local libraries in Cupertino and Santa Clara County to host monthly sessions.</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow">
            <h4 className="font-semibold">Volunteer Info</h4>
            <p className="mt-2 text-gray-700">High school volunteers receive training, language matching, and leadership roles to run sessions.</p>
          </div>
        </div>

        <div className="mt-8">
          <img src="https://source.unsplash.com/featured/?senior,phone,help" alt="contact" className="w-full rounded-lg shadow" />
          <p className="mt-3 text-sm text-gray-500">Based in Cupertino, CA</p>
        </div>
      </div>
    </div>
  );
}

