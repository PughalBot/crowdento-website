import Head from "next/head";
import Footer from "./components/Footer";
import { useRouter } from "next/router";

const Wedding = () => {

    const router = useRouter();

    return (
        <>
            <Head>
                <meta name="description" content="Crowdento is an Event management company that excels in crafting unforgettable events. Merging local traditions with modern flair, we orchestrate experiences that resonate. Driven by precision and creativity, we're redefining gatherings in Chennai."/>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/cc1.png' />
                <title>Wedding Events | Crowdento</title>
            </Head>
            <div className="flex flex-col md:flex-row h-screen">
                {/* Left Half */}
                <div className="bg-black p-8 w-full lg:w-1/2 overflow-y-auto">
                <div className="w-full flex justify-start pb-4">
                    <button 
                        className="text-[#f7f7f7] z-10"
                        onClick={() => router.back()}
                    >
                      <img src="/back.png" alt="Phone" className="w-10 h-auto" />
                    </button>
                    </div>
                    <h1 className="font-bs text-5xl text-[#f7f7f7] mb-6">Wedding Events</h1>
                    {/* Image for mobile and tablet views */}
                    <img src="/wed1.jpg" alt="Event Image" className="lg:hidden object-cover w-full h-2/3 mb-6" />
                    <h1 className="font-bold font-jb text-lg text-[#b3b3b3]">
                    Crowdento's Bespoke Wedding Experiences in Chennai
                    </h1>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    Weddings, a union of two souls, are the epitome of love, tradition, and celebration. At Crowdento, we believe every couple has a unique love story, and their wedding should be a reflection of that narrative.                    </p>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    Our approach to wedding planning is deeply personal. We begin by understanding your vision, your dreams, and the essence of your relationship. Whether you dream of a traditional South Indian wedding, replete with rituals and cultural nuances, or a contemporary celebration that blends the best of east and west, our team is adept at bringing your vision to life                    </p>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    Location is key. From beachside vows under the setting sun to palatial venues that echo royal grandeur, Chennai offers a plethora of options, and we help you select the one that mirrors your dream.                    </p>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    But our commitment goes beyond venues and decor. Our culinary maestros craft menus that are a gastronomic delight, representing the rich tapestry of Indian cuisine and global flavors. Entertainment, choreography, guest management - every facet is handled with meticulous precision.                    </p><p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    Food and beverage play a crucial role too. Our culinary teams craft menus that appeal to young palates, blending traditional flavors with contemporary twists.
                    </p>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3] pb-6">
                    Crowdento's expertise ensures that your wedding isn't just an event; it's an experience—a beautiful beginning to your journey of togetherness. Let us weave magic into your most cherished day, making it an eternal memory.
                    </p>
                    <Footer/>
                </div>

                {/* Right Half for desktop view */}
                <div className="hidden lg:block w-1/2 relative">
                    <img src="/wed1.jpg" alt="Event Image" className="absolute top-0 left-0 w-full h-full object-cover" />
                </div>
            </div>
        </>
    );
};

export default Wedding;
