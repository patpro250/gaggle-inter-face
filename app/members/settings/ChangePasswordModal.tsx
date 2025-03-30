import { motion } from "framer-motion";

export const ChangePasswordModal = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-xs"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-primary mb-4">
          Change your Password
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Old Password</label>
            <input
              type="password"
              className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Repeat Password</label>
            <input
              type="password"
              className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-300"
              required
            />
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              className="bg-red-400 py-2 text-white px-4 rounded-full hover:bg-red-500 transition duration-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark transition duration-300">
              Save
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};
