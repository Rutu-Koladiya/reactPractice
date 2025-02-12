import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );

      resolve(sortPlaces);
    });
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  // Todo: Fetch available places from backend API
  // const [isFetching, setIsFetching] = useState(false);
  // const [availablePlaces, setAvailablePlaces] = useState([]);
  // const [error, setError] = useState();

  // we can't use async/await here coz for that we have to write export default async function AvailablePlaces and it's not correct in componenet

  const {
    isFetching,
    fetchedData: availablePlaces,
    error,
  } = useFetch(fetchSortedPlaces, []);

  // useEffect(() => {
  //   async function fetchPlaces() {
  //     setIsFetching(true);
  //     try {
  //       const places = await fetchAvailablePlaces();

  //       navigator.geolocation.getCurrentPosition((position) => {
  //         const sortPlaces = sortPlacesByDistance(
  //           places,
  //           position.coords.latitude,
  //           position.coords.longitude
  //         );

  //         setAvailablePlaces(sortPlaces);
  //         setIsFetching(false);
  //       });
  //     } catch (error) {
  //       setError({
  //         message:
  //           error.message || "Could not fetch places, please try again later.",
  //       });
  //       setIsFetching(false);
  //     }

  //     // you can check if the response is an error response by checking the response.ok property.If this is true, it means that you got a success response with a 200 or 300-ish status code. If this is not true, so if it is false,you got a 400 or 500-ish status code
  //   }
  //   // fetch("http://localhost:3000/places")
  //   //   .then((response) => {
  //   //     return response.json();
  //   //   })
  //   //   .then((resData) => {
  //   //     setAvailablePlaces(resData.places);
  //   //   });
  //   fetchPlaces();
  // }, []);

  if (error) {
    return <Error title="An error ocurred!" message={error.message} />;
  }
  // It would create an infinite loop because when calling fetch like this directly in the component function, this code of course will be executed every time the component function executes and therefore a new request would be sent whenever this component function executes.The problem is that in the second then block we then update the state, which of course causes this component function to execute again. So we would end up with a new request, a new state update, a new execution, a new request, a new state update, and so on. NO WORRIES we can use USEEFFECT()

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data.."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
