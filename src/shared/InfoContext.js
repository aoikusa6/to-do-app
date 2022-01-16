import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  const [type, setType] = useState("");
  const [infoToEdit, setInfoToEdit] = useState({
    item: {},
    isEdit: false,
  });
  let infoToShow = [];
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
    setType(filterBy);
  };
  const updateInfo = (id, upditem) => {
    setInfo(
      info.map((item) => (item.id === id ? { ...info, ...upditem } : info))
    );
  };
  const editInfo = (item) => {
    setInfoToEdit({
      item,
      isEdit: true,
    });
  };
  return (
    <InfoContext.Provider
      value={{
        info,
        type,
        updateInfo,
        addInfo,
        deleteInfo,
        filterInfo,
        editInfo,
        infoToEdit,
        infoToShow,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
