import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
// import { IEvent } from "@/database";
import { events  } from "@/lib/constants";


// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Page = async () => {
  // const response = await fetch(`${BASE_URL}/api/events`);
  // const { events } = await response.json();
  // console.log(events)
  // console.log(response)

  return (
    <section>
      <h1 className="text-center">The hub for every Dev <br /> event you cant miss</h1>
      <p className="text-center mt-5">Hackatons, meetup, and Conferences, All in one Place</p>

      <ExploreBtn />

     <div className="mt-20 space-y-7">
      <h3>Featured Events</h3>

      <ul className="events">
        {events && events.length > 0 && events.map((event) => (
          <li key={event.title}>
            <EventCard {...event} />
          </li>
          
        ))}
        
      </ul>
     </div>
    </section>
  );
};

export default Page;