import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept'; 

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {/* FOR PROPS 1 add individually*/}
        {/* <CoreConcept
              title="Components"
              description="The core UI building block."
              img={componentsImg}
            /> */}
        {/* FOR PROPS 2 add from another file */}
        {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}
        {/* FOR PROPS 2-1 add from another file using spread operator (Passing a Single Prop Object)*/}
        {/* <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

        {/* there is no need diplay component one by one by repeating it */}
        {/* if we'll not define key it'll not change in UI but key use to reduce the error */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
