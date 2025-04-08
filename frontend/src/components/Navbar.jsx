import { Link } from "react-router-dom";
import { FaHome, FaMoneyBillWave, FaSearch, FaSignInAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="bg-gray-900 text-white shadow-md fixed w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-5">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-wide hover:text-blue-400 transition-all duration-300"
        >
          Fraud Detection
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-lg">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
          >
            <FaHome className="text-blue-300" /> Dashboard
          </Link>

          <Link 
            to="/transactions" 
            className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300"
          >
            <FaMoneyBillWave className="text-green-300" /> Transactions
          </Link>

          <Link 
            to="/circular-detection" 
            className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300"
          >
            <FaSearch className="text-purple-300" /> Circular Detection
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
