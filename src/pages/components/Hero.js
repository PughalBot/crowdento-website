import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
      id="hero" 
      className="h-screen bg-white flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <h1 className="text-5xl text-black">Welcome to Our Event</h1>
    </motion.section>
  );
};

export default Hero;
