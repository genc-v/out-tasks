import BoxData from "./boxes/BoxData";
import CardData from "./cards/CardData";

alert(
  "Hi, due to not having the images, I didn't add any data for that(but I can add it if it is a requirement)."
);
function App() {
  // To make the info cards/boxes with info in them
  return (
    <div>
      {/* first page for the info box */}
      <BoxData />

      {/* second page for the info cards */}
      <CardData />
    </div>
  );
}

export default App;
