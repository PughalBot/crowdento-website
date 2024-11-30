import Head from "next/head";
import Footer from "./components/Footer";
import { useRouter } from "next/router";

const Birthday = () => {

    const router = useRouter();

    return (
        <>
            <Head>
                <meta name="description" content=""/>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/cc1.png' />
                <title>Birthday Events | Crowdento</title>
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
                    <h1 className="font-bs text-5xl text-[#f7f7f7] mb-6">Birthday Events</h1>
                    {/* Image for mobile and tablet views */}
                    <img src="/bday1.jpg" alt="Event Image" className="lg:hidden object-cover w-full h-2/3 mb-6" />
                    <h1 className="font-bold font-jb text-lg text-[#b3b3b3]">
                    Crowdento's Custom Birthday Celebrations in Chennai
                    </h1>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    Birthday celebrations are more than just parties; they are milestones that deserve to be celebrated in the grandest way possible. At Crowdento, we understand the essence of these special days and aim to elevate every moment to create a lasting impression.
                    </p>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    From selecting the perfect venue to curating a theme that resonates with the celebrant's personality, our team meticulously plans every detail. Whether you envision a fairytale-inspired soirée for your little one, a sophisticated gala for a milestone birthday, or a nostalgic trip down memory lane, we bring your dream to life.
                    </p>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3]">
                    Our culinary experts craft gourmet menus that tantalize the palate, while our entertainment specialists ensure there's never a dull moment. Decor? Think beyond balloons and streamers. We integrate technology, art, and creativity to set the mood and transport guests to a world of wonder.
                    </p>
                    <p className="pt-4 font-jb text-justify text-lg text-[#b3b3b3] pb-6">
                    With Crowdento by your side, every birthday celebration becomes a story worth telling. We don't just plan events; we craft memories. Let us transform your special day into an enchanting experience that will be cherished for years to come.
                    </p>
                    <Footer/>
                </div>

                {/* Right Half for desktop view */}
                <div className="hidden lg:block w-1/2 relative">
                    <img src="/bday1.jpg" alt="Event Image" className="absolute top-0 left-0 w-full h-full object-cover" />
                </div>
            </div>
        </>
    );
};

export default Birthday;
