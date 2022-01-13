import Card from "../shared/Card";
import InfoCard from "./InfoCard";

function TaskContainer({ info, deleteInfo }) {
  return (
    <Card props="TaskContainer">
      {info.map((item) => (
        <InfoCard key={item.id} id={item.id} item={item} deleteInfo={deleteInfo} />
      ))}
    </Card>
  );
}
export default TaskContainer;
