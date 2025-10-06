import { motion } from "framer-motion";

function Donate() {
  return (
    <div className="py-20 bg-gray-50">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Support Books Beyond Borders
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your donation helps us ship free library books from the US to children
          in orphanages across India.
        </motion.p>
      </div>

      {/* Donate Buttons */}
      <motion.div
        className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <a
          href="https://www.paypal.com/donate?hosted_button_id=YOUR_PAYPAL_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Donate with PayPal
        </a>

        <a
          href="https://buy.stripe.com/test_YOUR_STRIPE_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Donate with Stripe
        </a>
      </motion.div>

      {/* Images Section */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <img
          src="/images/books-donation-1.jpg"
          alt="Books Donation"
          className="rounded-lg shadow-lg w-full object-cover h-60"
        />
        <img
          src="/images/kids-reading-1.jpg"
          alt="Kids Reading"
          className="rounded-lg shadow-lg w-full object-cover h-60"
        />
        <img
          src="/images/volunteers-1.jpg"
          alt="Volunteers Packing"
          className="rounded-lg shadow-lg w-full object-cover h-60"
        />
      </motion.div>

      {/* Call to Action at the Bottom */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <p className="text-lg text-gray-700 mb-4">
          Every contribution makes a difference. Help us bring books and smiles
          to children who need them the most.
        </p>
        <a
          href="/donate"
          className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
        >
          Donate Now
        </a>
      </motion.div>
    </div>
  );
}

export default Donate;

