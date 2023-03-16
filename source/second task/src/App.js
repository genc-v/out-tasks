import InfoCard from "./components/infoCard/InfoCard";
import InsideInfo from "./components/insideInfo/InsideInfo";
import MyTabs from "./components/Tabs/MyTabs";

function App() {
  return (
    <div>
      <div className="page">
        <MyTabs />
      </div>
      <div className="page">
        <InfoCard />
      </div>
      <div className="page">
        <InsideInfo />
      </div>
    </div>
  );
}
export default App;
