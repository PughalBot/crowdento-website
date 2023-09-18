import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="h-screen bg-white  flex flex-col items-center justify-center space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <h1 className="text-5xl text-black">About Us</h1>
      <p className="text-center text-black">We are a leading event management company with over a decade of experience. Join us for memorable events and experiences!</p>
    </motion.section>
  );
};

export default About;
