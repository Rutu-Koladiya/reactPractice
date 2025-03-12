import ClientDemo from "./components/ClientDemo";
import RSCDemo from "./components/RSCDemo";
import DataFetchingDemo from "./components/DataFetchingDemo";

export default function Home() {
  return (
    <main>
      {/* <ClientDemo>
        <RSCDemo />
      </ClientDemo> */}
      {/* <ClientDemo />
      <RSCDemo/> */}
      <DataFetchingDemo />
    </main>
  );
}
