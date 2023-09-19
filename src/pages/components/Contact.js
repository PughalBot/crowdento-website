import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="h-fit bg-black pt-16 pb-6 md:pb-20 md:pt-24 flex flex-col items-center  space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 1 }}
    >
      <h1 className="font-bs text-5xl text-[#f7f7f7]">Contact Us</h1>
      <p className="font-jb text-center text-[#b3b3b3] w-11/12">If you have any questions or would like more information about our services, please feel free to contact us. We're here to help!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 md:pt-10">
        <div className="flex flex-col items-center">
          <img src="/loc.png" alt="Phone" className="w-10 md:w-auto h-auto" />
          <p className="font-jb text-[#b3b3b3] pt-2">Address</p> 
          <p className="font-jb text-[#b3b3b3] pt-2 text-center w-11/12">Chennai,Tamilnadu, India.</p>
        </div>

        <div className="flex flex-col items-center ">
          <img src="/phone.png" alt="Phone" className=" w-10 md:w-auto h-auto" />
          <p className="font-jb text-[#b3b3b3] pt-2">Phone</p> 
          <p className="font-jb text-[#b3b3b3] pt-2 text-center w-11/12">+91 9840457238</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/email.png" alt="Phone" className="w-10 md:w-auto h-auto" />
          <p className="font-jb text-[#b3b3b3] pt-2">Email</p>
          <p className="font-jb text-[#b3b3b3] pt-2 text-center w-11/12">contact@crowdento.com</p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/wap.png" alt="Phone" className="w-10 md:w-auto h-auto" />
          <p className="font-jb text-[#b3b3b3] pt-2">Whatsapp</p>
          <p className="font-jb text-[#b3b3b3] pt-2 text-center w-11/12">+91 9840457238</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
