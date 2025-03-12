// import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
// import Layout from '../components/layout/Layout'

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  //   useEffect(() => {
  //     // send a http eequest and fetch data
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);

  return <MeetupList meetups={props.meetups} />;
}

// nextjs will look for a fun with this name and if it finds ti, it executes fun during pre-rendering process. and first of all it calls getStaticProps
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    //incremental static site generation(SSG)
    revalidate: 10, // after 10 sec it regenerates the page
  };
}

// alternative of getStaticProps
// also nextjs lookin for it but this fun will not run during build process, but insted always on server after deployment

// as it is not fast coz it regenerate all time where getStaticProps faster than regerating n feching that data for every incoming request. and it can be cached and reused

// export async function getServerProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: DUMMY_MEETUPS,
//   };
// }

export default HomePage;
