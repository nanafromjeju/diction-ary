import Header from "./components/Header";
import Memo from "./components/Memo";
import HorizonLine from "./components/HorizonLine";
import "./components/Header.css";
import "./components/Memo.css";

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
