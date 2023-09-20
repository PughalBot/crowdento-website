import Head from "next/head";
import Footer from "./components/Footer";
import { useRouter } from "next/router";

const Corporate = () => {

    const router = useRouter();

    return (
        <>
            <Head>
                <meta name="description" content="Crowdento is an Event management company that excels in crafting unforgettable events. Merging local traditions with modern flair, we orchestrate experiences that resonate. Driven by precision and creativity, we're redefining gatherings in Chennai."/>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/cc1.png' />
                <title>Corporate Events | Crowdento</title>
            </Head>
            <div className="flex flex-col md:flex-row h-screen">
                {/* Left Half */}
                <div className="bg-black p-8 w-full lg:w-1/2 overflow-y-auto">
                <div className="w-full flex justify-end">
                    <button 
                        className="text-[#f7f7f7] z-10"
                        onClick={() => router.back()}
                    >
                      <img src="/back.png" alt="Phone" className="w-10 h-auto" />
                    </button>
                    </div>
                    <h1 className="font-bs text-5xl text-[#f7f7f7] mb-6">Corporate Events</h1>
                    {/* Image for mobile and tablet views */}
                    <img src="/cop1.jpg" alt="Event Image" className="lg:hidden object-cover w-full h-2/3 mb-6" />
                    <h1 className="font-bold font-jb text-lg text-[#b3b3b3]">
                    Crowdento's Premier Corporate Event Solutions in Chennai
                    </h1>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    In the world of business, events are more than just gatherings—they are opportunities to forge connections, celebrate achievements, and set the stage for future endeavors. At Crowdento, we recognize the significance of these events and are committed to delivering corporate experiences that are both impactful and memorable.
                    </p>                    
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    Understanding the corporate ethos is paramount. Whether it's an annual gala, a product launch, a team-building retreat, or an international conference, our team begins by grasping your company's objectives, brand identity, and the message you wish to convey
                    </p>                    
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    Location and ambiance play a pivotal role. Chennai, with its blend of modernity and tradition, offers a diverse array of venues. From state-of-the-art convention centers to serene beachfront resorts, we guide you in selecting a locale that complements your event's theme and purpose.
                    </p>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3] pb-6">
                    However, our services extend beyond just logistics. With an ear to the ground on the latest tech trends, we incorporate cutting-edge audio-visual equipment, ensuring your presentations leave a mark. Gastronomy is another of our fortes. Our culinary experts design menus that cater to diverse palates, all while reflecting the sophistication expected of corporate gatherings.                    </p>
                    <Footer/>
                </div>

                {/* Right Half for desktop view */}
                <div className="hidden lg:block w-1/2 relative">
                    <img src="/cop1.jpg" alt="Event Image" className="absolute top-0 left-0 w-full h-full object-cover" />
                </div>
            </div>
        </>
    );
};

export default Corporate;
