import Header from "./components/Header";
import Memo from "./Memo";
import HorizonLine from "./components/HorizonLine";

function App() {
  const appStyle = {
    backgroundColor: "#FEFAF6",
    minHeight: "100vh",
    width: "100vw",
    padding: 0,
    margin: 0,
  };
  return (
    <div style={appStyle}>
      <Header />
      <Memo />
    </div>
  );
}

export default App;
