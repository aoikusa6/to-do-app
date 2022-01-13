import "./App.css";
import InputContainer from "./components/InputContainer";
import TaskContainer from "./components/TaskContainer";
import TaskFilter from "./components/TaskFilter";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [info, setInfo] = useState([]);
  const addInfo = (newInfo) => {
    newInfo.id = uuidv4();
    setInfo([...info, newInfo]);
  };
  const deleteInfo = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setInfo(info.filter((info) => info.id !== id));
    }
    console.log(info.index);
  };
  const filterInfo = (filterBy) => {
    const filterOptions = ["Normal", "Intermediate", "Urgent"];
    if (!filterOptions.includes(filterBy)) return [...info];
    return info.filter((info) => info.level === filterBy);
  };
  setInfo((prevValue) => filterInfo(prevValue, filterBy));
  return (
    <div>
      <TaskFilter filterInfo={filterInfo} />
      <TaskContainer info={info} deleteInfo={deleteInfo} />
      <InputContainer addInfo={addInfo} />
    </div>
  );
}

export default App;
