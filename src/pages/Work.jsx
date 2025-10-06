import { motion } from "framer-motion";

function Work() {
  const steps = [
    { title: "Collect Free Books", img: "/images/work-collect.jpg" },
    { title: "Sort & Pack", img: "/images/work-pack.jpg" },
    { title: "Ship to India", img: "/images/work-ship.jpg" },
    { title: "Distribute to Children", img: "/images/work-distribute.jpg" },
  ];

  return (
    <div className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <img src={step.img} alt={step.title} className="rounded-lg shadow-lg w-full h-48 object-cover" />
            <h3 className="mt-4 font-semibold text-lg">{step.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Work;

