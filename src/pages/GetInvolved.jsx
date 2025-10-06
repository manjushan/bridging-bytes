import { motion } from "framer-motion";

function GetInvolved() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-6 text-center">
      <motion.img
        src="/images/get-involved.jpg"
        alt="Volunteers"
        className="rounded-lg shadow-lg w-full mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Get Involved</h2>
      <p className="text-lg text-gray-700 mb-6">
        You can make a difference! Help us by donating, volunteering, or partnering with us.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a href="/donate" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Donate</a>
        <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Volunteer</a>
        <a href="#" className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600">Partner</a>
      </div>
    </div>
  );
}

export default GetInvolved;

