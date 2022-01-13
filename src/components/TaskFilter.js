import Card from "../shared/Card";

function TaskFilter({ filterInfo }) {
  return (
    <Card props="taskFilter">
      <span className="filter" onClick={() => filterInfo("All")}>
        All
      </span>
      <span className="filter" onClick={() => filterInfo("Normal")}>
        Normal
      </span>
      <span className="filter" onClick={() => filterInfo("Intermediate")}>
        Intermediate
      </span>
      <span className="filter" onClick={() => filterInfo("Urgent")}>
        Urgent
      </span>
    </Card>
  );
}
export default TaskFilter;
