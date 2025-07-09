import "./App.css";
import Todolist from "./components/Todolist";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-[#447D9B] border border-green">
      <Todolist />
    </div>
  );
}

export default App;
