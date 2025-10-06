import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.img
          src="https://source.unsplash.com/featured/?library,community,technology"
          alt="Community learning"
          className="w-full rounded-lg shadow"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold text-blue-600">About Bridging Bytes</h2>
          <p className="mt-4 text-gray-700">
            Bridging Bytes was started by local teens who wanted to help the seniors in our community use technology safely and confidently. We partner with libraries to run free, friendly sessions that focus on real tasks seniors ask about.
          </p>

          <h3 className="mt-6 font-semibold text-lg">What We Believe</h3>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
            <li>Learning is better when it’s local and personal.</li>
            <li>Language and patience matter — we teach in the languages seniors prefer.</li>
            <li>Small, consistent sessions build confidence over time.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

