import { useQuery } from "@tanstack/react-query";

import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { fetchEvents } from "../../util/http.js";

// Tanstack query does not send http requests, at least not on its own. we have to write the code that send the actual HTTP request. Transtack query then manage the data, errors, caching & much more!

// fetchEvents() is executed & HTTP request is sent and it cached(stored) data, if execute again this component function, react query will see that this query key has been used before and that it did alredy vache data for that key. and it will then instantly yield(provide) that data, but at the same time, also send this request gain nehind the scenes to see if updated data is available. And then it will kind of silently replace that data with the updated data so that after a couple of seconds or however long it takes to fetch data, we do have the updated data on the screen.
export default function NewEventsSection() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { max: 3 }],
    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }),
    // when new request is sent
    staleTime: 5000, // Stale time allows you to specify how long React Query should consider the data to be fresh before fetching it from the server again. you're guaranteed to not get another network request for 5000ms after the first successful one.

    // how long data is kept
    // gcTime: 30000, // garbage collector time - mean that the cached data would only kept around for a half a minute and thereafter, it would be discarded. So thereafter, if this component need to render again, there would be no cached data
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "Failed to fetch events."}
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
