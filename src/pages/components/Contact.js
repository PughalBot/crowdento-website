import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="h-screen bg-white flex flex-col items-center justify-center space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 1 }}
    >
      <h1 className="text-5xl text-black ">Contact Us</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="p-2 border border-black "/>
        <input type="email" placeholder="Email" className="p-2 border border-black "/>
        <textarea placeholder="Message" rows="4" className="p-2 border border-black "></textarea>
        <button type="submit" className="p-2 bg-white border-black border-2 text-black hover:bg-black hover:text-white transition">Submit</button>
      </form>
    </motion.section>
  );
};

export default Contact;
