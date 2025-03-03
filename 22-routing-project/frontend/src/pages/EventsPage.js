import {
  useLoaderData,
  //json,
  //defer,
  Await,
} from "react-router-dom";
// we can also render loader data in eventlist page
// you can access loaded data with help of useLoaderData in any component on the same level or lower level

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }
  // return (
  //   <EventsList events={data} />
  //   // <EventsList/>
  // );

  return (
    // to show fallback
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}> 
    <Await resolve={events}>
      {(loadedEvents) => <EventsList events={loadedEvents} />}
    </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' }
    throw new Response(JSON.stringify({ message: "could not fetch events." }), {
      status: 500,
    });

    // only available when using react router v6
    // throw json({message: 'could not fetch events.'}, {status: 500})
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function Loader() {
  // sometime we wanna load page before the data is there and show some parts of the page already untill all the data is there, use defer

  // but in react router v7+, not needed
  // return defer({
  //   events: loadEvents(),
  // });
  // for v7+
  return {
    events: loadEvents(),
  };
}
