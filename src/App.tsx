import "./App.css";
import Person from "./Person";
import { PersonProvider } from "./PersonContext";

function App() {
  return (
    <PersonProvider>
      <Person name={"Anmol"} age={24} />
    </PersonProvider>
  );
}

export default App;
