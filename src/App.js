import { useState } from "react";
import Data from "./Data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(Data);

  const removeHandler = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button onClick={removeHandler}>Remove all</button>
      </section>
    </main>
  );
}

export default App;
