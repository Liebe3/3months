import "./App.css";
import Todolist from "./components/Todolist";
import ConfrimationModalContents from "./components/Modal/ConfrimationModalContents";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-[#447D9B] border border-green">
      <Todolist />
      {/* <ConfrimationModalContents /> */}
    </div>
  );
}

export default App;
