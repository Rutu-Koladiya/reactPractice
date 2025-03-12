import Accordian from "./components/accordian/Accordian";
import AccordionItem from "./components/accordian/AccordionItem";
import SearchableList from "./components/accordian/SearchableList/SearchableList";
import Place from './components/accordian/SearchableList/Place'

import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordian className="accordion">
          <Accordian.Item
            id="experience"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can&apos;t fo wrong with us.</p>
              <p>
                We are in the bussiness of planning highly individualized
                vacation trips for more than 20 years.
              </p>
            </article>
          </Accordian.Item>

          <Accordian.Item
            id="10-year"
            className="accordion-item"
            title="We got 10 years of experience"
          >
            <article>
              <p>You can&apos;t fo wrong with us.</p>
              <p>
                We are in the bussiness of planning highly individualized
                vacation trips for more than 10 years.
              </p>
            </article>
          </Accordian.Item>
        </Accordian>
      </section>

      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item1", "item2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
