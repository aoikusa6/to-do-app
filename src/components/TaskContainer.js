import Card from "../shared/Card";
import { useContext } from "react";
import InfoCard from "./InfoCard";
import InfoContext from "../shared/InfoContext";
import { render } from "@testing-library/react";

function TaskContainer() {
  const { info, type } = useContext(InfoContext);
  const renderInfo = () => {
    let infoToShow = [];
    const filterOptions = ["Normal", "Intermediate", "Urgent"];
    if (!filterOptions.includes(type)) infoToShow = [...info];
    else infoToShow = info.filter((info) => info.level === type);
    return infoToShow.map((item) => (
      <InfoCard key={item.id} id={item.id} item={item} />
    ));
  };

  return <Card props="TaskContainer">{renderInfo()}</Card>;
}
export default TaskContainer;
