import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Update from "./components/update/Update";
import "./App.css";
import LeftBar from "./components/leftBar/LeftBar";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <LeftBar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
};

export default App;
