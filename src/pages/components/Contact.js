import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const Contact = () => {
  return (
    <>
    <Head>
      <meta name="description" content="Crowdento is an Event management company that excels in crafting unforgettable events. Merging local traditions with modern flair, we orchestrate experiences that resonate. Driven by precision and creativity, we're redefining gatherings in Chennai."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content="/cc1.png"/>
        <link rel='icon' href='/cc1.png' />
        <title>Crowdento Events</title>
    </Head>
    <motion.section 
      id="contact" 
      className="h-fit bg-gradient-to-b from-[#E9CFF7] to-[#E8E2F1] pt-24  md:pt-28 flex flex-col items-center  space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 1 }}
    >
      <h1 className="font-pp font-medium text-4xl text-[#2E2A39]">Contact Us</h1>
      <p className="font-pp text-center text-[#2E2A39] w-11/12 lg:w-2/5">If you have any questions or would like more information about our services, please feel free to contact us. We're here to help!</p>
      
      <div className="grid grid-cols-4 gap-4 md:gap-4 md:pt-5 pb-6">
        <Link href="https://www.instagram.com/crowdento" target="_blank">
        <div className="flex flex-col items-center">
          <img src="/insta.png" alt="Phone" className="w-6 md:w-8 h-auto" />
        </div>
        </Link>

        <Link href="tel:+919840457238" target="_blank">
        <div className="flex flex-col items-center ">
          <img src="/phone.png" alt="Phone" className=" w-6 md:w-8 h-auto" />
        </div>
        </Link>

        <Link href="mailto:contact@crowdento.com" target="_blank">
        <div className="flex flex-col items-center">
          <img src="/email.png" alt="Phone" className="w-6 md:w-8 h-auto" />
        </div>
        </Link>
      <Link href="https://wa.me/919840457238" target="_blank">
        <div className="flex flex-col items-center">
          <img src="/wap.png" alt="Phone" className="w-6 md:w-8 h-auto" />
        </div>
        </Link>
      </div>
    </motion.section>
    </>
  );
};

export default Contact;