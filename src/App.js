import "./App.css";
import InputContainer from "./components/InputContainer";
import TaskContainer from "./components/TaskContainer";
import TaskFilter from "./components/TaskFilter";
import { InfoProvider } from "./shared/InfoContext";

function App() {
  return (
    <InfoProvider>
      <div>
        <TaskFilter />
        <TaskContainer   />
        <InputContainer  />
      </div>
    </InfoProvider>
  );
}

export default App;
