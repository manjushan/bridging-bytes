import { useState } from "react";
import { motion } from "framer-motion";

export default function Join() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2 className="text-3xl font-bold text-blue-600 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Join Bridging Bytes
        </motion.h2>
        <p className="mt-4 text-center text-gray-700">
          Whether you’re a senior who wants hands-on help or a high school volunteer, we’d love to have you.
        </p>

        <div className="mt-8 p-6 rounded-lg bg-white shadow">
          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid gap-4"
            >
              <div>
                <label className="text-sm text-gray-700">I am a</label>
                <select className="mt-1 w-full rounded-lg border px-3 py-2">
                  <option>Senior (I want help)</option>
                  <option>Volunteer (High school student)</option>
                  <option>Library / Partner</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input className="mt-1 w-full rounded-lg border px-3 py-2" required />
              </div>

              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border px-3 py-2" required />
              </div>

              <div>
                <label className="text-sm text-gray-700">Phone (optional)</label>
                <input className="mt-1 w-full rounded-lg border px-3 py-2" />
              </div>

              <div>
                <label className="text-sm text-gray-700">How can we help / Volunteer interests?</label>
                <textarea className="mt-1 w-full rounded-lg border px-3 py-2" rows={4} />
              </div>

              <div className="flex justify-center">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Submit</button>
              </div>
            </form>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-xl font-semibold">Thanks — we received your info!</h3>
              <p className="mt-3 text-gray-700">We’ll be in touch at bridgingbytes@gmail.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

