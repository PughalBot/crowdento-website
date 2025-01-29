import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Waves from "../Backgrounds/Waves/Waves";

const Hero = () => {
  const text = "EBIV Clothing is an innovative venture poised to disrupt Chennai's streetwear scene. We leverage the distinctive properties of terry cotton to craft a line that resonates with global fashion trends, yet remains deeply rooted in the local culture. Our focus on customization and quality at affordable prices uniquely positions us in a rapidly evolving market.";

  const handleScroll = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });// Close mobile menu after clicking a link
  };
  
  return (
    <>
    <Head>
        <meta name="description" content="EBIV represents the convergence of contemporary design and timeless elegance. Our commitment to quality craftsmanship and sustainable practices sets us apart."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content="/cc1.png"/>
        <link rel='icon' href='/lol.png' />
        <title>EBIV | இபிவ்</title>
    </Head>
    
    <section 
      id="hero" 
      className="h-screen bg-gradient-to-b from-[#E9CFF7] to-[#E8E2F1] flex flex-col items-center justify-center cursor-none"
    >
      <Waves
            lineColor="#eeaff2"
            backgroundColor="rgba(255, 255, 255, 0)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
      <motion.div 
      className=" flex justify-center items-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 2 }}
      >
        
          <Image
            src="https://cdn.discordapp.com/attachments/981618787491127306/1334074586454822992/weblogo.png?ex=679b3547&is=6799e3c7&hm=432a6cce01b936257eaa19e3403baabd1dd42a571314eeb9a4c0269da6312bfd&"
            alt="Logo"
            width={500}
            height={300}
            priority
            className="w-3/4 md:w-1/2 lg:w-1/3 max-w-[500px]"
          />
          <div>
          </div>
        </motion.div>     
      
      
      {/* <div className="font-pp font-medium w-11/12 tetx-center text-justify md:text-2xl mx-4 my-6 text-black">
        {text.split(" ").map((word, index) => (
          <motion.span 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
          >
            {word + " "}
          </motion.span>
        ))}
      </div> */}

      <motion.div 
        className="absolute bottom-4 animate-bounce"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
      <img src="/arrow.png" onClick={() => handleScroll("about")} alt="arrow" className="h-10 md:h-14 w-auto" />
      </motion.div>
    </section>
    </>
  );
};

export default Hero;
