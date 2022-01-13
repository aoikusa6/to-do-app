import Card from "../shared/Card";
import { useContext } from "react";
import InfoCard from "./InfoCard";
import InfoContext from "../shared/InfoContext";

function TaskContainer() {
  const { info } = useContext(InfoContext);
  if (!info || info.length === 0) {
    return (
      <Card props="TaskContainer">
        <h2>No task yet</h2>;
      </Card>
    );
  }
  return (
    <Card props="TaskContainer">
      {info.map((item) => (
        <InfoCard key={item.id} id={item.id} item={item} />
      ))}
    </Card>
  );
}
//   return (
//     <Card props="TaskContainer">
//       {info.filter((info) => info.level === filterInfo.filterBy)}
//     </Card>
//   );
// }
export default TaskContainer;
