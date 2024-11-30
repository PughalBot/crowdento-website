import { motion } from "framer-motion";
import Head from "next/head";

const About = () => {
  return (
    <>
    <Head>
        <meta name="description" content="Crowdento is an Event management company that excels in crafting unforgettable events. Merging local traditions with modern flair, we orchestrate experiences that resonate. Driven by precision and creativity, we're redefining gatherings in Chennai."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        
        <link rel='icon' href='lol.png' />
        <title>EBIV | இபிவ்</title>
    </Head>
    <motion.section 
  id="about" 
  className="h-fit bg-gradient-to-b from-[#E9CFF7] to-[#E8E2F1] flex flex-col pt-16 md:pt-24 pb-16 md:pb-24 space-y-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
>
<div className="max-w-7xl mx-auto px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-pp font-bold mb-6">The EBIV Story</h2>
            <p className="text-lg font-pp text-muted-foreground mb-6">
              EBIV represents the convergence of contemporary design and timeless elegance. 
              Our commitment to quality craftsmanship and sustainable practices sets us apart 
              in the world of modern fashion.
            </p>
            <p className="text-lg font-pp text-muted-foreground">
              Each piece in our collection is thoughtfully designed to empower individuals 
              who appreciate sophisticated simplicity and uncompromising quality. We believe 
              in creating fashion that transcends seasons and trends.
            </p>
          </div>
          <div className="relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=2070"
              alt="About EBIV"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
      </motion.section>
      </>
  );
};

export default About;
