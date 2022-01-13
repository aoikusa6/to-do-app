import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  const [infoEdit, setInfoEdit] = useState({
    item: {},
    edit: false,
  })
  const addInfo = (newInfo) => {
    newInfo.id = uuidv4();
    setInfo([...info, newInfo]);
  };
  const deleteInfo = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setInfo(info.filter((info) => info.id !== id));
    }
  };
  const filterInfo = (filterBy) => {
    const filterOptions = ['Normal', 'Intermediate', 'Urgent']
    if (!filterOptions.includes(filterBy)) return [...info]
    setInfo(info.filter((info) => info.level === filterBy))
  }
  
  const editInfo = (item) => {
    setInfoEdit({
      item,
      edit: true,
    })
  }
  return (
    <InfoContext.Provider value={{ info, addInfo, deleteInfo, filterInfo, editInfo, infoEdit}}>
      {children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
