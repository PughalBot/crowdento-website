import Head from "next/head";
import Footer from "./components/Footer";
import { useRouter } from "next/router";

const College = () => {

    const router = useRouter();

    return (
        <>
            <Head>
                <meta name="description" content="Crowdento is an Event management company that excels in crafting unforgettable events. Merging local traditions with modern flair, we orchestrate experiences that resonate. Driven by precision and creativity, we're redefining gatherings in Chennai."/>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/cc1.png' />
                <title>Farewell & College Events | Crowdento</title>
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
                    <h1 className="font-bs text-5xl text-[#f7f7f7] mb-6">Farewell & College Events</h1>
                    {/* Image for mobile and tablet views */}
                    <img src="/col1.jpg" alt="Event Image" className="lg:hidden object-cover w-full h-2/3 mb-6" />
                    <h1 className="font-bold font-jb text-lg text-[#b3b3b3]">
                    Crowdento's Unforgettable Farewell & College Events in Chennai
                    </h1>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    The journey through academia is filled with milestones, each deserving its own unique celebration. From the excitement of freshman year to the poignant farewells that mark the end of an era, Crowdento is here to make every college event a cherished memory.
                    </p>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    Our expertise in college events is rooted in understanding the vibrancy and energy of youth. Whether it's an electrifying college fest, a sophisticated graduation ceremony, or a heartfelt farewell party, our team captures the essence of these moments, transforming them into unforgettable experiences.
                    </p>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    Location selection is vital, and with Chennai's diverse range of venues, we offer options that resonate with the spirit of the event. Imagine a farewell soirée at a chic rooftop lounge overlooking the city, or a college fest at a sprawling ground pulsating with music and lights.
                    </p>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    But our services don't stop at venue selection. We're attuned to the latest trends in entertainment, ensuring that your event is not just a gathering but a spectacle. From live bands and DJs to interactive installations and photo booths, we add elements that make each event unique.
                    </p><p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    Food and beverage play a crucial role too. Our culinary teams craft menus that appeal to young palates, blending traditional flavors with contemporary twists.
                    </p>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3] pb-6">
                    At Crowdento, we believe that every college event is a story, a marker of time, friendships, and memories made. We're here to help you tell that story in the most spectacular way possible, creating moments that students will reminisce about for years to come.                    </p>
                    <Footer/>
                </div>

                {/* Right Half for desktop view */}
                <div className="hidden lg:block w-1/2 relative">
                    <img src="/col1.jpg" alt="Event Image" className="absolute top-0 left-0 w-full h-full object-cover" />
                </div>
            </div>
        </>
    );
};

export default College;
