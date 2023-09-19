import { motion } from "framer-motion";
import Head from "next/head";

const Events = () => {
  const eventData = [
    { id: 1, name: "Music Fest 2023", date: "Oct 15, 2023" },
    { id: 2, name: "Tech Conference 2023", date: "Nov 21, 2023" },
  ];

  return (
    <>
    <Head>
        <meta name="description" content="Explore Crowdento's portfolio: a showcase of Chennai's most iconic events. Witness our expertise from intimate gatherings to grand soirees. Dive into a world of event excellence with us."/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/cc1.png' />
        <title>Crowdento Events</title>
    </Head>
    <motion.section 
      id="events" 
      className="h-screen bg-white flex flex-col items-center justify-center space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
    >
      <h1 className="text-5xl text-black ">Upcoming Events</h1>
      <ul>
        {eventData.map(event => (
          <li key={event.id} className="text-center text-black ">
            {event.name} - {event.date}
          </li>
        ))}
      </ul>
    </motion.section>
    </>
  );
};

export default Events;
