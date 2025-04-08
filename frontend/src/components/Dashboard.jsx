import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-900 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl font-bold text-blue-400 mb-6"
        >
          Welcome to the Fraud Detection Banking System!
        </motion.h1>

        {/* Bank Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-gray-300 mb-8"
        >
          <p className="mb-2">We are committed to ensuring the safety and security of all your financial transactions.</p>
          <p>With advanced fraud detection algorithms, we help identify suspicious activities and prevent financial fraud.</p>
          <p className="mt-4">Explore the system by selecting one of the following options to start managing the bank's data:</p>
        </motion.div>

        {/* Button Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
        >
          {/* Accounts Button */}
          <Link to="/accounts">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-600 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              View Accounts
            </motion.button>
          </Link>

          {/* Users Button */}
          <Link to="/users">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-green-600 rounded-lg shadow-md text-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              View Users
            </motion.button>
          </Link>

          {/* Relations Button */}
          <Link to="/relations">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-purple-600 rounded-lg shadow-md text-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              View Relations
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-500">
        <p>&copy; 2025 Fraud Detection System. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Dashboard;
